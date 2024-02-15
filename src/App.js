import { useState } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";


function App() {
  const [isMenuOpen , setIsMenuOpen] = useState(true)
  const menuHandler = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
     <Head menuHandler={menuHandler}></Head>
     <Sidebar isMenuOpen={isMenuOpen}></Sidebar>
    </div>
  );
}

export default App;
