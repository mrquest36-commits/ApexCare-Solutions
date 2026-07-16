"use client";

import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      px-8
      pt-28
      overflow-hidden
      "
    >


      {/* Background decoration */}

      <div
        className="
        absolute
        top-20
        right-10
        w-72
        h-72
        bg-green-200
        rounded-full
        blur-3xl
        opacity-50
        "
      />



      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* Text Content */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

        >


          <p
            className="
            text-green-600
            font-semibold
            mb-6
            "
          >
            Professional Cleaning & Property Care
          </p>



          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            text-gray-900
            "
          >

            A Cleaner Space.
            <span
              className="
              block
              text-green-600
              "
            >
              A Better Experience.
            </span>


          </h1>



          <p
            className="
            mt-8
            text-lg
            text-gray-600
            leading-relaxed
            max-w-xl
            "
          >

            ApexCare Solutions provides reliable cleaning and property
            maintenance services for homes and businesses across Ghana.

          </p>




          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            "
          >


            <a
              href="#contact"
              className="
              px-8
              py-3
              rounded-full
              bg-green-600
              text-white
              font-medium
              hover:bg-green-700
              transition
              text-center
              "
            >
              Request Service
            </a>



            <a
              href="#services"
              className="
              px-8
              py-3
              rounded-full
              border
              border-gray-300
              text-gray-700
              hover:bg-gray-100
              transition
              text-center
              "
            >
              View Services
            </a>



          </div>


        </motion.div>





        {/* Visual Side */}

       <motion.div

  initial={{
    opacity:0,
    scale:0.9,
  }}

  animate={{
    opacity:1,
    scale:1,
  }}

  transition={{
    duration:0.8,
  }}

  className="
  relative
  "

>


  <div
    className="
    rounded-3xl
    bg-white
    border
    border-gray-200
    shadow-xl
    p-8
    "
  >



    {/* Main Card */}


    <div
      className="
      rounded-2xl
      bg-gradient-to-br
      from-green-500
      to-green-700
      p-8
      text-white
      "
    >


      <p
        className="
        text-green-100
        text-sm
        "
      >
        ApexCare Solutions
      </p>


      <h2
        className="
        text-3xl
        font-bold
        mt-4
        "
      >

        Cleaner Spaces.
        <br />
        Better Living.

      </h2>


      <p
        className="
        mt-4
        text-green-50
        "
      >

        Professional cleaning and property care services.

      </p>


    </div>




    {/* Service Cards */}


    <div
      className="
      mt-6
      grid
      grid-cols-2
      gap-4
      "
    >


      <div
        className="
        p-5
        rounded-xl
        bg-gray-50
        "
      >

        <p
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >
          24/7
        </p>


        <p
          className="
          text-sm
          text-gray-500
          "
        >
          Support
        </p>


      </div>





      <div
        className="
        p-5
        rounded-xl
        bg-gray-50
        "
      >

        <p
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >
          ✓
        </p>


        <p
          className="
          text-sm
          text-gray-500
          "
        >
          Quality Care
        </p>


      </div>



    </div>




  </div>



</motion.div>



      </div>


    </section>

  );

}