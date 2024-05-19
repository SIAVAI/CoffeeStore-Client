import Footer from "./Footer";
import Header from "./Header";
import bg1 from "../assets/images/more/17.jpg";
import bg2 from "../assets/images/more/5.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        showConfirmButton: true,
      });
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
        showConfirmButton: true,
      });
      return;
    }

    // Continue with form submission
    // Your form submission logic here

    createUser(email, password)
      .then((result) => {
        console.log(result);
        const createAt = result.user.metadata.creationTime;
        console.log(createAt);
        const user = { email, createAt };
        fetch("https://coffee-store-server-psi-one.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                iconColor: "#331A15",
                title: "Signing Up Completed Successfully!!",
                showConfirmButton: false,
                timer: 2000,
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <Link to="/">
        <div className="cursor-pointer flex justify-start items-center gap-2 transition duration-300 hover:text-[#D2B48C] bg-[#583e2c]">
          <FaArrowLeft className="transition duration-300 hover:text-[#D2B48C]" />
          <h2 className="font-rancho font-medium text-2xl transition duration-300 hover:text-[#D2B48C]">
            Back To Home
          </h2>
        </div>
      </Link>

      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="flex justify-center items-center w-full font-raleway text-xl">
          <div
            className="w-auto shadow-2xl bg-base-200 rounded-md mr-4 p-8 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rancho font-medium text-[#583e2c] text-center">
              Join Us By Signing Up
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="confirm password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#D2B48C] text-black font-rancho text-xl hover:bg-[#e5d1b6] border-2 border-black hover:border-4 hover:border-yellow-900"
                  value="Sign Up"
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

export default SignUp;
