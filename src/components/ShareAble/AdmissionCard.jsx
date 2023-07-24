import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AdmissionCard = ({ college }) => {
  console.log(college);
  const { _id, collegeImage, collegeName, admissionDates } = college;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img className="w-full object-cover" src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>
          Admission Dates:{" "}
          {admissionDates.map((event, index) => (
            <span key={index} className="badge badge-outline">
              {event}
            </span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/admission/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCard;
