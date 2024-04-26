// App.jsx

import './index.css';
import NavBar from './Components/NavBar';
import Cohort from './Components/Cohort';
import StudentList from './Components/StudentList.jsx'

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <Cohort />
      <StudentList />


    </div>
  );
}

export default App;


