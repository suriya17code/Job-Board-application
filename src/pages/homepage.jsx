import JobCard from "../components/card";
import { jobs } from "../constants/data";

const Mainpage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Available Jobs</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Mainpage;
