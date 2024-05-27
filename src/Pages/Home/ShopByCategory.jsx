import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const [dolls, setDolls] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/doll')
      .then(res => res.json())
      .then(data => setDolls(data))
  }, []);

  const filterDollsBySubCategory = (subCategory) => {
    return dolls.filter(doll => doll.sub_category === subCategory);
  };

  return (
    <div className="px-4 py-8 md:py-16">
      <h1 className="text-center font-bold text-4xl py-2">Shop By Category</h1>
      <Tabs>
        <TabList className="flex justify-center space-x-4">
          <Tab className="text-lg">Stuffed Animals</Tab>
          <Tab className="text-lg">Artist Dolls</Tab>
          <Tab className="text-lg">Plush Toys</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold mt-8">Stuffed Animals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDollsBySubCategory('Stuffed Animals').map(doll => (
               <div key={doll._id} className="card glass">
                 <figure><img src={doll.picture} alt={doll.name} /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{doll.name}</h2>
                   <p>Price: ${doll.price}</p>
                   <p>Rating: {doll.rating}</p>
                   <div className="card-actions">
                     <Link to={`/dolldetails/${doll._id}`} >
                       <button className="btn btn-error">View details</button>
                     </Link>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-bold mt-8">Artist Dolls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDollsBySubCategory('Artist Dolls').map(doll => (
              <div key={doll._id} className="card glass">
                <figure><img src={doll.picture} alt={doll.name} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{doll.name}</h2>
                  <p>Price: ${doll.price}</p>
                  <p>Rating: {doll.rating}</p>
                  <div className="card-actions">
                    <Link to={`/dolldetails/${doll._id}`} >
                      <button className="btn btn-error">View details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-bold mt-8">Plush Toys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDollsBySubCategory('Plush Toys').map(doll => (
               <div key={doll._id} className="card glass">
                 <figure><img src={doll.picture} alt={doll.name} /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{doll.name}</h2>
                   <p>Price: ${doll.price}</p>
                   <p>Rating: {doll.rating}</p>
                   <div className="card-actions">
                     <Link to={`/dolldetails/${doll._id}`} >
                       <button className="btn btn-error">View details</button>
                     </Link>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
