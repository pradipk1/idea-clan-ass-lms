import React from 'react';

const CourseList = ({ courses, onSelectCourse }) => {
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
      <button onClick={() => onSelectCourse('Course 1')}>Select Course 1</button>
      <button onClick={() => onSelectCourse('Course 2')}>Select Course 2</button>
      <button onClick={() => onSelectCourse('Course 3')}>Select Course 3</button>
    </div>
  );
};

export default CourseList;
