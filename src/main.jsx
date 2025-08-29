import "./index.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router=createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
