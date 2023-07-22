/* eslint-disable react/prop-types */
const CollegeCard = ({ college }) => {
  const {
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
        <img src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {collegeName}
          <div className="badge badge-secondary">Popular</div>
        </h2>
        <p>Admission Date: {admissionDates}</p>
        <p>Events:</p>
        <p>
          {events.map((event, index) => (
            <span key={index} className="badge badge-outline">
              {event}
            </span>
          ))}
        </p>
        <p>Research History:</p>
        <p>
          {researchHistory.map((research, index) => (
            <span key={index} className="badge badge-outline">
              {research}
            </span>
          ))}   
        </p>
        <p>Sports:</p>
        <p>
          {sports.map((sport, index) => (
            <span key={index} className="badge badge-outline">
              {sport}
            </span>
          ))}   
        </p>
        <div className="card-actions justify-center">
            <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
