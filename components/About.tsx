"use client";

import { motion } from "framer-motion";


export default function About() {


  return (

    <section
      id="about"
      className="
      px-8
      py-24
      "
    >


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



        {/* Text */}


        <motion.div

          initial={{
            opacity:0,
            x:-30,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.6,
          }}

        >


          <p
            className="
            text-green-600
            font-semibold
            mb-4
            "
          >
            About ApexCare
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            leading-tight
            "
          >

            Quality service
            <span
              className="
              text-gray-500
              "
            >
              {" "}built around your space.
            </span>


          </h2>




          <p
            className="
            mt-6
            text-gray-600
            leading-relaxed
            "
          >

            ApexCare Solutions helps homes and businesses maintain
            clean, safe and comfortable environments through reliable
            professional cleaning and property care services.

          </p>



          <p
            className="
            mt-4
            text-gray-600
            leading-relaxed
            "
          >

            We focus on quality workmanship, clear communication and
            dependable service delivery designed around each client's needs.

          </p>



        </motion.div>





        {/* Visual Card */}


        <motion.div

          initial={{
            opacity:0,
            x:30,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.6,
          }}

          className="
          relative
          "

        >



          <div
            className="
            rounded-3xl
            bg-gradient-to-br
            from-green-100
            to-blue-100
            p-10
            h-[400px]
            flex
            items-center
            justify-center
            "
          >



            <div
              className="
              text-center
              "
            >


              <div
                className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-green-600
                text-white
                flex
                items-center
                justify-center
                text-3xl
                font-bold
                "
              >

                A

              </div>



              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
                "
              >

                Trusted Property Care

              </h3>



              <p
                className="
                mt-3
                text-gray-600
                "
              >

                Homes • Offices • Commercial Spaces

              </p>



            </div>


          </div>



        </motion.div>



      </div>


    </section>

  );

}