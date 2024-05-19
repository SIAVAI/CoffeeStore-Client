import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Inst from "./Inst";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import bg from "../assets/images/more/4.png";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#331A15",
      showCancelButton: true,
      confirmButtonColor: "#331A15",
      cancelButtonColor: "#EA4744",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-psi-one.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
                iconColor: "#331A15",
                confirmButtonColor: "#331A15",
              });
              const remain = coffees.filter((cof) => cof._id != id);
              setCoffees(remain);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-hidden">
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>

      {/* Coffee */}
      <div
        className="mb-10 mx-auto flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-rancho font-semibold text-center my-5">
          Our Popular Products
        </h2>
        <button className="btn bg-[#E3B577] text-[#331A15] hover:border-4 hover:border-yellow-900 my-5">
          <Link to="addCoffee">Add Coffee</Link>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coffees.map((coffee) => (
            <div key={coffee._id}>
              <div className="card w-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={coffee.photo} alt="Coffee" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-rancho font-semibold">
                    {coffee.name}
                  </h2>
                  <p className="text-sm font-raleway">{coffee.details}</p>
                  <p className="text-sm font-raleway">Chef : {coffee.chef}</p>
                  <p className="text-sm font-raleway">Price : 490 BDT</p>
                  <div className="card-actions">
                    <button className="btn bg-[#D2B48C] text-white transition duration-300 ease-in-out transform hover:bg-[#b89f72] hover:text-black hover:shadow-lg hover:scale-105">
                      <FaEye />
                    </button>
                    <button className="btn bg-[#3C393B] text-white transition duration-300 ease-in-out transform hover:bg-[#b89f72] hover:text-black hover:shadow-lg hover:scale-105">
                      <Link to={`updateCoffee/${coffee._id}`}>
                        <MdEdit />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(coffee._id)}
                      className="btn bg-[#EA4744] text-white transition duration-300 ease-in-out transform hover:bg-[#b89f72] hover:text-black hover:shadow-lg hover:scale-105"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram */}
      <Inst></Inst>
      <Footer></Footer>
    </div>
  );
};

export default Home;
