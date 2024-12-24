'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LikeButton } from '@/components/LikeButton'
import { UserProfile, useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

// Mock courses data
const courses = [
  { id: 1, title: 'Introduction to React', progress: 75, totalHours: 20, completedHours: 15, startDate: '2023-01-15', likes: 42 },
  { id: 2, title: 'Advanced JavaScript', progress: 50, totalHours: 30, completedHours: 15, startDate: '2023-02-01', likes: 28 },
  { id: 3, title: 'UI/UX Design Fundamentals', progress: 25, totalHours: 25, completedHours: 6, startDate: '2023-03-10', likes: 35 },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/login');
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <UserProfile />
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex mb-6">
            <Button 
              variant={activeTab === 'profile' ? 'default' : 'outline'}
              onClick={() => setActiveTab('profile')}
              className="mr-2"
            >
              Profile
            </Button>
            <Button 
              variant={activeTab === 'courses' ? 'default' : 'outline'}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </Button>
          </div>

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {courses.map((course) => (
                <motion.div 
                  key={course.id}
                  className="border rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                  <div className="flex items-center mb-2">
                    <Book className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-sm text-gray-600">
                      {course.completedHours} / {course.totalHours} hours completed
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-sm text-gray-600">Started on {course.startDate}</span>
                  </div>
                  <Progress value={course.progress} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{course.progress}% complete</span>
                    <LikeButton initialLikes={course.likes} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

