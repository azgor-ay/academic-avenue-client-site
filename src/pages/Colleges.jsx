import { useEffect, useState } from "react";
import CollegeCard from "../components/ShareAble/CollegeCard";

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/colleges")
        .then((res) => res.json())
        .then((data) => setColleges(data));
    }, []);
  
    return (
      <div className="container mx-auto">
        <h1 className="title">Colleges Associated with us</h1>
        <div className="grid grid-cols-3 gap-8">
          {colleges.map((college, index) => <CollegeCard
          key={index}
          college={college}
          ></CollegeCard>)}
        </div>
      </div>
    );
  };

export default Colleges;