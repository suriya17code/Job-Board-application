 
import { Link } from "react-router-dom";
import useJob from "../hooks/context/useJob";

const Navbar = () => {
  
  const { appliedCount } = useJob();

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="flex justify-between items-center px-20">
        <Link to="/" className="text-xl font-bold">
          Job Board
        </Link>

        <div className="flex items-center space-x-2">
          <p className="text-sm">Applied Jobs:</p>
          <span className="bg-white text-green-700 px-2 py-1 rounded text-sm">
            {appliedCount.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
