import { Provider } from "react-redux";
import "./App.css";
import Body from "./Component/Body";
import Header from "./Component/Header";
import store  from "./Utlis/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";

function App() {

  const appRouter = createBrowserRouter([
    {
    path:'/',
    element:<Body />,
    children:[
    {
      path:'/',
      element:<MainContainer/>
    },
  {
    path:'watch',
    element:<WatchPage/>
  }]

  }])

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
