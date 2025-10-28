import './App.css';  
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Mainpage from "./pages/homepage"
import Jobs from "./pages/jobs"
import JobProvider from './hooks/context/jobProvider';

function App() {
  return ( 
      <BrowserRouter>
      <JobProvider> 
        <Routes>
            <Route element = {<Layout />}>
             <Route  path='/'  element={<Mainpage/>}/>
             <Route path="jobs/:id" element={<Jobs/>}/>
             </Route>
           <Route/>
         </Routes>
         </JobProvider>
      </BrowserRouter>
  );
}

export default App;
