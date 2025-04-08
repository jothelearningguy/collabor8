'use client';

import React from 'react';
import ContactForm from '../components/ContactForm';

export default function TutorSignup() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team of Expert Tutors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help students succeed while earning on your own schedule. Join UNC's fastest-growing tutoring platform.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Join Collabor8?
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">90% Revenue Share</h3>
                  <p className="mt-1 text-gray-600">Earn more than double what YouTube offers for your educational content.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Professional Tools</h3>
                  <p className="mt-1 text-gray-600">Access our suite of tools to create engaging educational videos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Verified Status</h3>
                  <p className="mt-1 text-gray-600">Stand out with our transcript verification badge.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Apply to Become a Tutor
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 