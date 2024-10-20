"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Test",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/furniture1.jpg", "/furniture2.jpg", "/furniture3.jpg"],
    },
    {
      name: "Test2",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/lighting1.jpg", "/lighting2.jpg", "/lighting3.jpg"],
    },
    {
      name: "Test3",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/textiles1.jpg", "/textiles2.jpg", "/textiles3.jpg"],
    },
    {
      name: "Test4",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/kitchen1.jpg", "/kitchen2.jpg", "/kitchen3.jpg"],
    },
    {
      name: "Test5",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/outdoor1.jpg", "/outdoor2.jpg", "/outdoor3.jpg"],
    },
    {
      name: "Test6",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/office1.jpg", "/office2.jpg", "/office3.jpg"],
    },
    {
      name: "Test7",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/bathroom1.jpg", "/bathroom2.jpg", "/bathroom3.jpg"],
    },
    {
      name: "Test8",
      image: "/placeholder.svg?height=300&width=400",
      gallery: ["/accessories1.jpg", "/accessories2.jpg", "/accessories3.jpg"],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <section id='portfolio' className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Nasze portfolio</h2>
          {/* <p className="text-xl text-muted-foreground">
            Explore our diverse range of products, each crafted with precision and style. From elegant furniture to innovative accessories, our portfolio showcases the best in modern design and functionality.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group" //onClick={() => handleCategoryClick(category)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {category.name}
                  </h3>
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

      {/* Modal Pop-up */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">
                {selectedCategory.name} Gallery
              </h3>
              <button onClick={closeModal} className="text-xl font-bold">
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.gallery.map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt={`${selectedCategory.name} Image ${idx + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
