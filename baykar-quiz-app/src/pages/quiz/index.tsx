import { useEffect, useState } from "react";
import * as api from "../../api";
import { useParams } from "react-router-dom";
import QuestionsCards from "../../components/question-card";
import { QuestionsDataInfo } from "../../types";
import QuizResult from "../result";

export default function Quiz() {
  const { questions } = useParams();
  const [questionsData, setQuestionsData] = useState<QuestionsDataInfo[]>([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (questions) {
        const data = await api.fetchQuizData(parseInt(questions));
        setQuestionsData(data);
      }
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {next ? (
        <QuizResult score={score} />
      ) : (
        <QuestionsCards
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          next={next}
          setNext={setNext}
        />
      )}
    </div>
  );
}
