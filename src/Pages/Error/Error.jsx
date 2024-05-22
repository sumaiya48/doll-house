const Error = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7KCpGW9_D2rIlNV2JhFspQ.png"
            alt=""
            className="max-w-full"
          />
          <button className="btn btn-outline btn-error absolute bottom-8 left-1/2 transform -translate-x-1/2">Go To Home</button>
        </div>
      </div>
    );
  };
  
  export default Error;
  