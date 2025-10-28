import { useContext } from "react";
import JobContext from "./context";

const useJob =()=>{

 const context = useContext(JobContext);

  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }

  return context;
}
export default useJob;