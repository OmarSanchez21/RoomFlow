import React from "react";

const header ={
    backgroundColor: "#282c34",
    color: "white",
    padding: "10px",
    textAlign: "center"
} 

function Header() {
    return (
        <div style={header}>
            <h1>Bienvenidos a nuestro primer programa</h1>
        </div>
    );
    
}

export default  Header;