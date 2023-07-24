/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const college = useLoaderData();

  const {
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
    collegeDetails,
  } = college[0];

  console.log(college);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${collegeImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-primary">
        <div className="">
          <h1 className="mb-5 text-6xl font-bold text-center">{collegeName}</h1>
          <p className="text-center first-letter">{collegeDetails.overview}</p>

          <div>
            <p className="font-bold text-center text-2xl my-1 mt-6 ">
              {collegeDetails.admissionProcess}
            </p>
            <p className="">
              Admission Date's:{" "}
              {admissionDates.map((event, index) => (
                <span key={index} className="badge badge-outline mx-1">
                  {event}
                </span>
              ))}{" "}
            </p>

            <p className="font-bold text-center text-2xl my-1 mt-6 ">
              {collegeDetails.eventsDetails}
            </p>
            <p>
              Events:
              {events.map((event, index) => (
                <span key={index} className="badge badge-outline mx-1">
                  {event}
                </span>
              ))}
            </p>

            <p className="font-bold text-center text-2xl my-1 mt-6 ">
              {collegeDetails.researchWorks}
            </p>
            <p>
              Research History:
              {researchHistory.map((research, index) => (
                <span key={index} className="badge badge-outline mx-1">
                  {research}
                </span>
              ))}
            </p>

            <p className="font-bold text-center text-2xl my-1 mt-6 ">
              {collegeDetails.sportsCategories}
            </p>
            <p>
              Sports:
              {sports.map((sport, index) => (
                <span key={index} className="badge badge-outline mx-1">
                  {sport}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
