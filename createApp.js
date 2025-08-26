
import React from "react";
import ReactDOM from "react-dom/client";

// var heading = document.createElement("h1");
// heading.innerHTML = "Hello Javascript";
 
// const root = document.getElementById("root");
// root.appendChild(heading);


const heading = React.createElement("div",{id:"Parent"}, 
    [React.createElement("div",{id:"child"}, 
        [React.createElement("h1", {},"h1 tag"), React.createElement("h2", {},"h2 tag") ]
), React.createElement("div",{id:"child"}, 
        [React.createElement("h1", {},"h1 tag"), React.createElement("h2", {},"h2 tag") ]
)]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);