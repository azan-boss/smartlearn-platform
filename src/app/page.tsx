'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Book, Video, Code, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

const courseCards = [
  { title: 'Learn React', icon: Code, description: 'Master modern web development with React' },
  { title: 'Data Science Fundamentals', icon: Book, description: 'Dive into the world of data analysis and machine learning' },
  { title: 'Video Editing Pro', icon: Video, description: 'Create stunning videos with professional techniques' },
]

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/login');
    }
  }, [isSignedIn, isLoaded, router]);

  // Show nothing while checking auth status
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to SmartLearn
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your journey to knowledge starts here.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courseCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <card.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
            <p className="font-bold">Limited Time Offer!</p>
          </div>
          <p>Get 50% off on all courses. Enroll now!</p>
          <div className="mt-4">
            <Image
              src="/images/sale-banner.jpg"
              alt="Sale Alert"
              width={300}
              height={100}
              className="rounded"
              priority
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}


