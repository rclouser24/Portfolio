export default function Card({ title, date, description, image, projectLink }) {
    return (
      <div className="relative max-w-xs h-[550px] overflow-hidden rounded-2xl shadow-lg group bg-white m-4">
        <div className="h-1/2 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-4 h-1/2 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <h3 className="text-sm font-medium text-gray-500">{date}</h3>
          <p className="text-sm text-gray-700 flex-grow overflow-hidden line-clamp-3 mb-4">
            {description}
          </p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }