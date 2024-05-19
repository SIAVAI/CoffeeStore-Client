import Header from "./Header";
import bg from "../assets/images/more/11.png";
import { FaArrowLeft } from "react-icons/fa";

import Swal from "sweetalert2";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // console.log(name);
    // console.log(supplier);
    // console.log(category);
    // console.log(chef);
    // console.log(taste);
    // console.log(details);
    // console.log(photo);
    const addCoffeeData = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    console.log(addCoffeeData);

    //Send data to server
    fetch("https://coffee-store-server-psi-one.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#331A15",
            title: "New Coffee Added!!",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="">
      <Header></Header>

      {/* Form */}
      <div className="min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="mt-5 flex flex-col justify-center items-start p-4 lg:p-10">
          <Link to="/">
            <div className="cursor-pointer flex justify-start items-center gap-2 my-6 transition duration-300 hover:text-[#D2B48C]">
              <FaArrowLeft className="transition duration-300 hover:text-[#D2B48C]" />
              <h2 className="font-rancho font-medium text-2xl transition duration-300 hover:text-[#D2B48C]">
                Back To Home
              </h2>
            </div>
          </Link>

          <div className=" shadow-2xl bg-[#F4F3F0] p-4 lg:p-6">
            <h2 className="text-[#374151] font-rancho text-center text-3xl mb-4">
              Add New Coffee
            </h2>
            <p className="text-[#1B1A1AB3] font-raleway text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            {/* Form */}

            <form onSubmit={handleAddCoffee} className="card-body font-raleway">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                {/* Left */}
                <div className="w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
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
                      placeholder="Supplier"
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
                      placeholder="Category"
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
                      placeholder="Chef"
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
                      placeholder="Taste"
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
                      placeholder="Details"
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
                  placeholder="Photo URL"
                  name="photo"
                  className="input border-[#D2B48C]"
                />
              </div>

              {/* Button */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#D2B48C] text-black font-rancho text-xl hover:bg-[#e5d1b6] border-2 border-black hover:border-4 hover:border-yellow-900"
                  value="Add Coffee"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;
