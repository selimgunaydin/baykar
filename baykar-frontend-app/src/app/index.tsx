import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";

export default function Index() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
