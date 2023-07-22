import { useEffect, useState } from "react";
import CollegeCard from "../ShareAble/CollegeCard";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("./colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Popular Colleges</h1>
      <div className="grid grid-cols-3">
        {colleges.map((college, index) => <CollegeCard
        key={index}
        college={college}
        ></CollegeCard>)}
      </div>
    </div>
  );
};

export default PopularColleges;
