import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query,setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const searchJobHandler = () =>{
    dispatch(setSearchedQuery(query));
    navigate("/browse")
 }

 
   return (
    <div className="text-center"> 
    <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">No. 1 Job Hunt website</span>
      <h1 className="text-5xl font-bold">Search, Apply & <br/> Get Your <span className="text-blue-500">Dream Jobs</span></h1>
      <p>FindIT is a simple website that helps you find and apply for jobs easily.</p>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
        <input type="text" 
        placeholder="Find your dream jobs"
        onChange={(e)=> setQuery(e.target.value)}
        className="outline-none border-none w-full"
        />
        <Button onClick={searchJobHandler} className='rounded-r-full bg-blue-500'>
          <Search className="h-5 w-5"/>
        </Button>
      </div>
    </div>
    </div>

  )
}

export default HeroSection
