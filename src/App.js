import Header from "./components/Header";
import './index.css';
import store from "./utils/store";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./components/Calendar";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "calendar",
        element: <Calendar />
      }
    ],
  },
  
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-100xblue">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
