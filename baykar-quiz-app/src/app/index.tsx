import { Route, Routes } from "react-router-dom";
import Introduce from "../pages/entry";
import Quiz from "../pages/quiz";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Introduce />} />
      <Route path="/quiz/:questions" element={<Quiz />} />
    </Routes>
  );
}
