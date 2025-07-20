import { BrowserRouter } from "react-router-dom";

import MainInfo from "./components/MainInfo.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dot from "./components/Dot.jsx";

function App() {
  return (
    <>
      <div className="p-[5%] box-border bg-[#121212] flex justify-center gap-[10%] ">
        <BrowserRouter>
          <Sidebar />
          <MainInfo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
