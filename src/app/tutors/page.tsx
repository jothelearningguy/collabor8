export default function TutorsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option value="">All Subjects</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="physics">Physics</option>
                    <option value="math">Mathematics</option>
                    <option value="biology">Biology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    University
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option value="">All Universities</option>
                    <option value="unc">UNC Chapel Hill</option>
                    <option value="duke">Duke University</option>
                    <option value="ncsu">NC State University</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option value="">Any Rating</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-1/2 border border-gray-300 rounded-md p-2"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-1/2 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tutors Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Available Tutors</h1>
                <select className="border border-gray-300 rounded-md p-2">
                  <option value="recommended">Recommended</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample Tutor Cards */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {/* Tutor video preview or image */}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Sample Tutor {i}</h3>
                          <p className="text-sm text-gray-600">Chemistry, Physics</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        UNC Chapel Hill
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">$30/hour</span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-3 py-1 border rounded-md">Previous</button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
                  <button className="px-3 py-1 border rounded-md">2</button>
                  <button className="px-3 py-1 border rounded-md">3</button>
                  <button className="px-3 py-1 border rounded-md">Next</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 