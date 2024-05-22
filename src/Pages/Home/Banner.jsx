import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-cover bg-center"
       
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Find Something You Love</h1>
            <Link to={'/alltoys'}><button className="btn btn-outline btn-error">Shop Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
