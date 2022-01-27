import "./App.css";
import FormPage from "./views/Form/FormPage/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSubmitPage from "./views/Form/FormSubmitPage/FormSubmitPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <BrowserRouter>
          <Routes>
            <Route path="/basvuru-olustur" element={<FormPage />} />
            <Route path="/basvuru-basarili" element={<FormSubmitPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
