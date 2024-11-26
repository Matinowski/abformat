'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Square, Circle, Triangle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MinimalisticPrintingAdsMotion() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id='poligrafia' className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              POLIGRAFIA I REKLAMA
            </motion.h2>
            <motion.ul 
              className="space-y-2 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                "Usługi poligraficzne, projektowanie graficzne, skład komputerowy",
                "Druki reklamowe, ulotki, foldery, wizytówki, papiery firmowe",
                "Pieczątki, laminowanie, bindowanie",
                "Gadżety reklamowe, np. parasole, kubki, smycze, torby",
                "Szyldy, tablice, kasetony, litery przestrzenne",
                "Reklama zewnętrzna: banery, flagi, siatki, tablice",
                "Reklama na samochodach",
                "Systemy wystawiennicze",
                "Zdjęcia paszportowe i portretowe",
                "Skanowanie, kserokopie, wydruki",
                "Ksero wielkoformatowe"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className='text-xl'>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button 
              className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sprawdź naszytch dostawców
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </motion.button>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Image
              src='/images/5.jpg'
              alt="Kolorowe ołówki reprezentujące kreatywność w poligrafii i reklamie"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-400 rounded-sm"
              animate={{ rotate: isHovered ? 90 : 45 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Square className="absolute top-12 right-12 text-gray-400 w-24 h-24" />
        <Circle className="absolute bottom-12 left-12 text-gray-400 w-16 h-16" />
        <Triangle className="absolute top-1/2 left-1/2 text-gray-400 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </section>
  )
}