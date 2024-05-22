import { useLoaderData } from "react-router-dom";

const DollDetails = () => {
  const doll = useLoaderData();
  const { name, picture, price, rating, quantity, details } = doll;

  return (
    <div className="px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <img src={picture} className="max-w-full rounded-lg shadow-lg" alt={name} />
          <div>
            <h1 className="text-2xl font-bold pb-3">{name}</h1>
            <p className="py-2">Seller Name: Alex</p>
            <p className="py-2">Seller email: alex@gmail.com</p>
            <p className="py-2">Price: {price}</p>
            <p className="py-2">Ratings: {rating}</p>
            <p className="py-2">Available Quantity: {quantity}</p>
            <p className="py-2">Description: {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollDetails;
