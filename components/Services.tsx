"use client";

import { motion } from "framer-motion";


const services = [

  {
    title:
      "Residential Cleaning",

    description:
      "Professional cleaning solutions designed to keep homes, apartments and private spaces fresh and comfortable.",

    icon:
      "🏠",
  },


  {
    title:
      "Office Cleaning",

    description:
      "Reliable workspace cleaning services that help businesses maintain productive and welcoming environments.",

    icon:
      "🏢",
  },


  {
    title:
      "Property Maintenance",

    description:
      "Ongoing care and maintenance support for residential and commercial properties.",

    icon:
      "🔧",
  },


  {
    title:
      "Post-Construction Cleaning",

    description:
      "Detailed cleanup services after renovations, construction and property improvements.",

    icon:
      "✨",
  },

];



export default function Services() {


  return (

    <section
      id="services"
      className="
      px-8
      py-24
      bg-gray-50
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        "
      >



        <div
          className="
          max-w-2xl
          mb-14
          "
        >


          <p
            className="
            text-green-600
            font-semibold
            mb-4
            "
          >
            Our Services
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            "
          >

            Professional care
            <span
              className="
              text-gray-500
              "
            >
              {" "}for every space.
            </span>


          </h2>



          <p
            className="
            mt-6
            text-gray-600
            "
          >

            We provide dependable cleaning and property solutions
            designed for homes, offices and commercial spaces.

          </p>



        </div>





        <div
          className="
          grid
          md:grid-cols-4
          gap-6
          "
        >



          {services.map((service) => (

            <motion.div

              key={service.title}


              initial={{
                opacity:0,
                y:30,
              }}


              whileInView={{
                opacity:1,
                y:0,
              }}


              viewport={{
                once:true,
              }}


              whileHover={{
                y:-8,
              }}


              transition={{
                duration:0.5,
              }}


              className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              p-8
              hover:shadow-lg
              transition
              "

            >


              <div
                className="
                text-4xl
                mb-6
                "
              >
                {service.icon}
              </div>



              <h3
                className="
                text-xl
                font-bold
                text-gray-900
                mb-4
                "
              >

                {service.title}

              </h3>




              <p
                className="
                text-gray-600
                leading-relaxed
                "
              >

                {service.description}

              </p>



            </motion.div>


          ))}



        </div>



      </div>


    </section>

  );

}