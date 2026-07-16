"use client";

import { motion } from "framer-motion";


const steps = [

  {
    number: "01",

    title:
      "Contact Us",

    description:
      "Tell us about your space and the type of cleaning or maintenance service you need.",
  },


  {
    number: "02",

    title:
      "Schedule Visit",

    description:
      "We understand your requirements and arrange a convenient service time.",
  },


  {
    number: "03",

    title:
      "Service Delivery",

    description:
      "Our team completes the work professionally and ensures your space is properly cared for.",
  },

];



export default function Process() {


  return (

    <section
      id="process"
      className="
      px-8
      py-24
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
            Our Process
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            "
          >

            Simple steps to a
            <span
              className="
              text-gray-500
              "
            >
              {" "}cleaner space.
            </span>


          </h2>



        </div>





        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >



          {steps.map((step)=>(


            <motion.div

              key={step.number}


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
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-8
              hover:shadow-lg
              transition
              "

            >



              <div
                className="
                text-green-600
                font-bold
                text-sm
                mb-6
                "
              >

                {step.number}

              </div>




              <h3
                className="
                text-xl
                font-bold
                text-gray-900
                mb-4
                "
              >

                {step.title}

              </h3>




              <p
                className="
                text-gray-600
                leading-relaxed
                "
              >

                {step.description}

              </p>



            </motion.div>


          ))}



        </div>



      </div>


    </section>

  );

}