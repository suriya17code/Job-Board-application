
import { Link, useParams } from "react-router-dom";
import useJob from "../hooks/context/useJob";
import { jobs } from "../constants/data";
import locationIcon from "../assets/location.png"; 
import backIcon from "../assets/back.png"; 

const JobDetails = () => {
  const { id } = useParams();
  const { handleApplyToJob, hasApplied } = useJob();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Job not found
        </div>
      </div>
    );
  }

  const applied = hasApplied(job.id);

  return (
    <div className="container mx-auto px-4 py-8">
{/* back to homepage */}
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
      >
         <img
            src={backIcon}
            alt="Location"
            className="w-5 h-5 mr-2 object-contain"
          />
        Back to Jobs
      </Link>

{/* main content */}
      <div className="bg-white rounded-lg p-8 mt-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {job.title}
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              {job.company}
            </p>
          </div>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">
            {job.ai_match_score}% AI Match
          </span>
        </div>
        <div className="flex items-center text-gray-600 mb-6">
          <img
            src={locationIcon}
            alt="Location"
            className="w-5 h-5 mr-2 object-contain"
          />
          <span className="text-lg">{job.location}</span>
        </div>

{/* JD */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

{/* apply */}
        <button
          onClick={() => handleApplyToJob(job.id)}
          disabled={applied}
          className={`px-8 py-3 w-full rounded-lg font-semibold text-lg transition-all ${
            applied
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-600 text-white"
          }`}
        >
          {applied ? "Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
