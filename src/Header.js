import React from "react";

function Header({ onDarkModeClick }) {
// function Header() {
    return (
        <header div="header">
        <h1>Hawk's Project Perch</h1>
        <button onClick={onDarkModeClick}>Dark Mode</button>
        </header>
    );
}

export default Header;