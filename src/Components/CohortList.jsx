/* CohortList.jsx */

import './styles/cohortlist.css';

function CohortList({ cohortCodes }) {
    return (
        <div className='cohortlist-container'>
            <p className='cohort-selectall'>All Students</p>
            {cohortCodes.map((code, index) => (
                <p key={index} className='cohort-list'>{code}</p>
            ))}
        </div>
    );
}

export default CohortList;
