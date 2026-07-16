"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake
} from "lucide-react";


const reasons = [

  {
    title:
      "Reliable Service",

    description:
      "We value punctuality, clear communication and dependable service delivery for every client.",

    icon:
      ShieldCheck,
  },


  {
    title:
      "Quality Focus",

    description:
      "Our approach emphasizes attention to detail and professional results that meet your expectations.",

    icon:
      BadgeCheck,
  },


  {
    title:
      "Customer First",

    description:
      "We design our services around your needs, schedule and the requirements of your space.",

    icon:
      HeartHandshake,
  },

];



export default function WhyChooseUs() {


  return (

    <section
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
            Why Choose ApexCare
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            "
          >

            Professional care you can
            <span
              className="
              text-gray-500
              "
            >
              {" "}depend on.
            </span>


          </h2>



          <p
            className="
            mt-6
            text-gray-600
            "
          >

            We combine professionalism, attention to detail and
            customer-focused solutions to deliver better spaces.

          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >



          {reasons.map((reason)=>(


            <motion.div

              key={reason.title}


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
                w-12
                h-12
                rounded-xl
                bg-green-100
                text-green-600
                flex
                items-center
                justify-center
                mb-6"
              >

  <reason.icon
    size={26}
  />

</div>




              <h3
                className="
                text-xl
                font-bold
                text-gray-900
                mb-4
                "
              >

                {reason.title}

              </h3>




              <p
                className="
                text-gray-600
                leading-relaxed
                "
              >

                {reason.description}

              </p>



            </motion.div>


          ))}



        </div>



      </div>


    </section>

  );

}