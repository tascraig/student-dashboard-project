/* Cohort.jsx */

import CohortList from './CohortList';
import students from '../data/data.json'; 
import './styles/cohort.css';

function Cohort() {
    // Extract unique cohort codes from student data
    const uniqueCohortCodes = [...new Set(students.map(student => student.cohort.cohortCode))];

    // Sort cohort codes by student start date in descending order
    const sortedCohortCodes = uniqueCohortCodes.sort((a, b) => {
        // Get the start dates for cohort codes a and b
        const startDateA = new Date(students.find(student => student.cohort.cohortCode === a)?.cohort.cohortStartDate);
        const startDateB = new Date(students.find(student => student.cohort.cohortCode === b)?.cohort.cohortStartDate);
        
        // Sort in descending order (latest date first)
        return startDateB - startDateA;
    });

    // Format cohort codes as "Season Year" with space before the year
    const formattedCohortCodes = sortedCohortCodes.map(cohortCode => {
        // Check if the cohort code contains only letters and numbers (no spaces)
        if (/^[a-zA-Z0-9]+$/.test(cohortCode)) {
            // Use regular expression to insert a space before the year
            return cohortCode.replace(/(\d{4})/, ' $1');
        } else {
            return cohortCode;
        }
    });

    return (
        <div className='cohort-container'>
            <h3 className='cohort-header'>Choose a Class by Start Date</h3>
            {/* Pass formatted cohort codes to CohortList */}
            <CohortList cohortCodes={formattedCohortCodes} className='cohort-list'/>
        </div>
    );
}

export default Cohort;




