import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useFilterContext } from "../context/filter_context";

const Navbar = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();

  return (
    <div>
      <nav className="flex justify-around mt-3">
        <ul className="flex">
          <li>
            <NavLink to={"/"}>
              <img
                src="https://www.webtonative.com/static/images/logo/header-white.svg"
                alt="logo"
                className="cursor-pointer"
              />
            </NavLink>
          </li>
          <li className="text-center items-center align-middle text-xl rounded-md ">
            <form
              class="d-flex mx-4 bg-slate-300 rounded-md "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                class="border bg-slate-300 font-bold p-1"
                htmlFor="text"
                type="text"
                name="text"
                value={text}
                onChange={updateFilterValue}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
        </ul>

        <ul className="flex ">
          <li className="flex">
            <GiHamburgerMenu size={30} className="cursor-pointer" />{" "}
            <span className="text-center mx-2 text-xl font-bold ">
              {" "}
              Categories{" "}
            </span>
          </li>
          <li className="flex mx-3 cursor-pointer">
            <BiBell size={30} />
          </li>
          <li className="flex mx-3 cursor-pointer">
            <CgProfile size={30} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
