import Image from 'next/image';

export function GalleryImage({ src, alt, onClick }) {
  return (
    <div
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-25" />
    </div>
  );
}

