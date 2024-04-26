// StudentList.jsx

import './styles/studentlist.css';
import Student from './student';

function StudentList() {

    return (
      <div className='studentlist-container'>
        <h3 className='studentlist-selector'>All Students</h3>
        <p className='studentlist-total'>Total Students:{}</p>
        <Student />
      </div>
    );
  }
  
  export default StudentList;
