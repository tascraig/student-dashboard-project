
import './styles/studentlist.css';
import Student from './Student';
import students from '../data/data.json';
import CohortList from './CohortList';

console.log(CohortList)

function StudentList() {

    const studentCount = students.length;







    return (
      <div className='studentlist-container'>
        {/* Needs to change when date is selected from the cohort list */}
        <h3 className='studentlist-selector'>All Students</h3> 
        {/* Total Students total needs to be calculated from cohort list selected */}
        <p className='studentlist-total'>Total Students: { studentCount }</p>
        <Student />
      </div>
    );
  }
  
  export default StudentList;