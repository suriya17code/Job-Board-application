import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

 
const Layout = () => {
    
  return (
   <>
   <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
      
   </div>
   </>
  )
}

export default Layout