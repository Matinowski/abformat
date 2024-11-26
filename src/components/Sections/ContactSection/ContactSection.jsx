"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Printer, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section className="bg-cyan-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white sm:text-4xl">Kontakt</h2>
          <p className="mt-4 text-xl text-white">Skontaktuj się z nami - porozmawiajmy!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Wyślij Wiadomość
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Informacje Kontaktowe</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src='/images/logo.png' width={200} height={200} alt="logo abformat"/>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <a href="mailto:info@printmaster.com" className="text-gray-800 hover:text-blue-600">
                    kontakt@abformat.pl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-600" />
                <a href="tel:+48516151655" className="text-gray-800 hover:text-blue-600">
                  +48 516 151 655
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-800">Ogrodowa 72/74, 91-071 Łódź</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Godziny Otwarcia</h4>
              <p className="text-gray-800">Poniedziałek - Piątek: 8:00- 16:00 </p>
              <p className="text-gray-800">Sobota: Zamknięte</p>
              <p className="text-gray-800">Niedziela: Zamknięte</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
