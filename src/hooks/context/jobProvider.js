import { useState } from 'react'; 
import JobContext from './context';
import { useNavigate } from 'react-router-dom';

const JobProvider = ({ children }) => { 
  
  const [appliedCount, setappliedCount] = useState([]);
  const navigate= useNavigate();

  const handleApplyToJob = (jobId) => {
    if (!appliedCount.includes(jobId)) {
      setappliedCount((prev) => {
       return [...prev, jobId];
    });
       navigate("/")
    }
  };

  const hasApplied = (jobId)=> {
    const isAppied = appliedCount.includes(jobId);
    return isAppied
};

  const value = {
    appliedCount,
    handleApplyToJob,
    hasApplied,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;

