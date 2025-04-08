'use client'

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 rounded-b-[3rem] shadow-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-bounce">
              LIKE UBER EATS MEETS TUTORING
            </h1>
            <div className="text-2xl mb-8 h-20">
              <div className="typing-container">
                <span className="typing-text">Get paid to explain things once... 💡</span>
                <span className="typing-text">Help hundreds while you sleep... 💪</span>
                <span className="typing-text">Build your tutoring brand... 🌟</span>
                <span className="typing-text">90% revenue share on every view... 💰</span>
                <span className="typing-text">Join UNC's top tutors... 🎓</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <p className="text-xl">
                "I made $2,400 last month from videos I recorded once, helping hundreds of students while I sleep" 
                <br/>
                <span className="text-lg opacity-75">- John D., Chemistry Tutor at UNC</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/tutor-signup"
                className="bubbly-button bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition text-lg shadow-lg"
              >
                Start Earning Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Request Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Most Requested Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🧪</div>
                <h3 className="font-bold mb-2">Chemistry</h3>
                <p className="text-sm text-gray-600">238 requests this week</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🔢</div>
                <h3 className="font-bold mb-2">Calculus</h3>
                <p className="text-sm text-gray-600">195 requests this week</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">Physics</h3>
                <p className="text-sm text-gray-600">167 requests this week</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🧬</div>
                <h3 className="font-bold mb-2">Biology</h3>
                <p className="text-sm text-gray-600">152 requests this week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Metaphor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🍔</span> Food Delivery
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-green-500 text-xl">✓</span>
                  Cook amazing food once
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-green-500 text-xl">✓</span>
                  Serve hundreds without extra work
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-green-500 text-xl">✓</span>
                  Earn while orders auto-deliver
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-green-500 text-xl">✓</span>
                  Build a loyal customer base
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-green-500 text-xl">✓</span>
                  Focus on what you do best
                </li>
              </ul>
            </div>
            <div className="space-y-6 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span> Knowledge Sharing
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-blue-500 text-xl">✓</span>
                  Create brilliant explanations once
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-blue-500 text-xl">✓</span>
                  Help thousands while you sleep
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-blue-500 text-xl">✓</span>
                  Earn from automatic views
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-blue-500 text-xl">✓</span>
                  Build your student following
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/50 rounded-xl">
                  <span className="text-blue-500 text-xl">✓</span>
                  Focus on pure teaching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Request Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help Understanding Something?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Tell us what you&apos;re struggling with. We&apos;ll match you with the perfect explanation.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300" defaultValue="">
                  <option value="" disabled>Select Subject Area</option>
                  <optgroup label="Sciences">
                    <option value="chemistry">Chemistry</option>
                    <option value="physics">Physics</option>
                    <option value="biology">Biology</option>
                    <option value="computer_science">Computer Science</option>
                  </optgroup>
                  <optgroup label="Mathematics">
                    <option value="calculus">Calculus</option>
                    <option value="algebra">Algebra</option>
                    <option value="statistics">Statistics</option>
                    <option value="linear_algebra">Linear Algebra</option>
                  </optgroup>
                  <optgroup label="Business">
                    <option value="economics">Economics</option>
                    <option value="accounting">Accounting</option>
                    <option value="finance">Finance</option>
                  </optgroup>
                </select>
                <select className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300" defaultValue="">
                  <option value="" disabled>Select Course Level</option>
                  <option value="intro">Introductory (100-level)</option>
                  <option value="intermediate">Intermediate (200-level)</option>
                  <option value="advanced">Advanced (300-level)</option>
                  <option value="graduate">Graduate Level</option>
                </select>
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="Describe the specific topic or concept you need help with..."
                  className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email"
                  placeholder="Your email for notifications"
                  className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <select className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300" defaultValue="asap">
                  <option value="asap">Need it ASAP</option>
                  <option value="week">Within a week</option>
                  <option value="month">Within a month</option>
                  <option value="anytime">Anytime is fine</option>
                </select>
              </div>
              <button className="bubbly-button bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg w-full md:w-auto">
                Request Explanation 🎯
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Top Tutors Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">90% Revenue Share</h3>
              <p className="text-gray-600">
                Earn more than double what YouTube offers. Get paid every time someone watches your content.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold mb-4">We Give You the Tools</h3>
              <p className="text-gray-600">
                No need to be a content creator. Our platform provides everything you need to make engaging videos.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Targeted Audience</h3>
              <p className="text-gray-600">
                Connect directly with students who need your expertise. No more hunting for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Typing Effect */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Tutors Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="typing-review">
                <p className="review-text">&quot;Made $1,200 in my first month just from my Organic Chemistry videos!&quot;</p>
                <p className="review-text">&quot;Students love my calculus explanations - got 5,000+ views already!&quot;</p>
                <p className="review-text">&quot;Finally, I can help more students without scheduling conflicts!&quot;</p>
              </div>
              <p className="font-semibold mt-4">Sarah K. - Chemistry</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="typing-review">
                <p className="review-text">&quot;The visualization tools make complex topics so much easier to explain.&quot;</p>
                <p className="review-text">&quot;My passive income covers my rent now - amazing!&quot;</p>
                <p className="review-text">&quot;Best decision I made - helping more students while making more money.&quot;</p>
              </div>
              <p className="font-semibold mt-4">Mike R. - Physics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-t-[3rem] shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Impact?</h2>
          <p className="text-xl mb-8">We&apos;re recruiting UNC&apos;s top tutors this week only.</p>
          <a 
            href="/tutor-signup"
            className="bubbly-button inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-lg shadow-xl"
          >
            Apply Now →
          </a>
          <p className="mt-4 text-sm opacity-75">Transcript required to verify expertise</p>
        </div>
      </section>
    </main>
  )
}

