import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
}from "reactstrap";
import base_url from "../api/bootapi";
import { Link } from "react-router-dom";


const Course = ({ course, update}) =>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted ",{
                    position:"bottom-left",
                    theme:"dark",
                });
                update(id);
            },(error)=>{
                toast.error("Something Went! Could Not Delete",{
                    position:"bottom-left",
                    theme:"dark",
                });
            }
        )
    }
    return(
        <Card className="text-center m-3">
            <CardBody className="bg-light">
                <CardSubtitle className="text-center"><h5>{course.title}</h5></CardSubtitle>
                <CardText className="text-center">{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger m-3" outline onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>


                    <Link to="/update-course">
                        <Button renderAs="button" color="warning m-3" outline>
                            <span>Update</span>
                        </Button>
                    </Link>
                    
                    
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;