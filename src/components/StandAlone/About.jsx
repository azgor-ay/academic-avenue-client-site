/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/professor.jpg";
const About = () => {
  return (
    <>
      <h1 className="title">About Academic Avenue</h1>
      <div className="grid grid-cols-2">
        <div className="mx-auto">
          <img className="w-96" src={img} alt="" />
        </div>
        <div className="my-auto mx-auto mr-12">
          <p>
            <strong>Professor Emily johnson's</strong> Academic Avenue, a true
            game-changer in college admissions! As an educator with decades of
            experience, I must say that Academic Avenue has truly revolutionized
            the college admission landscape. Since its establishment in 2023,
            this platform has been a guiding light for thousands of students,
            including many I've had the pleasure of mentoring. Academic Avenue's
            commitment to simplifying the application process and providing
            comprehensive college information has helped over 3000 students find
            their perfect match.
          </p>
          <br />
          <p>
            The platform's dedication to inclusivity ensures that every aspiring
            scholar has an equal opportunity to pursue their academic dreams.
            With an array of handpicked colleges and cutting-edge technology at
            their disposal, students can explore a diverse range of educational
            pathways with ease.
          </p>
          <br />
          <p>
            As an advocate for higher education, I wholeheartedly endorse
            Academic Avenue for its unwavering commitment to empowering young
            minds. It's heartening to witness a platform that not only eases the
            stress of college admissions but also fosters a community of eager
            learners. Whether you're a recent high school graduate or a seasoned
            professional seeking to advance your career, Academic Avenue is the
            ideal companion on your educational journey. Together, let's unlock
            the door to a brighter future!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
