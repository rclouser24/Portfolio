export default function About() {
  return (
    
      <div className="min-h-screen bg-offWhite">
          <div className="p-12 flex justify-center flex-wrap flex-grow">
            <div className="">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E03AQE-xGeAUchWmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664219679155?e=1742428800&v=beta&t=kHsWwoWTfM960_861GSl3Tn8Yj5poD-QEtJlZyC1VJ8"
                  className="w-full h-auto object-contain rounded-xl"
                  alt="profile-pic"
                />
            </div>
            <div className="ml-8">
              <h2 className="text-4xl text-gray-700 font-medium">Ryan Clouser</h2>
              <div className="flex flex-row mt-4 mb-4">
                  <h4 className="text-xl text-gray-700">UX Designer @ </h4>
                  <h4 className="text-xl text-red-600 ml-1">Colgate</h4>
              </div>
              <p className="flex flex-wrap max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-gray-700">
              Product Designer with experience in creating user-centric digital experiences that drive engagement and growth. With expertise in gamification,
              usability testing, and iterative design I have been able to build cohesive design solutions across the Fintech, Health, SaaS and Fitness industries.
              </p>
            </div>
          </div>
      </div>
  );
}
