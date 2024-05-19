import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };

    console.log(updatedCoffee, _id);

    fetch(`https://coffee-store-server-psi-one.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#331A15",
            title: "Updated Coffee Successfully!!",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          iconColor: "#331A15",
          title: "Failed to Update Coffee",
          text: "An error occurred while updating the coffee. Please try again.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      <Header />
      <Link to="/">
        <div className="cursor-pointer flex justify-start items-center gap-2 my-6 transition duration-300 hover:text-[#D2B48C]">
          <FaArrowLeft className="transition duration-300 hover:text-[#D2B48C]" />
          <h2 className="font-rancho font-medium text-2xl transition duration-300 hover:text-[#D2B48C]">
            Back To Home
          </h2>
        </div>
      </Link>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            src={photo}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Coffee"
          />
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-rancho font-semibold px-8">
              UPDATE
            </h2>
            <form
              onSubmit={handleUpdateCoffee}
              className="card-body font-raleway"
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                {/* Left */}
                <div className="w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Name"
                      defaultValue={name}
                      name="name"
                      className="input border-[#D2B48C]"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Supplier</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Supplier"
                      defaultValue={supplier}
                      name="supplier"
                      className="input border-[#D2B48C]"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Category</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Category"
                      defaultValue={category}
                      name="category"
                      className="input border-[#D2B48C]"
                    />
                  </div>
                </div>
                {/* Right */}
                <div className="w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Chef</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Chef"
                      defaultValue={chef}
                      name="chef"
                      className="input border-[#D2B48C]"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Taste</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Taste"
                      defaultValue={taste}
                      name="taste"
                      className="input border-[#D2B48C]"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Details</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Update Details"
                      defaultValue={details}
                      name="details"
                      className="input border-[#D2B48C]"
                    />
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text font-semibold">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Update Photo URL"
                  defaultValue={photo}
                  name="photo"
                  className="input border-[#D2B48C]"
                />
              </div>

              {/* Submit */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#D2B48C] text-black font-rancho text-xl hover:bg-[#e5d1b6] border-2 border-black hover:border-4 hover:border-yellow-900"
                  value="Update Coffee"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateCoffee;
