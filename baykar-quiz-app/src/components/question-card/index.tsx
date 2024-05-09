import React, { useEffect, useState } from "react";
import { QuestionsDataInfo } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  setCorrectAnswers,
  setQuestions,
  setUserAnswer,
} from "../../store/slices";
import clsx from "clsx";

type QuestionProps = {
  questionsData: QuestionsDataInfo[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  next: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuestionsCard(props: QuestionProps) {
  const [timer, setTimer] = useState(30);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const approvedChoice = () => {
    if (timer > 20) return;
    const checkAnswer =
      selectedAnswer == props.questionsData[props.count]?.correct_answer;
    if (checkAnswer) {
      props.setScore(props.score + 1);
    }
    dispatch(setUserAnswer(selectedAnswer));

    props.setCount(props.count + 1);

    if (props.count == 9) props.setNext(true);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && props.count < 10) {
        props.setCount(props.count + 1);
        dispatch(setUserAnswer(""));
        setTimer(30);
      } else if (props.count >= 10) {
        props.setNext(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, props, timer]);

  useEffect(() => {
    if (props.questionsData[props.count]) {
      dispatch(setQuestions(props.questionsData[props.count].body));
      dispatch(
        setCorrectAnswers(props.questionsData[props.count].correct_answer),
      );
    }
  }, [dispatch, props.count, props.questionsData]);

  return (
    <div>
      <div className="mt-8 lg:border lg:p-4">
        <p className="flex justify-between text-lg">
          {props.count + 1}. Soru <span>{timer}</span>
        </p>
        <div className="pb-5 pt-6 text-2xl font-normal">
          {props.questionsData[props.count]?.body.charAt(0).toUpperCase() +
            props.questionsData[props.count]?.body.slice(1)}
          ?
        </div>
        <div className="flex flex-col gap-4 border-b pb-4">
          {props.questionsData[props.count]?.answers?.map((answer, index) => (
            <button
              className={clsx(
                "w-full p-4 text-start",
                selectedAnswer === answer ? "bg-gray-200" : "bg-white",
              )}
              onClick={(e) => setSelectedAnswer(e.currentTarget.value)}
              key={index}
              value={answer}
            >
              {String.fromCharCode(97 + index).toUpperCase()} -{" "}
              {answer.charAt(0).toUpperCase() + answer.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-4 flex  justify-end">
          <div
            className={clsx(
              "info me-4 flex h-16 items-center",
              timer < 20 && "hidden",
            )}
          >
            Sonraki soruya geçmek için lütfen {timer - 20} saniye bekleyin
          </div>
          <button
            onClick={approvedChoice}
            className={clsx(
              "h-16 cursor-pointer bg-gray-300 px-12 hover:bg-gray-200",
              timer > 20 && "cursor-not-allowed hover:bg-gray-300",
            )}
            disabled={timer > 20}
            onMouseOver={() =>
              timer > 20 &&
              document.querySelector(".info")?.classList.remove("hidden")
            }
            onMouseLeave={() =>
              document.querySelector(".info")?.classList.add("hidden")
            }
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
