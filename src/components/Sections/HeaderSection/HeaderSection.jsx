'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Rocket, Target, Triangle, Square, Circle } from 'lucide-react'
import Link from 'next/link'

export default function SuperAnimatedHeaderSection() {
	const [isHovered, setIsHovered] = useState(false)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	const floatingAnimation = {
		y: ['-10%', '10%'],
		transition: {
			y: {
				duration: 2,
				yoyo: Infinity,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<section className='bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center overflow-hidden relative'>
			<motion.div
				className='absolute inset-0 z-0'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<motion.div className='absolute top-10 left-10 text-blue-200' animate={floatingAnimation}>
					<Triangle className='w-16 h-16' />
				</motion.div>
				<motion.div className='absolute bottom-10 right-10 text-yellow-200' animate={floatingAnimation}>
					<Square className='w-16 h-16' />
				</motion.div>
				<motion.div className='absolute top-1/2 left-1/4 text-green-200' animate={floatingAnimation}>
					<Circle className='w-12 h-12' />
				</motion.div>
			</motion.div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<div>
						<motion.h1 className='text-5xl font-extrabold text-gray-900 mb-6 leading-tight' variants={itemVariants}>
							NADAMY NOWĄ TWARZ.....
							<br />
							<span className='cyan'>TWOJEJ FIRMIE</span>
						</motion.h1>
						<motion.p className='text-xl text-gray-700 mb-8' variants={itemVariants}>
							Twoja droga do niezwykłego sukcesu zaczyna się tutaj. Razem stworzymy przyszłość, o której marzysz!
						</motion.p>
						<motion.ul className='space-y-6 text-gray-600 mb-8' variants={containerVariants}>
							<motion.li className='flex items-start' variants={itemVariants} whileHover={{ scale: 1.05, originX: 0 }}>
								<Zap className='h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0' />
								<span className='text-lg'>Jesteśmy firmą z bogatym doświadczeniem działającą od 1997 roku.</span>
							</motion.li>
							<motion.li className='flex items-start' variants={itemVariants} whileHover={{ scale: 1.05, originX: 0 }}>
								<Rocket className='h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0' />
								<span className='text-lg'>
									Nasza wieloletnia współpraca z klientami pozwala nam na przemyślane i elastyczne poszerzanie oferty
									zarówno produktowej jak i usługowej.
								</span>
							</motion.li>
							<motion.li className='flex items-start' variants={itemVariants} whileHover={{ scale: 1.05, originX: 0 }}>
								<Target className='h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0' />
								<span className='text-lg'>Skutecznie zarządzamy czasem i zasobami naszych kontrahentów.</span>
							</motion.li>
						</motion.ul>
						<motion.div variants={itemVariants}>
							<motion.button
								className='inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg'
								whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
								whileTap={{ scale: 0.95 }}>
								<Link href='#info'>Poznaj nas!</Link>
								<ArrowRight className='ml-2 -mr-1 h-5 w-5' />
							</motion.button>
						</motion.div>
						<motion.div className='mt-12' variants={itemVariants}>
							<Image src='/images/logo.jpg' alt='AB FORMAT Logo' width={400} height={50} className='object-contain' />
						</motion.div>
					</div>
					<motion.div
						className='relative'
						initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						onHoverStart={() => setIsHovered(true)}
						onHoverEnd={() => setIsHovered(false)}>
						<motion.div
							className='absolute inset-0 flex items-center justify-center'
							animate={{ rotate: isHovered ? 360 : 0 }}
							transition={{ duration: 20, ease: 'linear', repeat: Infinity }}>
							<motion.div
								className='w-64 h-64 bg-blue-500 rounded-full opacity-20'
								animate={{ scale: isHovered ? 1.1 : 1 }}
								transition={{ duration: 0.3 }}
							/>
							<motion.div
								className='w-64 h-64 bg-yellow-400 rounded-full ml-32 opacity-20'
								animate={{ scale: isHovered ? 1.15 : 1 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
						<Image
							src='/images/1.jpg'
							alt='Inspirująca bizneswoman gotowa na sukces'
							width={800}
							height={800}
							className='relative z-10 mx-auto rounded-lg shadow-2xl'
						/>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-600 to-yellow-300'
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, ease: 'easeInOut' }}
			/>
		</section>
	)
}
