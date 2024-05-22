import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const ShopByCategoryCard = ({doll}) => {
console.log(doll)

   
    return (
        <div>
            <Tabs>
        <TabList>
          <Tab>Stuffed Animals</Tab>
          <Tab>Artist Dolls</Tab>
          <Tab>Plush Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>Stuffed Animals</h2>
          <div className="doll-list md:flex justify-between">
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
            
          </div>
        </TabPanel>

        
      </Tabs>
        </div>
    );
};

export default ShopByCategoryCard;