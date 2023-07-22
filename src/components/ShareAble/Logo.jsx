import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className="text-center group">
        <p className="text-3xl font-bold -mb-2 tracking-wide hover:scale-110 hover:shadow-2xl duration-500 ">
          <span className="text-4xl">A</span>
          <span className="text-primary">cademic</span>
          <span className="text-4xl">A</span>
          <span className="text-primary">venue</span>
        </p>
        <small className="group-hover:text-primary duration-500">Unlock Your Future: Apply to Colleges with Ease!</small>
      </Link>
    </div>
  );
};

export default Logo;
