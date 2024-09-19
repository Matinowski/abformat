"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Circle, Square, Triangle } from "lucide-react";
import Image from "next/image";

import heroImg from "@/assets/Images/1.jpg";

export default function HeaderSection() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    {
      title: "Doświadczenie",
      icon: Circle,
      content:
        "Działając od 1997 roku, wnosimy dekady doświadczenia branżowego do każdego projektu.",
    },
    {
      title: "Elastyczność",
      icon: Square,
      content:
        "Nasze usługi dostosowują się do Twoich potrzeb, obejmując zarówno produkty, jak i obszary usług.",
    },
    {
      title: "Wydajność",
      icon: Triangle,
      content:
        "Optymalizujemy zarządzanie zasobami, zapewniając maksymalną wartość dla naszych kontrahentów.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Nadamy
            <br />
            Nową Twarz
            <br />
            <span className="text-blue-600">Twojej Firmie</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Zanurz się w świat innowacyjnych rozwiązań dostosowanych do Twojego
            sukcesu.
          </p>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeSection === index ? "bg-blue-50" : "bg-gray-100"
                }`}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-800">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform text-blue-600 ${
                      activeSection === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {activeSection === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600"
                  >
                    {section.content}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-xl aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={heroImg}
              alt="AB FORMAT showcase image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
