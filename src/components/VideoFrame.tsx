import React from 'react';

interface VideoFrameProps {
  title: string;
  description: string;
  videoUrl?: string;
  videoPlaceholder?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ title, description, videoUrl, videoPlaceholder }) => {
  // Function to extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = videoUrl ? getYouTubeVideoId(videoUrl) : null;

  return (
    <div className="relative group">
      {/* Chrome-like gradient border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
      
      {/* Main container with glass effect */}
      <div className="relative flex flex-col bg-gray-900/90 backdrop-blur-xl rounded-lg p-6 shadow-2xl">
        {/* Video container with chrome gradient overlay */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 pointer-events-none z-10"></div>
          <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg pointer-events-none z-10"></div>
          
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0`}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Video Coming Soon</span>
            </div>
          )}
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