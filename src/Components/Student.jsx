// Student.jsx

import './styles/student.css';
import students from '../data/data.json';

function Student() {
  return (
    <div className='student-card'>
      {students.map(student => (
        <div key={student.id} className='student-info'>
          <div className='student-img'>
            <img src={student.profilePhoto} alt={student.names.preferredName} />
          </div>
          <div className='student-details'>
            <h3 className='student-name'>{ student.names.preferredName } { student.names.surname }</h3>
            <p className='student-email'>{ student.username }</p>
            <p className='student-dob'><span>Birthday: </span>{ student.dob }</p>
            <br />
            <a href="# " className='student-showmore'>Show More...</a>
            
            {/* Add any additional student information here */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Student;
