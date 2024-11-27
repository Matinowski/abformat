'use client'
import Image from 'next/image'
import { useState } from 'react'
import img from '@/assets/images/5.jpg'

export default function Office() {
	const [activeItem, setActiveItem] = useState(null)

	const listItems = [
		{
			id: 1,
			text: 'Urządzenia biurowe do obróbki dokumentów, niszczarki, bindownice, laminatory.',
			image: 'img1',
		},
		{
			id: 2,
			text: 'Materiały eksploatacyjne, np. tusze, tonery oryginalne oraz zamienniki.',
			image: 'img2',
		},
		{
			id: 3,
			text: 'Artykuły biurowe, np. segregatory, taki termiczne i offsetowe, etykiety samoprzylepne, papier do ploterów, segregatory.',
			image: 'img3',
		},
		{
			id: 4,
			text: 'Środki utrzymania czystości, środki chemiczne oraz artykuły spożywcze.',
			image: 'img4',
		},
		{
			id: 5,
			text: 'Sprzedaż i dzierżawa urządzeń kopiująco-drukujących oraz wielofunkcyjnych, włącznie z serwisem gwarancyjnym i pogwarancyjnym.',
			image: 'img5',
		},
	]

	const openModal = id => {
		setActiveItem(id)
	}

	const closeModal = () => {
		setActiveItem(null)
	}

	const activeItemData = listItems.find(item => item.id === activeItem)

	return (
		<section id='office' className='min-h-screen bg-white text-gray-800 p-4 md:p-8'>
			<div className='max-w-7xl mx-auto'>
				<header className='mb-12 relative'>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tighter'>
						ZAOPATRZENIE
						<br />
						<span className='text-7xl md:text-8xl cyan'>BIURA</span>
					</h1>
				</header>

				<div className='grid grid-cols-1 lg:grid-cols-5 gap-8 items-start'>
					<div className='lg:col-span-3 space-y-6'>
						<Image
							src='/images/6.jpg'
							width={800}
							height={600}
							alt='Modern office setup'
							className='w-full h-auto object-cover rounded-lg shadow-lg'
						/>
					</div>

					<div className='lg:col-span-2'>
						<div className='space-y-6'>
							{listItems.map(item => (
								<div
									key={item.id}
									className='group cursor-pointer' // onClick={() => openModal(item.id)}
								>
									<p className='text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors duration-300'>
										{item.text}
									</p>
									<div className='h-px w-full bg-gray-200 group-hover:bg-blue-600 transition-colors duration-300'></div>
								</div>
							))}

							<p className='text-sm text-gray-600 italic mt-8'>
								Współpracujemy z autoryzowanymi serwisami oferując bezpłatny audyt i doradztwo.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Modal Pop-up */}
			{activeItem && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full'>
						<button onClick={closeModal} className='absolute top-2 right-2 text-xl font-bold'>
							&times;
						</button>
						<div className='relative w-full h-64'>
							<Image
								src={activeItemData.image}
								alt={`Image for ${activeItemData.text}`}
								layout='fill'
								objectFit='cover'
								className='rounded-lg'
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
