package com.mkg.springrestreact.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.mkg.springrestreact.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>, CrudRepository<Course, Long>{

}
