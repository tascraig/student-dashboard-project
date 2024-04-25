// Student.jsx

import './styles/student.css';
import students from '../data/data.json';
console.log(students)

function Student() {
  return (
    <div className='student-card'>
      {students.map(student => (
        <div className='student-img' key={student.id}>
          <img src={student.profilePhoto} alt={student.names.preferredName} />
          <h3 className='student-name'>{student.names.preferredName} {student.names.surname}</h3>
        </div>
      ))}
    </div>
  );
}

export default Student;
