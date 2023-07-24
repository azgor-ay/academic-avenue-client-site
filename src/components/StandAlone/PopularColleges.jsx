import { useEffect, useState } from "react";
import CollegeCard from "../ShareAble/CollegeCard";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.slice(0,3)
        setColleges(popular)
      });
  }, []);


  return (
    <div className="container mx-auto">
      <h1 className="title">Popular Colleges</h1>
      <div className="grid grid-cols-3 gap-8">
        {colleges.map((college, index) => <CollegeCard
        key={index}
        college={college}
        ></CollegeCard>)}
      </div>
    </div>
  );
};

export default PopularColleges;
