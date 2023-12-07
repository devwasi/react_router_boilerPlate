import About from "../screens/About/About";
import Home from "../screens/Home/Home";

export const RouterList = [
    {
        name: "Home",
        path: "/",
        element: <Home />
    },
    {
        name: "About",
        path: "/about",
        element: <About />
    },
    
]