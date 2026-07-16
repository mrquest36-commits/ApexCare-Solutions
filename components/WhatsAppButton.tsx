"use client";

import { MessageCircle } from "lucide-react";


export default function WhatsAppButton() {


  return (

    <a

      href="https://wa.me/+233596779544?text=Hello%20ApexCare,%20I%20would%20like%20to%20request%20a%20service."

      target="_blank"

      rel="noopener noreferrer"


      className="
      fixed
      bottom-6
      right-6
      z-50
      w-14
      h-14
      rounded-full
      bg-green-600
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:bg-green-700
      hover:scale-110
      transition
      "

    >

      <MessageCircle
        size={28}
      />


    </a>

  );

}