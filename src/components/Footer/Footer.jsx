import Link from 'next/link'
import { Facebook, MapPin, Instagram, Phone } from 'lucide-react' // Przykladowe ikony z lucide-react
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='bg-gray-100 text-gray-600 py-8'>
			<div className='max-w-8xl  px-4 sm:px-6 lg:px-8 md:mx-24'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
					{/* Logo / Nazwa Firmy */}
					<div className='mb-6 md:mb-0'>
						<Link href='/' className='text-2xl font-bold text-gray-800'>
							<Image src='/images/logo.png' width={400} height={500} className='' />
						</Link>

						{/* Adres i Telefon */}
						<div className='mt-4'>
							<p className='text-sm flex flex-row'>
								Adres: Ogrodowa 72/74, 91-071 Łódź
								<MapPin className='mx-2' />
							</p>
							<p className='text-sm flex flex-row'>
								Telefon: +48 516 151 655
								<Phone className='mx-2' />
							</p>
						</div>
					</div>

					{/* Nawigacja */}
					<div className='flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-6 md:mb-0 flex-wrap'>
						<Link href='/' className='hover:text-gray-800'>
							Strona główna
						</Link>
						<Link href='#info' className='hover:text-gray-800'>
							O nas
						</Link>
						<Link href='#BHP' className='hover:text-gray-800'>
							BHP
						</Link>
						<Link href='#personal' className='hover:text-gray-800'>
							Dział Personalny
						</Link>
						<Link href='#office' className='hover:text-gray-800'>
							Zaopatrzenie Biura
						</Link>
						<Link href='#maintenace' className='hover:text-gray-800'>
							Utrzymanie Ruchu
						</Link>
						<Link href='#poligrafia' className='hover:text-gray-800'>
							Poligrafia i Reklama
						</Link>
						<Link href='#portfolio' className='hover:text-gray-800'>
							Portfolio
						</Link>
						<Link href='#kontakt' className='hover:text-gray-800'>
							Kontakt
						</Link>
					</div>

					{/* Ikony Social Media */}
					<div className='flex space-x-6'>
						<Link
							href='https://www.facebook.com/profile.php?id=61565534100440'
							target='_blank'
							aria-label='Facebook'
							className='hover:text-gray-800'>
							<Facebook className='h-5 w-5' />
						</Link>
						<Link href='https://instagram.com' target='_blank' aria-label='Instagram' className='hover:text-gray-800'>
							<Instagram className='h-5 w-5' />
						</Link>
					</div>
				</div>

				<div className='mt-8 text-center text-sm'>
					<p>&copy; {new Date().getFullYear()} AB FORMAT. Wszystkie prawa zastrzeżone.</p>
					<p>Written in a cockpit ✈️ by Mateusz Kubasiewicz.</p>
				</div>
			</div>
		</footer>
	)
}
