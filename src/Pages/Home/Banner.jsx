

const Banner = () => {
    return (
        <div className="">
            
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0602/2617/5224/files/image4_55509859-6739-4ef4-9825-d770c4b1be56_480x480.png?v=1662698179")` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Find Something you Love</h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <div className="form-control ml-12 mb-6">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-outline btn-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
      <button className="btn btn-outline btn-error">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;