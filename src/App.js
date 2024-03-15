//import { useState } from "react";
import Head from "./components/Head";
//import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Body from "./components/Body";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import MainBodySec from "./components/MainBodySec";
import WatchPage from "./components/WatchPage";
//import { DataProvider } from "./utils/DataContext";

const appRouter = createBrowserRouter([{
  path: "/",
  element : <Body></Body>,
  children :[
    {
      path:"/",
      element:<MainBodySec></MainBodySec>
    },
    {
      path:"watch",
      element:<WatchPage></WatchPage>
    }
  ]
}])
function App() {
  return (
    <div>
      <Provider store={store}>
        <Head></Head>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </div>
  );
}
export default App;
