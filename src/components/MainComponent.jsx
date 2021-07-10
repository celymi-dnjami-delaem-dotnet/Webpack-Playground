import React from "react";
import '../index.css';
import NewComponent from "./NewComponent";

const Main = () => {
    return (
        <div>
            <span className="hello-label">Hello world!</span>
            <NewComponent />
        </div>
    )
};

export default Main;
