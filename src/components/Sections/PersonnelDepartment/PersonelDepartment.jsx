import Image from 'next/image'
import img from '@/assets/images/3.jpg'

export default function PersonnelDepartment() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-6xl font-bold mb-8 text-center">DZIAŁ PERSONALNY</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <p className="font-semibold">Dostarczamy paczki okolicznościowe, upominki dla pracowników, owoce, ciasta, lody.</p>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Organizujemy szkolenia dla pracowników, eventy, imprezy okolicznościowe.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Odzież i akcesoria eventowe, reklamowe i okazjonalne z nadrukiem pod indywidualne potrzeby.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Woda, elektrolity, lody w okresie letnim.
            </li>
          </ul>
        </div>
        
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={img}
            alt="Personnel department image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      
      <div className="mt-8 h-2 bg-blue-500 w-1/3"></div>
      <div className="mt-4 h-2 bg-yellow-500 w-full"></div>
    </div>
  )
}