import React from "react";
import '../index.css';
import NewComponent from "./NewComponent";
import TsComponent from "./TsComponent";

const Main = () => {
    return (
        <div>
            <span className="hello-label">Hello world!</span>
            <NewComponent />
            <TsComponent />
        </div>
    )
};

export default Main;
