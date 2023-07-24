import { useEffect, useState } from "react";
import AdmissionCard from "../components/ShareAble/AdmissionCard";

const AdmissionPage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
   <>
   <h1 className="title">Choose Your Desired College</h1>
    <div className="grid grid-cols-3 gap-8">
      {colleges.map((college) => (
        <AdmissionCard key={college._id} college={college}></AdmissionCard>
      ))}
    </div>
   </>
  );
};

export default AdmissionPage;
