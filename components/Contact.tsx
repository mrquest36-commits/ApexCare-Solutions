"use client";

import { motion } from "framer-motion";


export default function Contact() {


  return (

    <section
      id="contact"
      className="
      px-8
      py-24
      "
    >


      <div
        className="
        max-w-5xl
        mx-auto
        "
      >


        <motion.div

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

          transition={{
            duration:0.7,
          }}



          className="
          rounded-3xl
          bg-green-600
          p-10
          md:p-16
          text-center
          "
        >



          <p
            className="
            text-green-100
            font-semibold
            mb-4
            "
          >
            Request A Service
          </p>




          <h2
            className="
            text-4xl
            md:text-6xl
            font-bold
            text-white
            leading-tight
            "
          >

            Ready for a cleaner,
            <span
              className="
              block
              "
            >
              better space?

            </span>


          </h2>





          <p
            className="
            mt-6
            text-green-50
            max-w-2xl
            mx-auto
            leading-relaxed
            "
          >

            Contact ApexCare Solutions today and let us help you
            maintain a cleaner, safer and more comfortable environment.

          </p>





          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
          >



            <a
              href="https://wa.me/+233596779544?text=Hello%20ApexCare,%20I%20would%20like%20to%20request%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-8
              py-3
              rounded-full
              bg-white
              text-green-700
              font-medium
              hover:bg-gray-100
              transition
              "
            >
              Contact ApexCare
            </a>




            <a
              href="#services"
              className="
              px-8
              py-3
              rounded-full
              border
              border-white/40
              text-white
              hover:bg-white/10
              transition
              "
            >
              View Services
            </a>




          </div>



        </motion.div>


      </div>


    </section>

  );

}