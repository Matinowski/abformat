'use client'

import { useState } from 'react'
import Image from 'next/image'
import img from '@/assets/images/3.jpg'


export default function PersonnelDepartment() {
  const [activeItem, setActiveItem] = useState(null)

  const listItems = [
    {
      id: 1,
      text: 'Organizujemy szkolenia dla pracowników, eventy, imprezy okolicznościowe.',
      image: 'asd',
    },
    {
      id: 2,
      text: 'Odzież i akcesoria eventowe, reklamowe i okazjonalne z nadrukiem pod indywidualne potrzeby.',
      image: 'img2',
    },
    {
      id: 3,
      text: 'Woda, elektrolity, lody w okresie letnim.',
      image: 'img3',
    },
  ]

  const openModal = (id) => {
    setActiveItem(id)
  }

  const closeModal = () => {
    setActiveItem(null)
  }

  const activeItemData = listItems.find(item => item.id === activeItem)

  return (
    <section id='personal' className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-4xl font-bold mb-8 text-center">DZIAŁ PERSONALNY</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <p className="font-semibold">Dostarczamy paczki okolicznościowe, upominki dla pracowników, owoce, ciasta, lody.</p>
        
        <ul className="space-y-2">
          {listItems.map(item => (
            <li
              key={item.id}
              //onClick={() => openModal(item.id)}
              className="flex items-start cursor-pointer hover:text-blue-500 transition-colors duration-200"
            >
              <span className="text-blue-500 mr-2">•</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative aspect-[4/3] w-full">
        <Image
          src='/images/8.jpg'
          alt="Personnel department image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
    
    <div className="mt-4 h-6 bg-yellow-500 w-full"></div>


      {/* Modal Pop-up */}
      {activeItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
            <div className="relative w-full h-64">
              <Image
                src={activeItemData.image}
                alt={`Image for ${activeItemData.text}`}
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
