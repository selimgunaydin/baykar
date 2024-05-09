import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { resetState } from "../../store/slices";
import Button from "../../components/button";

export default function Introduce() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;
  const startQuiz = () => {
    navigate(`/quiz/${TOTAL_QUESTIONS}`);
  };

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="flex w-full flex-col lg:rounded lg:border lg:p-8">
        <h1 className="mb-4 text-4xl font-bold">Bilgilendirme</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="text-[20px] font-normal">
              Quiz 10 sorudan oluşmaktadır.
            </p>
          </li>
          <li>
            <p className="text-[20px] font-normal">
              Her sorunun süresi 30 saniyedir.
            </p>
          </li>
          <li>
            <p className="text-[20px] font-normal">
              İlk 10 saniye şıklar deaktif olacak. 10. saniyeden sonra
              tıklanabilecektir.
            </p>
          </li>
          <li>
            <p className="text-[20px] font-normal text-red-500">
              Not: Geçmiş sorulara dönülmemektedir.
            </p>
          </li>
          <li className="w-full">
            <Button
              action={startQuiz}
              title="Testi Başlat"
              buttonClass="h-16 !px-16"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
