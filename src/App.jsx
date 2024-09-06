
import './App.css'
import LeftSideBar from './Pages/LeftSideBar'
import RightBar from './Pages/RightBar'

function App() {
  

  return (
    <>
     <div className="bg-black w-fit  h-screen text-white">
      <div className=" flex gap-2 pt-2 h-[90%] ">
     <RightBar/>
     <LeftSideBar/>
     </div>
     </div>
    </>
  )
}

export default App
