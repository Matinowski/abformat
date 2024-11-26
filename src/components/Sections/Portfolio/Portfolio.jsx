'use client'

import Image from "next/image"
import { useState } from "react"

export default function ProductPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [enlargedImage, setEnlargedImage] = useState(null)

  const categories = [
    {
      name: "Projekty ",
      image: "/images/portfolio/Plakaty/01.png",
      gallery: ["/images/portfolio/Plakaty/01.png", "/images/portfolio/Plakaty/02.png", "/images/portfolio/Plakaty/03.png", "/images/portfolio/Plakaty/04.png", "/images/portfolio/Plakaty/05.png", "/images/portfolio/Plakaty/06.png"],
    },
    {
      name: "Realizacje",
      image: "/images/portfolio/Realizacje/05.png",
      gallery: ["/images/portfolio/Realizacje/01.png", "/images/portfolio/Realizacje/02.png", "/images/portfolio/Realizacje/03.png", "/images/portfolio/Realizacje/04.png", "/images/portfolio/Realizacje/05.png"],
    },
    {
      name: "BHP",
      image: "/images/portfolio/BHP/04.png",
      gallery: ["/images/portfolio/BHP/01.png", "/images/portfolio/BHP/02.png", "/images/portfolio/BHP/03.png", "/images/portfolio/BHP/04.png"],
    },
    {
      name: "Reklama zewnętrzna",
      image: "/images/portfolio/Loga/05.png",
      gallery: ["/images/portfolio/Loga/01.png", "/images/portfolio/Loga/02.png", "/images/portfolio/Loga/03.png", "/images/portfolio/Loga/04.png", "/images/portfolio/Loga/05.png"],
    },

  ]

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const closeModal = () => {
    setSelectedCategory(null)
  }

  const handleImageClick = (image) => {
    setEnlargedImage(image)
  }

  const closeEnlargedImage = () => {
    setEnlargedImage(null)
  }

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Nasze portfolio</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group" onClick={() => handleCategoryClick(category)}>
              <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit mollitia quasi sapiente sit eligendi praesentium amet, quo dolor dignissimos?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Modal Pop-up */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedCategory.name} Galeria</h3>
              <button onClick={closeModal} className="text-xl font-bold">
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.gallery.map((image, idx) => (
                <div key={idx} className="cursor-pointer" onClick={() => handleImageClick(image)}>
                  <Image
                    src={image}
                    alt={`${selectedCategory.name} Image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeEnlargedImage}>
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <Image
              src={enlargedImage}
              alt="Enlarged Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}