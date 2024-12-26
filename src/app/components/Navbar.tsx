'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <motion.nav 
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-xl font-bold">
              SmartLearn
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/courses" 
                className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </Link>

              {isSignedIn ? (
                <Link 
                  href="/profile" 
                  className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
              ) : (
                <>
                  <Link 
                    href="/register" 
                    className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                  <Link 
                    href="/login" 
                    className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

