import Image from 'next/image'
import img from '@/assets/images/2.jpg'

export default function Component() {
	return (
		<section
			id='info'
			className='bg-background text-foreground min-h-screen flex flex-col justify-center items-center p-4 sm:p-8'>
			<div className='max-w-6xl w-full space-y-8'>
				<h1 className='text-2xl sm:text-4xl font-bold text-center mb-8 text-gray-600 '>
					NIE ZASTANAWIAJ SIĘ...
					<br />
					WYBIERZ SPRAWDZONEGO PARTNERA
				</h1>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
					<div className='space-y-6'>
						<FeatureItem
							title='Naszymi klientami są firmy,'
							description='przedsiębiorstwa, zakłady produkcyjne, sieci aptek, przychodnie, uczelnie, szkoły, firmy budowlane i deweloperskie, kancelarie prawnicze oraz wiele innych.'
						/>
						<FeatureItem
							title='Obsługujemy zarówno małe i'
							description='średnie firmy, jak i korporacje o strukturze międzynarodowej. W przypadku tych ostatnich, współpraca często opiera się na zasadzie autoryzowanego dostawcy.'
						/>
						<FeatureItem
							title='Szeroki zakres świadczonych usług'
							description='oraz rozbudowana i zróżnicowana baza własnych dostawców sprawiają, że doskonale sprawdzamy się jako partner oferujący szerokie kompetencje doradcze i handlowe, z których korzystają nasi klienci, w tym m.in. działy zakupów.'
						/>
						<p className='text-sm text-muted-foreground mt-8'>
							Zamówione produkty dostarczamy na miejsce do siedziby Odbiorcy transportem własnym lub za pośrednictwem
							firm kurierskich.
						</p>
					</div>
					<div className='hidden lg:block'>
						<div className='relative'>
							<div className='absolute -left-4 -top-4 w-24 h-24 bg-blue-800 rounded-full opacity-50' />
							<div className='absolute -right-4 -bottom-4 w-12 h-12 bg-yellow-400 rounded-full opacity-50' />
							<Image
								src='/images/3.jpg'
								alt='Happy partner'
								className='rounded-lg shadow-lg relative z-10'
								width={800}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function FeatureItem({ title, description }) {
	return (
		<div className='space-y-2'>
			<h2 className='text-lg sm:text-xl font-semibold'>{title}</h2>
			<p className='text-sm sm:text-base text-muted-foreground'>{description}</p>
		</div>
	)
}
