import { Routes, Route, useNavigate } from "react-router-dom";
import DraftPage from "./pages/DraftPage/index.tsx";
import "./App.css";
import ReactInputPage from "./pages/ReactInputPage/index.tsx";
import CKeditorPage from "./pages/CKeditorPage/index.tsx";

function App() {
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(path);
  };
  return (
    <div className="App">
      <div className="title">템플릿 디자인 관련 에디터 기술 분석 및 적용</div>
      <div className="nav">
        <button className="tab" onClick={() => movePage("reactinput")}>
          리엑트 기본
        </button>
        <button className="tab" onClick={() => movePage("draft")}>
          draft (WYSIWYG)
        </button>
        <button className="tab" onClick={() => movePage("ckeditor")}>
          ckeditor
        </button>
      </div>
      <Routes>
        <Route path="reactinput" element={<ReactInputPage />} />
        <Route path="draft" element={<DraftPage />} />
        <Route path="ckeditor" element={<CKeditorPage />} />
      </Routes>
    </div>
  );
}

export default App;
