import "./styles/global/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage.page";

const RoutesComponent = () => {
    return (
        <>
            <header>Page header</header>

            <main>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                </Routes>
            </main>

            <footer>Page footer</footer>
        </>
    );
};

export const App = () => (
    <Router>
        <RoutesComponent />
    </Router>
);
