import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { name, quantity, price, category, _id, taste, photo, details } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "example" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Update Coffee</h1>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid md:grid-cols-2 gap-4">
            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>

            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                defaultValue={quantity}
                name="quantity"
                className="input w-full"
                placeholder="Quantity of coffee"
              />
            </fieldset>

            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder="Coffee Price"
              />
            </fieldset>

            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>

            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </fieldset>

            <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full mt-5"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input
            type="submit"
            value="Update Coffee"
            className="btn w-full"
            id=""
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
