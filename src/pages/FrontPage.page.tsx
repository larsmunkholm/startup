import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "../components/atoms/Button/Button.component";

export const FrontPage = () => {
    const onClick = () => {
        alert("Hejsa, verden");
    };

    return (
        <>
            <Helmet>
                <title>Forside titel</title>
            </Helmet>
            <div>
                <Button onClick={onClick} title={"HEJ Anders"} />
            </div>
        </>
    );
};
