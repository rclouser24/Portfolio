import RyanClouserResume from '../assets/RyanClouserResume.png';

export default function Resume() {
  return (
    <div className="resume-container flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Resume</h2>
    
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
          src={RyanClouserResume}
          alt="Ryan Clouser's Resume"
          className="w-full h-auto object-contain"
        />
      </div>
      <a
        href={RyanClouserResume}
        download="RyanClouserResume.png"
        className="mt-8 inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Download Resume
      </a>
    </div>
  );
}