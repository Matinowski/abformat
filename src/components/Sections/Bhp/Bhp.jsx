import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

import img from '@/assets/images/4.jpg'

export default function Bhp() {
	return (
		<section id='bhp' className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-bold mb-12 text-center bg-clip-text text-gray-600'>
					BEZPIECZEŃSTWO I HIGIENA PRACY
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='bg-white rounded-lg shadow-lg p-6'>
						<h2 className='text-xl font-semibold mb-4 text-blue-600'>Nasze Usługi</h2>
						<ul className='space-y-3 text-md'>
							{[
								'Oznakowanie obiektów/magazynów.',
								'Dostawa środków Ochrony Osobistej, kaski, buty safety, okulary.',
								'Pośrednictwo w szkoleniach BHP.',
								'Inne produkty i środki BHP, np. materiały opatrunkowe, apteczki pierwszej pomocy itp.',
							].map((item, index) => (
								<li key={index} className='flex items-start'>
									<ChevronRight className='h-5 w-5 text-blue-500 mr-2 flex-shrink-0' />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center'>
						<Image
							src='/images/7.jpg'
							alt='Workers in safety gear'
							width={600}
							height={400}
							className='w-full h-auto object-cover rounded-lg shadow-md'
						/>
					</div>
				</div>

				<div className='mt-8 bg-white rounded-lg shadow-lg p-6'>
					<div className='flex justify-center items-center space-x-4'>
						{['helmet', 'goggles', 'vest', 'boots', 'gloves', 'suit'].map(item => (
							<div
								key={item}
								className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-200'>
								<Image src={`icons/${item}.svg`} alt={item} width={40} height={40} className='invert' />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
