'use client'

import { useState } from 'react'
import Image from 'next/image'



export default function Maintenance() {
  const [activeIndex, setActiveIndex] = useState(null)

  const items = [
    { text: "Środki czystości, środki i materiały eksploatacyjne, smary itp.", image: 'img1' },
    { text: "Materiały, podzespoły i części zamienne wykorzystywane do napraw i bieżących konserwacji", image: 'img2' },
    { text: "Narzędzia i urządzenia", image: 'img3' },
    { text: "Dokumentacja techniczna, normy, produkty specialistyczne", image: 'img4' }
  ]

  const openModal = (index) => {
    setActiveIndex(index)
  }

  const closeModal = () => {
    setActiveIndex(null)
  }

  const activeItem = items[activeIndex]

  return (
    <section id='maintenace' className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 border-b-2 border-gray-400 pb-4">
          UTRZYMANIE RUCHU
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 space-y-6">
            <ul className="space-y-3 text-gray-700">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start cursor-pointer transition-colors duration-300 hover:text-blue-600"
                  //onClick={() => openModal(index)}
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-2/5 aspect-video relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/9.jpg"
              alt="Utrzymanie Ruchu"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
            <div className="relative w-full h-64">
              <Image
                src={activeItem.image}
                alt={`Image for ${activeItem.text}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
