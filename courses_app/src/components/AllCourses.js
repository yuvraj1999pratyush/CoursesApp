import React,{ useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses=()=>{

    useEffect(()=>{
            document.title="Courses Offered @ Nalanda";
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success call
                console.log(response.data);
                setCourses(response.data);

            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong",{
                    position:"bottom-left",
                    theme:"dark",
                });
            }
        );
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const [courses,setCourses]=useState([ ]);

    const updateCourses=(id)=>{

        setCourses(courses.filter((c)=>
            c.id!=id
        ));
    }

    return(
        <div className="text-center">
            <p className="bg-warning m-0 p-3"></p>
            <h1 className="bg-dark text-light p-4 m-0">All Courses</h1>
            <p className="bg-warning m-0 p-1">List of Courses are as follows</p>
            {
                courses.length>0 ? courses.map((item)=>(
                    <Course key={item.id} course={item} update={updateCourses}/>
                )):"No Courses"
            }


        </div>
    );
};


export default AllCourses;