import { useState } from 'react'; 
import JobContext from './context';
import { useNavigate } from 'react-router-dom';

const JobProvider = ({ children }) => { 
  
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate= useNavigate()
  const handleApplyToJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs((prev) => {
       return [...prev, jobId];
    });
       navigate("/")
    }
  };

  const hasApplied = (jobId)=> {
    return appliedJobs.includes(jobId)
};

  const value = {
    appliedJobs,
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

