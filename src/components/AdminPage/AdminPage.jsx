import React, { useState } from 'react';
import CourseList from '../CourseList/CourseList';

const AdminPage = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <CourseList courses={courses} onSelectCourse={addCourse}/>
    </div>
  );
};

export default AdminPage;
