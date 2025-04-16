'use client';

import { useState } from 'react';

const tutors = [
  {
    name: "Alexander Chen",
    university: "Stanford University",
    subjects: "Computer Science, Data Structures",
    rating: 4.9,
    studentsHelped: 523
  },
  {
    name: "Rachel Martinez",
    university: "MIT",
    subjects: "Calculus, Linear Algebra",
    rating: 4.9,
    studentsHelped: 487
  },
  {
    name: "Marcus Thompson",
    university: "UC Berkeley",
    subjects: "Physics, Quantum Mechanics",
    rating: 4.9,
    studentsHelped: 512
  },
  {
    name: "Sophia Patel",
    university: "Harvard University",
    subjects: "Chemistry, Organic Chemistry",
    rating: 4.9,
    studentsHelped: 498
  },
  {
    name: "Jordan Williams",
    university: "UNC Chapel Hill",
    subjects: "Biology, Genetics",
    rating: 4.9,
    studentsHelped: 534
  },
  {
    name: "Emma Rodriguez",
    university: "Georgia Tech",
    subjects: "Economics, Statistics",
    rating: 4.9,
    studentsHelped: 476
  }
];

export default function TutorsPage() {
  const [showRequestForm, setShowRequestForm] = useState(false);
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
          type: 'tutor_request',
          recipientEmail: 'jo@heallyhub.com',
          ...formObject
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowRequestForm(false);
          setSubmitSuccess(false);
        }, 3000);
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
        <h1 className="text-4xl font-bold mb-8 text-center">Find Your Perfect Tutor</h1>
        
        <div className="max-w-4xl mx-auto">
          {!showRequestForm ? (
            <>
              <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                    <option value="">Select Subject</option>
                    <option value="math">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="business">Business</option>
                    <option value="humanities">Humanities</option>
                  </select>
                  
                  <select className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                    <option value="">Select University</option>
                    <option value="harvard">Harvard University</option>
                    <option value="stanford">Stanford University</option>
                    <option value="mit">MIT</option>
                    <option value="berkeley">UC Berkeley</option>
                  </select>
                  
                  <button 
                    onClick={() => setShowRequestForm(true)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                  >
                    Request a Tutor
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                        <div>
                          <h3 className="font-bold">{tutor.name}</h3>
                          <p className="text-gray-400">{tutor.university}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-300">Subjects: {tutor.subjects}</p>
                        <p className="text-gray-300">Rating: ⭐⭐⭐⭐⭐ ({tutor.rating})</p>
                        <p className="text-gray-300">Students Helped: {tutor.studentsHelped}+</p>
                      </div>
                      <button 
                        onClick={() => setShowRequestForm(true)}
                        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                      >
                        Request This Tutor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Request a Tutor</h2>
                <button 
                  onClick={() => setShowRequestForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ← Back to Search
                </button>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-gray-300">We'll be in touch with you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        name="firstName"
                        type="text" 
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        name="lastName"
                        type="text" 
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">University Email</label>
                    <input 
                      name="email"
                      type="email" 
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      placeholder="your.email@university.edu"
                      required 
                    />
                    <p className="mt-1 text-sm text-gray-400">Please use your university email address</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select 
                      name="subject"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white" 
                      required
                    >
                      <option value="">Select a Subject</option>
                      <option value="calculus">Calculus</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="computer_science">Computer Science</option>
                      <option value="economics">Economics</option>
                      <option value="statistics">Statistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Specific Topic/Concept</label>
                    <input 
                      name="topic"
                      type="text" 
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      placeholder="e.g., Derivatives, Thermodynamics, etc."
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Details</label>
                    <textarea 
                      name="details"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
                      placeholder="Describe what you need help with and any specific requirements..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg transition ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 