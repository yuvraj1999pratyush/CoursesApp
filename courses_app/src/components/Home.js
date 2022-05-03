import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";


const Home = () =>{
    useEffect(()=>{
        document.title="Home || Nalanda ";
    },[]);

    return(
        <div>
            
            <div className="text-center p-5 bg-dark text-white">
            <h1>Welcome to Nalanda</h1>
            
            <Container className="p-3">
                <Button color="warning" outline>
                    Start Using 
                </Button>
            </Container>
            </div>
            <p className="bg-warning text-center p-3 m-0">Developed by @Yuvraj.Pratyush</p>
            <img src={require("./nalanda.jpg" )} style={{width:856}} />
        </div>
    )

}

export default Home;