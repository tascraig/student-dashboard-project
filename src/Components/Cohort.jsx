// Cohort.jsx

import CohortList from './cohortlist';
import './styles/cohort.css'



function Cohort() {
    return (
      <div className='cohort-container'>
        <h3 className='cohort-header'>Choose a Class by Start Date</h3>
        <CohortList />
        {/* <p className="cohort-term" id="cohort-term">{array of terms}</p> */}
      </div>
    );
  }
  
  export default Cohort;