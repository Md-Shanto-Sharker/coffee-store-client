import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { photo, name, price, quantity, _id } = coffee;
    console.log(coffee);
    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img src={photo} />
      </figure>
      <div className="flex w-full mt-6 justify-around">
        <div>
          <h2 className="">{name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            
            <button className="btn join-item">Edit</button>
            <button  className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CoffeeDetails;