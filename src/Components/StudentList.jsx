// StudentList.jsx

import './styles/studentlist.css';
import Student from './student';

function StudentList() {

    return (
      <div className='studentlist-container'>
        <h3>Student List</h3>
        <Student />
      </div>
    );
  }
  
  export default StudentList;
