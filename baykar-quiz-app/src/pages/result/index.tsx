import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

type ResultProps = {
  score: number;
};

export default function QuizResult(props: ResultProps) {
  const navigate = useNavigate();
  const answersState = useSelector((state: any) => state.answers);

  return (
    <div className="mb-4">
      <div className="mb-8 flex justify-between">
        <p className="flex items-end text-2xl font-bold">
          Doğru Cevap: {props.score}
        </p>
        <Button action={() => navigate("/")} title="Yeniden Başla" />
      </div>
      <div>
        <table className="border">
          <thead>
            <tr>
              <th className="border p-3 font-bold">Id</th>
              <th className="border p-3 font-bold">Soru</th>
              <th className="border p-3 font-bold">Doğru Cevap</th>
              <th className="border p-3 font-bold">Cevabınız</th>
            </tr>
          </thead>
          <tbody className="">
            {answersState.questions.map((questions: any, index: number) => (
              <tr className="border" key={index}>
                <td className="border p-3 text-center text-[20px]">
                  {index + 1}
                </td>
                <td className="p-3 text-[17px] font-normal">
                  {questions.charAt(0).toUpperCase() + questions.slice(1)}
                </td>
                <td className="border p-3 text-center font-semibold">
                  {answersState.correctAnswers[index]?.charAt(0).toUpperCase() +
                    answersState.correctAnswers[index]?.slice(1)}
                </td>
                <td className="p-3 text-center font-semibold">
                  {answersState.userAnswer[index]?.charAt(0).toUpperCase() +
                    answersState.userAnswer[index]?.slice(1) || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
