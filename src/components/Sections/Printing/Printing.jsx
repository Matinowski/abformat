'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Square, Circle, Triangle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MinimalisticPrintingAdsMotion() {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<section id='poligrafia' className='bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
			<motion.div
				className='max-w-7xl mx-auto'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='relative z-10'>
						<motion.h2
							className='text-4xl font-bold text-gray-600 mb-6'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}>
							POLIGRAFIA I REKLAMA
						</motion.h2>
						<motion.ul
							className='space-y-2 text-sm text-gray-600'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}>
							{[
								'Usługi poligraficzne, projektowanie graficzne, skład komputerowy',
								'Druki reklamowe, ulotki, foldery, wizytówki, papiery firmowe',
								'Pieczątki, laminowanie, bindowanie',
								'Gadżety reklamowe',
								'Szyldy, tablice, kasetony, litery przestrzenne',
								'Reklama zewnętrzna: banery, flagi, siatki, tablice',
								'Reklama na samochodach',
								'Systemy wystawiennicze',
								'Skanowanie, kserokopie, wydruki',
							].map((item, index) => (
								<motion.li
									key={index}
									className='flex items-start'
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 * index, duration: 0.3 }}>
									<ArrowRight className='h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0' />
									<span className='text-xl'>{item}</span>
								</motion.li>
							))}
						</motion.ul>
						<motion.a
							className='mt-8 mr-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
              href='https://katalogkalendarzy.pl'
              >
                
							Katalog Kalendarzy
							<ArrowRight className='ml-2 -mr-1 h-5 w-5' />
						</motion.a>
						<motion.a
							className='mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
              href='https://view.publitas.com/md-pl/12_24-1-gifts_pol_pln_vr/page/1'
              >
							Katalog Gadżetów Reklamowych
							<ArrowRight className='ml-2 -mr-1 h-5 w-5' />
						</motion.a>
					</div>
					<motion.div
						className='relative'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6, duration: 0.5 }}
						onHoverStart={() => setIsHovered(true)}
						onHoverEnd={() => setIsHovered(false)}>
						<Image
							src='/images/5.jpg'
							alt='Kolorowe ołówki reprezentujące kreatywność w poligrafii i reklamie'
							width={800}
							height={600}
							className='rounded-lg shadow-lg'
						/>
					</motion.div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ delay: 0.8, duration: 0.5 }}></motion.div>
		</section>
	)
}
