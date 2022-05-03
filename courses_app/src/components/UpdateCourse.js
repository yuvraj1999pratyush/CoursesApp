import React, { Fragment, useEffect, useState} from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import AllCourses from "./AllCourses";



const UpdateCourse=()=>{
    useEffect(()=>{
        document.title="Update A Course || Nalanda";
    },[]);

    const [updateCourse,setCourse]=useState({ });

    //form handler function
    const updateForm=(e)=>{
        console.log(updateCourse);
        postDataToServer(updateCourse);
        e.preventDefault();
    }


    
    //creating function to post data on server
    const postDataToServer=(data)=>{
        axios.put(`${base_url}/courses`,data).then(
            (response)=>{
                    console.log(response);
                    console.log("success");
                    
                    toast.success("Course is successfully updated",{
                        position:"bottom-left",
                        theme:"dark",
                    });
                    
            },(error)=>{
                    console.log(error);
                    console.log("error");
                    toast.error("Something Went Wrong! Cound Not Update",{
                        position:"bottom-left",
                        theme:"dark",
                    });
            }
        )
    };

    return(
        <Fragment>
            <div className="p-4">
            <p className="bg-warning p-2 m-0"></p>
                <h1 className="text-center bg-dark text-light p-3 m-0">Update Course Details</h1>
                <p className="bg-warning p-2 m-0"></p>
                <Form onSubmit={updateForm} className="bg-light p-3 fw-bold">
                    <FormGroup>
                        <Label for="userIdUpdate">Enter Course Id</Label>
                        <Input type="text" placeholder="Enter Course Id" name="userIdUpdate" id="userIdUpdate" 
                            onChange={(e)=>{
                                setCourse({...updateCourse,id: e.target.value});
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="titleUpdate">Update Course Title</Label>
                        <Input type="text" placeholder="Enter Title Here" name="titleUpdate" id="titleUpdate" 
                            onChange={(e)=>{
                                setCourse({...updateCourse,title: e.target.value});
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="descriptionUpdate">Update Course Description</Label>
                        <Input type="textarea" placeholder="Enter Description Here" name="descriptionUpdate" id="descriptionUpdate" 
                        style={{height:150}}
                        onChange={(e)=>{
                            setCourse({...updateCourse,description: e.target.value});
                        }}
                        />
                     </FormGroup>
                    
                 <Container className="text-center">

                    <Button type="submit" color="success m-3" outline>
                        Update Course
                    </Button>

                    <Button type="reset" color="primary m-3" outline>
                        Clear
                    </Button>
                </Container>
                </Form>
            </div>
        </Fragment>
    )
}

export default UpdateCourse;