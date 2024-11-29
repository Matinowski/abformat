"use client";

import { useState } from "react";
import { useModal } from "@/app/hooks/useModal";
import { GalleryImage } from "./GalleryImage";
import { Modal } from "./Modal";

const images = [
  "/portfolio/p-01.png",
  "/portfolio/p-02.png",
  "/portfolio/p-03.png",
  "/portfolio/p-04.png",
  "/portfolio/p-05.png",
  "/portfolio/p-06.png",
  "/portfolio/p-07.png",
  "/portfolio/p-08.png",
  "/portfolio/p-09.png",
  "/portfolio/p-10.png",
  "/portfolio/p-11.png",
  "/portfolio/p-12.png",
  "/portfolio/p-13.png",
  "/portfolio/p-14.png",
  "/portfolio/p-15.png",
  "/portfolio/p-16.png",
  "/portfolio/p-17.png",
  "/portfolio/p-18.png",
  "/portfolio/p-19.png",
  "/portfolio/p-20.png",
  "/portfolio/p-21.png",
  "/portfolio/p-22.png",
  "/portfolio/p-23.png",
  "/portfolio/p-24.png",
  "/portfolio/p-25.png",
  "/portfolio/p-26.png",
  "/portfolio/p-27.png",
  "/portfolio/p-28.png",
  "/portfolio/p-29.png",
  "/portfolio/p-30.png",
  "/portfolio/p-31.png",
  "/portfolio/p-32.png",
  "/portfolio/p-33.png",
  "/portfolio/p-34.png",
  "/portfolio/p-35.png",
  "/portfolio/p-36.png",
  "/portfolio/p-37.png",
];

export function Portfolio() {
  const { isOpen, selectedImage, openModal, closeModal } = useModal();
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? images : images.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-4xl font-bold text-center text-gray-600">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visibleImages.map((src, index) => (
          <GalleryImage
            key={index}
            src={src}
            alt={`Zdjęcie w galerii ${index + 1}`}
            onClick={() => openModal(src)}
          />
        ))}
      </div>
      {!expanded && (
        <div className="mt-6 text-center">
          <button onClick={() => setExpanded(true)}>Pokaż więcej</button>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={selectedImage || ""}
      />
    </div>
  );
}
