/* Cohort.jsx */

import CohortList from './CohortList';
import students from '../data/data.json'; 
import './styles/cohort.css';

function Cohort() {
    // Extract cohort codes from student data and format them
    const formattedCohortCodes = students.map(student => {
        const { cohortCode, cohortStartDate } = student.cohort;
        const year = new Date(cohortStartDate).getFullYear();
        const season = cohortCode.split(year)[0].trim();
        return `${season} ${year}`;
    });

    // Remove duplicates and sort cohort codes
    const uniqueSortedCohortCodes = Array.from(new Set(formattedCohortCodes)).sort();

    return (
        <div className='cohort-container'>
            <h3 className='cohort-header'>Choose a Class by Start Date</h3>
            {/* Pass className prop to CohortList */}
            <CohortList cohortCodes={uniqueSortedCohortCodes} className='cohort-list'/>
        </div>
    );
}

export default Cohort;
