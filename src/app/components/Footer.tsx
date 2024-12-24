'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Option 1: Centered content */}
          <div className="md:col-span-3 text-center">
            <h2 className="text-2xl font-bold mb-4">SmartLearn</h2>
            <p className="text-gray-400 max-w-md mx-auto">Empowering minds through innovative e-learning solutions.</p>
          </div>

          {/* Option 2: Two-column layout */}
          {/* Uncomment the following and comment out the above for a two-column layout
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">SmartLearn</h2>
            <p className="text-gray-400">Empowering minds through innovative e-learning solutions.</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@smartlearn.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={link.href} className="hover:text-indigo-400 transition duration-300">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hover:text-indigo-400 transition duration-300"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} SmartLearn. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

