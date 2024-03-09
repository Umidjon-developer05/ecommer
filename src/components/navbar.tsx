"use client";
import { useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { ProductType } from "@/interfaces";

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
   const products: ProductType[] =
     JSON.parse(localStorage.getItem("carts") as string) || [];
  console.log(products.length);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full  z-50 shadow bg-white">
      <Link href={"/"} className="text-2xl font-extrabold">
        Shopping
      </Link>

      <div className="flex items-center space-x-2.5 text-sm p-2">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home page
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900 ">
            All products
          </Link>
          <Link href={"/contacts"} className="mr-5 hover:text-gray-900 ">
            Contacts
          </Link>

          <ul>
            <li className=" inline px-5 cursor-pointer font-bold text-base  tracking-wide">
              <a className="flex items-center h-full " onClick={toggleDropdown}>
                <span>Shop</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </a>
              <div
                className={`absolute ${
                  isDropdownOpen ? "block" : "hidden"
                } right-48 top-24 `}
              >
                <ul className=" rounded-lg w-full flex gap-5 bg-white shadow p-4">
                  <div>
                    <h3 className="">Pages</h3>
                    <hr className="w-32 mt-2 " />
                    <Link
                      href={"/product/1"}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="py-1">
                        <a className="block  font-mono text-xl   cursor-pointer">
                          Product
                          <p className=""> details</p>
                        </a>
                      </li>
                    </Link>
                    <Link
                      href={"/contacts"}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="py-1">
                        <a className="block font-bold text-base  cursor-pointer">
                          Contacts
                        </a>
                      </li>
                    </Link>
                  </div>
                  <div>
                    <h3 className="">Layout</h3>
                    <hr className="w-32 mt-2" />
                    <Link
                      href={"/Price"}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="py-1">
                        <a className="block  font-mono text-xl   cursor-pointer">
                          Price
                        </a>
                      </li>
                    </Link>
                    <Link
                      href={"/products"}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="py-1">
                        <a className="block font-bold text-base  cursor-pointer">
                          All Products
                        </a>
                      </li>
                    </Link>
                    <Link
                      href={"/shopping-cart"}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="py-1">
                        <a className="block font-bold text-base  cursor-pointer">
                          Cart
                        </a>
                      </li>
                    </Link>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 mx-4">
          <Link href={"/shopping-cart"} className="relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
              <div
                className="absolute -top-3 -right-3 bg-red-500 text-white w-5 flex justify-center items-center "
                style={{ borderRadius: "50%" }}
              >
                {products.length}
              </div>
            </div>
          </Link>
          {user ? (
            <div className="mx-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <button className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
