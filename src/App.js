import { useState } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import { DataProvider } from "./utils/DataContext";


function App() {
  
  return (
    <div>
    <DataProvider>
     <Head></Head>
     <Sidebar></Sidebar>
     </DataProvider>
    </div>
  );
}

export default App;
