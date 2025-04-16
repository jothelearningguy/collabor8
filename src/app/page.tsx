'use client'

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          tutr by HEALLY
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The future of tutoring is here. Join America's top tutors.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/tutor-signup"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Become a Tutor
          </Link>
          <Link
            href="/tutors"
            className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Find a Tutor
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose tutr?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Verified Tutors</h3>
              <p className="text-gray-300">All tutors are verified through transcript checks to ensure quality.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Video Content</h3>
              <p className="text-gray-300">Access engaging educational content created by top tutors.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Revenue Sharing</h3>
              <p className="text-gray-300">Tutors earn 90% of ad revenue from their content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join America's fastest-growing tutoring platform.</p>
          <Link
            href="/tutor-signup"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}

