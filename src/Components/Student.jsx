// Student.jsx

import './styles/student.css'
import students from '../data/data.json'

let data = students;
console.log(data)

function Student() {

    return (
      <div className='student-container'>
        <img src="students.profilePhoto" alt="students.names.perferredName" />
        
        
       
        {/* <p className="cohort-term" id="cohort-term">{array of terms}</p> */}
      </div>
    );
  }
  
  export default Student;