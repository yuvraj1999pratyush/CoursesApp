package com.mkg.springrestreact.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mkg.springrestreact.dao.CourseDao;
import com.mkg.springrestreact.entities.Course;

@Service
public class CourseServiceimpl implements CourseService {

	@Autowired
	private CourseDao courseDao;

	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {

		return courseDao.getById(courseId);

	}

	@Override
	public Course addCourse(Course course) {

		courseDao.save(course);
		return course;

	}

	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		Course entity=courseDao.getById(courseId);
		courseDao.delete(entity);
	}

}
