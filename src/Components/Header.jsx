import { NavLink } from "react-router-dom";
import logo from "../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div className="bg-[#583e2c] py-4">
      <div className="flex justify-center items-center gap-4">
        <img src={logo} className="w-[5%] lg:w-[3%]" alt="Coffee" />
        <h2 className="font-rancho font-normal text-white text-2xl">
          Espresso Emporium
        </h2>
      </div>

      <div className="flex justify-center mt-4 space-x-4 text-xl font-rancho text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="addCoffee">Add Coffee</NavLink>
        <NavLink to="/signUp">Sign Up</NavLink>
        <NavLink to="/signIn">Sign In</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
};

export default Header;
