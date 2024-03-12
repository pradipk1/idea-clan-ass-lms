import React from 'react';

const LectureList = ({ selectedCourses }) => {
  return (
    <div>
      <h3>Lectures</h3>
      <ul>
        {selectedCourses.map((course) => (
          <li key={course}>
            <strong>{course}</strong>
            <ul>
              <li>Lecture 1</li>
              <li>Lecture 2</li>
              <li>Lecture 3</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureList;
