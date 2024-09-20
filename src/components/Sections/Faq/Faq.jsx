'use client'

import { ChevronRight, Circle, Square, Triangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Faq() {
	const [activeSection, setActiveSection] = useState(0)
	const sections = [
		{
			title: 'Co to sitodruk?',
			icon: Circle,
			content: 'TO jest jakis tekst TO jest jakis tekst TO jest jakis tekst',
		},
		{
			title: 'druk offsetowy, a cyfrowy',
			icon: Square,
			content: 'TO jest jakis tekst TO jest jakis tekst TO jest jakis tekst',
		},
		{
			title: 'Inne pytanie',
			icon: Triangle,
			content: 'TO jest jakis tekst TO jest jakis tekst TO jest jakis tekst',
		},
	]
	return (
		<>
			<section className=' flex items-center justify-center p-4 flex-col mt-12'>
				<h2 className='text-6xl text-bold mb-6 text-center'>Najczęściej zadawne pytania</h2>
				<div className='space-y-4'>
					{sections.map((section, index) => (
						<motion.div
							key={index}
							className={`p-4 rounded-lg cursor-pointer transition-colors ${
								activeSection === index ? 'bg-blue-50' : 'bg-gray-100'
							}`}
							onClick={() => setActiveSection(index)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-3'>
									<section.icon className='w-6 h-6 text-blue-600' />
									<h3 className='font-semibold text-gray-800'>{section.title}</h3>
								</div>
								<ChevronRight
									className={`w-5 h-5 transition-transform text-blue-600 ${activeSection === index ? 'rotate-90' : ''}`}
								/>
							</div>
							{activeSection === index && (
								<motion.p
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
									className='mt-2 text-gray-600'>
									{section.content}
								</motion.p>
							)}
						</motion.div>
					))}
				</div>
			</section>
		</>
	)
}
