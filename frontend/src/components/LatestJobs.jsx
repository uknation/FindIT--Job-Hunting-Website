import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";


const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job || {});
  console.log(allJobs);


  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-blue-500">Latest & Top </span> Job Openings
      </h1>
      {/* multiple job cards display */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs && allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};


export default LatestJobs;
