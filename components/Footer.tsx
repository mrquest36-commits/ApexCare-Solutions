export default function Footer() {

  return (

    <footer
      className="
      px-8
      py-12
      border-t
      border-gray-200
      bg-gray-50
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-10
        "
      >


        {/* Brand */}


        <div>


          <div
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
              "
            >
              A
            </div>


            <span>
              Apex<span className="text-green-600">
                Care
              </span>
            </span>


          </div>



          <p
            className="
            mt-5
            text-gray-600
            leading-relaxed
            "
          >

            Professional cleaning and property care solutions
            helping homes and businesses maintain cleaner,
            healthier spaces.

          </p>


        </div>





        {/* Services */}


        <div>


          <h3
            className="
            font-semibold
            text-gray-900
            mb-5
            "
          >
            Services
          </h3>



          <ul
  className="
  space-y-3
  text-gray-600
  "
>

  <li>
    <a
      href="#services"
      className="hover:text-green-600 transition"
    >
      Residential Cleaning
    </a>
  </li>


  <li>
    <a
      href="#services"
      className="hover:text-green-600 transition"
    >
      Office Cleaning
    </a>
  </li>


  <li>
    <a
      href="#services"
      className="hover:text-green-600 transition"
    >
      Property Maintenance
    </a>
  </li>


  <li>
    <a
      href="#services"
      className="hover:text-green-600 transition"
    >
      Post-Construction Cleaning
    </a>
  </li>


</ul>


        </div>





        {/* Contact */}


        <div>


          <h3
            className="
            font-semibold
            text-gray-900
            mb-5
            "
          >
            Contact
          </h3>



          <ul
  className="
  space-y-3
  text-gray-600
  "
>


  <li>
    Accra, Ghana
  </li>



  <li>

    <a
      href="https://wa.me/233XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-600 transition"
    >

      WhatsApp: +233 596779544

    </a>

  </li>




  <li>

    <a
      href="mailto:hello@apexcare.com"
      className="hover:text-green-600 transition"
    >

      hello@apexcare.com

    </a>

  </li>



</ul>


        </div>



      </div>




      {/* Bottom */}


      <div
        className="
        max-w-7xl
        mx-auto
        mt-12
        pt-6
        border-t
        border-gray-200
        text-sm
        text-gray-500
        text-center
        "
      >

        © {new Date().getFullYear()} ApexCare Solutions. All rights reserved.

      </div>



    </footer>

  );

}