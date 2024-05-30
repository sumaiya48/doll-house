import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const [dolls, setDolls] = useState([]);
    const [visibleDolls, setVisibleDolls] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const dollsPerPage = 20;

    useEffect(() => {
        fetchDolls();
    }, []);

    const fetchDolls = () => {
        fetch("https://doll-house-server-chi.vercel.app/doll")
            .then(response => response.json())
            .then(data => {
                setDolls(data);
                setVisibleDolls(data.slice(0, dollsPerPage));
            })
            .catch(error => {
                console.error('Error fetching doll data:', error);
            });
    };

    const handleToggle = () => {
        setShowMore(!showMore);
        if (showMore) {
            const nextPage = Math.ceil(visibleDolls.length / dollsPerPage) + 1;
            const endIndex = nextPage * dollsPerPage;
            setVisibleDolls(dolls.slice(0, endIndex));
        } else {
            setVisibleDolls(dolls.slice(0, dollsPerPage));
        }
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {visibleDolls.map((doll, index) => (
                    <div key={index} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={doll.picture} alt={doll.name} className="w-full h-48 object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toy Name: {doll.name}</h2>
                            <p>Sub-Category: {doll.sub_category}</p>
                            <p>Price: ${doll.price}</p>
                            <p>Available Quantity: {doll.quantity}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/dolldetails/${doll._id}`}>
                                    <button className="btn btn-error">View details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {(showMore || dolls.length > dollsPerPage) && (
                <div className="mt-4 text-center">
                    <button className="btn btn-error" onClick={handleToggle}>
                        {showMore ? "See More" : "See Less"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllToys;
