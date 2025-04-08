'use client';

import React from 'react';
import ContactForm from '../components/ContactForm';

export default function TutorSignup() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Join Our Team of Expert Tutors
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Help students succeed while earning on your own schedule
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Apply to Become a Tutor
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 