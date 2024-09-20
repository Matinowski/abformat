'use client'

import { useState } from 'react'
import Link from 'next/link'

const NavComponent = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className='bg-white shadow-md fixed w-full z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					{/* Logo */}
					<div className='flex-shrink-0 flex items-center'>
						<Link href='/'>
							<img className='h-8 w-auto' src='/logo_ab.jpg' alt='Logo' />
						</Link>
					</div>

					{/* Menu for desktop */}
					<div className='hidden md:flex space-x-4 items-center'>
						<Link href='/' className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
							Home
						</Link>
						<Link href='/about' className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
							About
						</Link>
						<Link
							href='/services'
							className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
							Contact
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='-mr-2 flex md:hidden'>
						<button
							onClick={toggleMenu}
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900'>
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className='md:hidden'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
						<Link
							href='/'
							className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'>
							Hom
						</Link>
						<Link
							href='/about'
							className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'>
							About
						</Link>
						<Link
							href='/services'
							className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	)
}

export default NavComponent
