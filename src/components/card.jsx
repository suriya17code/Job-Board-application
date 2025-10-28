 
import { Link } from "react-router-dom";
import useJob from "../hooks/context/useJob";
import locationMarkIcon from "../assets/location.png";

const  JobCard = ({ job }) =>{
  const { hasApplied } = useJob();
  const applied = hasApplied(job.id);

  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="bg-white border p-8 rounded-md ">

        <div className="flex justify-between items-start mb-2">

          <h3 className="font-semibold text-lg">{job.title}</h3>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
            {job.ai_match_score}% Match
          </span>

        </div>

        <p className="text-gray-600 mb-2">{job.company}</p>

        <div className="flex justify-between items-center text-sm text-gray-500">

          <div className="flex items-center">
            <img
              src={locationMarkIcon}
              alt="location"
              className="w-4 h-4 mr-1 opacity-70"
            />
            <span>{job.location}</span>
          </div>

          <button disabled={applied} 
            className={`px-5 py-2 rounded text-md font-medium ${applied  ? "bg-gray-300 text-gray-600 cursor-not-allowed"  : "bg-blue-600 text-white "}`}>
              {applied ? "Applied" : "Apply"}
          </button>

        </div>
      </div>
    </Link>
  );
}

export default JobCard;
