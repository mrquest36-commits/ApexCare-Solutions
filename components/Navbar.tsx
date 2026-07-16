"use client";

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Process",
      href: "#process",
    },
  ];


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/80
      backdrop-blur-lg
      border-b
      border-gray-200
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          text-xl
          font-bold
          text-gray-900
          "
        >

          <div
            className="
            w-9
            h-9
            rounded-xl
            bg-green-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            "
          >
            A
          </div>


          <span>
            Apex<span className="text-green-600">
              Care
            </span>
          </span>


        </Link>




        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-sm
          text-gray-600
          "
        >

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              className="
              hover:text-green-600
              transition
              "
            >
              {link.name}
            </a>

          ))}


          <a
            href="#contact"
            className="
            px-5
            py-2.5
            rounded-full
            bg-green-600
            text-white
            hover:bg-green-700
            transition
            "
          >
            Request Service
          </a>


        </div>




        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-2xl
          text-gray-800
          "
        >

          {open ? "✕" : "☰"}

        </button>


      </div>




      {/* Mobile Menu */}

      {open && (

        <div
          className="
          md:hidden
          bg-white
          border-t
          border-gray-200
          px-8
          py-6
          space-y-5
          "
        >

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
              block
              text-gray-700
              hover:text-green-600
              "
            >
              {link.name}
            </a>

          ))}


          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
            block
            text-center
            px-5
            py-3
            rounded-full
            bg-green-600
            text-white
            "
          >
            Request Service
          </a>


        </div>

      )}


    </nav>

  );

}