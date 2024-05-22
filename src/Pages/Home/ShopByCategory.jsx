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
    <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph")` }}>
      <h1 className="text-center font-bold text-4xl py-0.5">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab>Stuffed Animals</Tab>
          <Tab>Artist Dolls</Tab>
          <Tab>Plush Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>Stuffed Animals</h2>
          <div className="doll-list md:flex justify-between">
            {filterDollsBySubCategory('Stuffed Animals').map(doll => (
               <div key={doll._id} className="doll-item">
               <div className="card w-96 glass my-5 p-4 bg-slate-150 ">
                 <figure><img src={doll.picture} alt={doll.name} /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{doll.name}</h2>
                   <p>Price: ${doll.price}</p>
                   <p>Rating: {doll.rating}</p>
                   <div className="card-actions justify-end">
                   <Link to={`/dolldetails/${doll._id}`} >
  <button className="btn btn-error">View details</button>
</Link>
                   </div>
                 </div>
               </div>
               
             </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Artist Dolls</h2>
          <div className="doll-list md:flex justify-between">
            {filterDollsBySubCategory('Artist Dolls').map(doll => (
              <div key={doll._id} className="doll-item">
                <div className="card w-96 glass my-5 p-4 bg-slate-150 ">
                  <figure><img src={doll.picture} alt={doll.name} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{doll.name}</h2>
                    <p>Price: ${doll.price}</p>
                    <p>Rating: {doll.rating}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/dolldetails/${doll._id}`} >
  <button className="btn btn-error">View details</button>
</Link>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Plush Toys</h2>
          <div className="doll-list md:flex justify-between">
            {filterDollsBySubCategory('Plush Toys').map(doll => (
               <div key={doll._id} className="doll-item">
               <div className="card w-96 glass my-5 p-4 bg-slate-150 ">
                 <figure><img src={doll.picture} alt={doll.name} /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{doll.name}</h2>
                   <p>Price: ${doll.price}</p>
                   <p>Rating: {doll.rating}</p>
                   <div className="card-actions justify-end">
                   <Link to={`/dolldetails/${doll._id}`} >
  <button className="btn btn-error">View details</button>
</Link>
                   </div>
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
