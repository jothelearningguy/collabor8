import React from 'react';

interface VideoFrameProps {
  title: string;
  description: string;
  videoPlaceholder?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ title, description, videoPlaceholder }) => {
  return (
    <div className="relative group">
      {/* Chrome-like gradient border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
      
      {/* Main container with glass effect */}
      <div className="relative flex flex-col bg-gray-900/90 backdrop-blur-xl rounded-lg p-6 shadow-2xl">
        {/* Video placeholder with chrome gradient overlay */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
          <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg"></div>
          {videoPlaceholder ? (
            <img 
              src={videoPlaceholder} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Video Coming Soon</span>
            </div>
          )}
          
          {/* Play button with chrome effect */}
          <button className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-full blur-md"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoFrame; 