import React from "react";
import {Card, CardBody} from "reactstrap";

function Header(){

    return(
        <div>
            <Card className="bg-secondary m-3">
                <CardBody >
                <h1 className="text-center p-2 text-light fw-bold font-monospace">Welcome to Nalanda</h1>
                </CardBody>
            
            </Card>
        </div>
    )
}

export default Header;