import React, { useState } from 'react';
import CourseList from '../CourseList/CourseList';
import LectureList from '../LectureList/LectureList';

const StudentPage = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const selectCourse = (course) => {
    if (selectedCourses.length < 3 && !selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div>
      <h2>Student Panel</h2>
      <CourseList courses={selectedCourses} onSelectCourse={selectCourse} />
      <LectureList selectedCourses={selectedCourses} />
    </div>
  );
};

export default StudentPage;
