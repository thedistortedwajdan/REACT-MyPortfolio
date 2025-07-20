import { BrowserRouter } from "react-router-dom";

import MainInfo from "./components/MainInfo.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <div className="w-[100%] p-[5%] h-[100%] box-border bg-[#121212] flex justify-center gap-[10%] ">
        <BrowserRouter>
          <Sidebar />
          <MainInfo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
