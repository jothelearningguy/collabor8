'use client'

import React from 'react';
import Link from 'next/link';
import VideoFrame from '@/components/VideoFrame';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome to tutr
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16">
          Experience the future of learning with our AI-powered tutoring platform
        </p>

        {/* Video Showcase Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            See How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <VideoFrame
              title="Create Engaging Content"
              description="Watch how our tutors create high-quality educational content using our state-of-the-art video platform."
              videoPlaceholder="/video-placeholder-1.jpg"
            />
            <VideoFrame
              title="Learn Anytime, Anywhere"
              description="See how students can access personalized tutoring sessions and learn at their own pace."
              videoPlaceholder="/video-placeholder-2.jpg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </main>
  );
}

