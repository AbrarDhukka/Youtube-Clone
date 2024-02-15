//import { useState } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import { Provider } from 'react-redux'
import { store } from "./utils/store";
//import { DataProvider } from "./utils/DataContext";


function App() {
  
  return (
    <div>
    <Provider store={store}>
     <Head></Head>
     <Sidebar></Sidebar>
     </Provider>
     
    </div>
  );
}

export default App;
