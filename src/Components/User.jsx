import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import i from "../assets/images/more/12.png";
import { useState } from "react";
import Swal from "sweetalert2";

const User = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);

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
        fetch(`https://coffee-store-server-psi-one.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
                iconColor: "#331A15",
                confirmButtonColor: "#331A15",
              });
              const remain = users.filter((u) => u._id != id);
              setUsers(remain);
            }
          });
      }
    });
  };
  return (
    <div>
      <Header></Header>
      <div className="flex justify-between items-center">
        <div>
          <img src={i} alt="" />
        </div>
        <div className="overflow-x-auto mr-4 pr-4">
          <table className="table">
            {/* head */}
            <thead className="font-rancho">
              <tr>
                <th></th>
                <th className="text-2xl text-black">Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="font-rancho text-xl text-black">
              {/* row 1 */}
              {users.map((each, ix) => (
                <tr key={each._id}>
                  <td>{ix + 1}</td>
                  <td>{each.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(each._id)}
                      className="btn bg-[#D2B48C] text-black font-rancho text-xl hover:bg-[#e5d1b6] border-2 border-black hover:border-4 hover:border-yellow-900"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default User;
