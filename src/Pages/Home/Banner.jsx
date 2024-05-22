import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cdn.shopify.com/s/files/1/0602/2617/5224/files/image4_55509859-6739-4ef4-9825-d770c4b1be56_480x480.png?v=1662698179")`
        }}
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
