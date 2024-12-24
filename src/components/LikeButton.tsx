'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LikeButtonProps {
  initialLikes: number
}

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
    setIsLiked(!isLiked)
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
    >
      <Heart
        className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
      />
      <span>{likes}</span>
    </button>
  )
} 