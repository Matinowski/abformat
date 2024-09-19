import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import img from "@/assets/images/5.jpg"

export default function Office() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
            ZAOPATRZENIE
            <br />
            <span className="text-7xl md:text-8xl text-blue-600">BIURA</span>
          </h1>
          <div className="absolute top-0 right-0 w-1/2 h-1 bg-blue-600"></div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <Image
              src={img}
              width={800}
              height={600}
              alt="Modern office setup"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {[
                "Urządzenia biurowe do obróbki dokumentów, niszczarki, bindownice, laminatory.",
                "Materiały eksploatacyjne, np. tusze, tonery oryginalne oraz zamienniki.",
                "Artykuły biurowe, np. segregatory, taki termiczne i offsetowe, etykiety samoprzylepne, papier do ploterów, segregatory.",
                "Środki utrzymania czystości, środki chemiczne oraz artykuły spożywcze.",
                "Sprzedaż i dzierżawa urządzeń kopiująco-drukujących oraz wielofunkcyjnych, włącznie z serwisem gwarancyjnym i pogwarancyjnym."
              ].map((item, index) => (
                <div key={index} className="group">
                  <p className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item}
                  </p>
                  <div className="h-px w-full bg-gray-200 group-hover:bg-blue-600 transition-colors duration-300"></div>
                </div>
              ))}
              
              <p className="text-sm text-gray-600 italic mt-8">
                Współpracujemy z autoryzowanymi serwisami oferując bezpłatny audyt i doradztwo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}