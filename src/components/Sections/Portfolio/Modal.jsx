import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, imageSrc }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          aria-label="Zamknij modal"
        >
          <X size={24} />
        </button>
        <Image
          src={imageSrc}
          alt="Powiększony widok"
          width={1200}
          height={800}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>,
    document.body
  );
}

