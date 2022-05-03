import React, { Fragment,useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    
    useEffect(()=>{
        document.title="Add A Course || Nalanda";
    },[]);

    const [course,setCourse]=useState({ });

    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                    console.log(response);
                    console.log("success");
                    toast.success("Course is successfully added",{
                        position:"bottom-left",
                        theme:"dark",
                    });
                    
            },(error)=>{
                    console.log(error);
                    console.log("error");
                    toast.error("Something Went Wrong Re-enter Again",{
                        position:"bottom-left",
                        theme:"dark",
                    });
            }
        )
    };

    return(
        <Fragment >
            <div className="p-4">
            <p className="bg-warning p-2 m-0"></p>
            <h1 className="text-center bg-dark p-3 m-0 text-light">Fill Course Details</h1>
            <p className="bg-warning p-2 m-0"></p>
            <Form onSubmit={handleForm} className="bg-light p-3 fw-bold">
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter Course Id" name="userId" id="userId"
                        onChange={(e)=>{
                            setCourse({...course,id: e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" 
                        onChange={(e)=>{
                            setCourse({...course,title: e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter Description Here" name="description" id="description" 
                        style={{height:150}}
                        onChange={(e)=>{
                            setCourse({...course,description: e.target.value});
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success m-3" outline>
                        Add Course
                    </Button>

                    <Button 
                    type="reset"
                    color="primary m-3" 
                    outline 
                    >
                        Clear
                    </Button>
                </Container>

            </Form>
            </div>
        </Fragment>
    )
}

export default AddCourse;