'use client';

import React, { useState } from 'react';

export default function TutorSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'tutor_signup',
          recipientEmail: 'jo@heallyhub.com',
          ...formObject
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Become a tutr</h1>
          <p className="text-xl text-gray-300 mb-8 text-center">
            Help students succeed while earning on your own schedule. Join America's fastest-growing tutoring platform.
          </p>

          {/* Typewriter Animation Section */}
          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <div className="text-2xl mb-8 h-20 overflow-hidden">
              <div className="typing-container animate-typing">
                <span className="typing-text block mb-4">"Made $2,400 last month from videos I recorded once..." 💰</span>
                <span className="typing-text block mb-4">"Students love my calculus explanations - 5,000+ views!" 📚</span>
                <span className="typing-text block mb-4">"Finally helping students while I sleep..." 💫</span>
                <span className="typing-text block">"Best platform for sharing my knowledge..." ⭐</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Join tutr?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">90% Revenue Share</h3>
                  <p className="text-gray-300">Earn more than double what YouTube offers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Flexible Schedule</h3>
                  <p className="text-gray-300">Create content on your own time</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Professional Tools</h3>
                  <p className="text-gray-300">Access to our video creation platform</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold">Verified Status</h3>
                  <p className="text-gray-300">Stand out with our transcript verification badge</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      ✓ Verified Tutor
                    </span>
                    <span className="text-gray-400 text-sm">Shows on your profile</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {submitSuccess ? (
            <div className="mt-8 bg-gray-800 p-8 rounded-lg text-center">
              <div className="text-green-500 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-300">Thank you for applying to be a tutor. We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    name="firstName"
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    name="lastName"
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  name="email"
                  type="email" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">University</label>
                <input 
                  name="university"
                  type="text" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  placeholder="Enter your university"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject Areas</label>
                <textarea 
                  name="subjects"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32 text-white"
                  placeholder="List the subjects you're qualified to tutor"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Why do you want to join tutr?</label>
                <textarea 
                  name="motivation"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32 text-white"
                  placeholder="Share your tutoring experience and why you'd like to join tutr..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg transition ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 