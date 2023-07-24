import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CollegeCard = ({ college }) => {
  const {
    _id,
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;
  console.log(college);
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure>
        <img src={collegeImage} className="h-48 object-cover w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {collegeName}
        </h2>
        <p>Available Admission Dates:</p>
        <p>
          {admissionDates.map((event, index) => (
            <span key={index} className="badge badge-outline">
              {event}
            </span>
          ))}
        </p>

        <p>Total Upcoming Events: {events.length}</p>
        <p>Total Research Conducted: {researchHistory.length}</p>
        <p className="font-semibold ">{sports.length} types of Sports</p>
        
        <div className="card-actions justify-center">
          <Link to={`/collegeDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
