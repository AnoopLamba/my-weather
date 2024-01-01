import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Weather from "./components/Weather";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "", element: <Weather /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
