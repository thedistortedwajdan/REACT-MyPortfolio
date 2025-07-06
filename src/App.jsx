import MainInfo from "./components/MainInfo.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <div className="m-0 p-0 w-screen h-screen box-border bg-[#121212]">
        <Sidebar />
        <MainInfo />
      </div>
    </>
  );
}

export default App;
 