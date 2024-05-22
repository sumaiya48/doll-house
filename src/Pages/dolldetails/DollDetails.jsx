import { useLoaderData } from "react-router-dom";

const DollDetails = () => {
  const doll = useLoaderData();
  const { name,picture, price, rating, quantity, details,  } = doll;
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold pb-3">{name}</h1>

      <p className="py-2">Seller Name:alex</p>
      <p className="py-2">Seller email:alex@gmail.com</p>
      <p className="py-2">Price:{price}</p>
      <p className="py-2">Ratings:{rating}</p>
      <p className="py-2">Available Quantity:{quantity}</p>
      <p className="py-2">Description:{details}</p>
      
    </div>
  </div>
</div>
      
    </div>
  );
};

export default DollDetails;
