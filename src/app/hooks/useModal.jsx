import { useState, useCallback } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = useCallback((imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedImage(null);
  }, []);

  return { isOpen, selectedImage, openModal, closeModal };
}

