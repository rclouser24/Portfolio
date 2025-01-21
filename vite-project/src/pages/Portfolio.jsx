import Card from "../components/Card"
import Jumper from '../assets/Jumper.png'
import StarWars from '../assets/StarWars.png'
import Quiz from '../assets/Quiz.png'


export default function Portfolio(){

    const cardData = [
        {
            title: 'Jumper Game ',
            date: 'November 2024',
            description: 'Built a Mario-like browser game using HTML/CSS and JS',
            image: Jumper,
            projectLink: 'https://github.com/rvrutan/jumper'
        },
        {
            title: 'Star Wars Dictionary',
            date: 'December 2024',
            description: 'A dictionary of Star Wars characters, ships, and planets from the SWAPI (Star Wars API).',
            image: 'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200',
            projectLink: 'https://github.com/rclouser24/StarWarsDictionary'
        },
        {
            title: 'Category Quiz',
            date: 'January 2024',
            description: 'A application for testing yourself on different topics in Biology, Chemistry, and Physics.',
            image: 'https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8',
            projectLink: 'https://github.com/KramerJosh/Dictionary'
        },
        {
            title: 'Employee Tracker',
            date: 'November 2024',
            description: 'A employee tracker that allows users to update the title, name, and payroll of employees using Postgres.',
            image: Quiz,
            projectLink: 'https://github.com/rclouser24/Employee_Tracker_Postgres'
        },
        {
            title: 'Colgate Brushing ',
            date: 'Febuary 2023',
            description: 'Implemented gamification to build better brushing habits for users.',
            image: 'https://static.wixstatic.com/media/a443bf_f21270db0dd4491b93c54ab0d520eb60~mv2.png/v1/fill/w_630,h_719,al_c,lg_1,q_90,enc_avif,quality_auto/Frame%202170-2.png',
            projectLink: 'https://www.ryanjclouser.com/copy-of-colgate'
        },
        {
            title: 'Weather Tracker',
            date: 'December 2024',
            description: 'A weather tracker app that lets users see the forecast for any location, using openweather api.',
            image: 'https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
            projectLink: 'https://github.com/rclouser24/Weather_API'
        },
        {
            title: 'Pokemon Game',
            date: 'November 2024',
            description: 'A browser game letting users select any Pokemon from the Pokemon api and battle a randomly selected CPU controlled Pokemon (STILL IN PROGRESS).',
            image: 'https://images.pluto.tv/channels/6675c7868768aa0008d7f1c7/featuredImage.jpg?auto=&q=70&fit=fill&fill=blur&ixlib=react-9.1.5',
            projectLink: 'https://github.com/rclouser24/Weather_API'
        },
        {
            title: 'Brush Pressure Sensor',
            date: 'June 2023',
            description: 'Developed a new feature to detect the brushing pressure of the user.',
            image: 'https://static.wixstatic.com/media/a443bf_bdf69bdf990d460e89318d36be8b4065~mv2.jpg/v1/fill/w_720,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/colgate-pulse-series-1-main-banner-new_e.jpg',
            projectLink: 'https://www.ryanjclouser.com/copy-of-allocations'
        },
        {
            title: 'Allocations SPV Platform',
            date: 'July 2022',
            description: 'Developed a dashboard for investors to track deal flow and view returns on SPV investments.',
            image: 'https://static.wixstatic.com/media/a443bf_c264b4571b8b4065b514b4eb5aa7a7eb~mv2.png/v1/fill/w_894,h_610,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Exchange%20Landing%20Page%2000.png',
            projectLink: 'https://www.ryanjclouser.com/project-06'
        },
        {
            title: 'CreativeX',
            date: 'April 2022',
            description: 'Designed a new filter system for the CreativeX platform allowing brands to view returns on creative ad assets.',
            image: 'https://static.wixstatic.com/media/a443bf_e18cc23b95b946a78b80498ae9d437e6~mv2.png/v1/fill/w_882,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Neutral%20State.png',
            projectLink: 'https://www.ryanjclouser.com/creativex'
        },
        
    ]

    return(
        <div className=" bg-gray-100">
            <div className="portfolio-container min-h-screen flex  justify-center p-8">
                <div className="flex flex-wrap">
                    {cardData.map((card, index) => {
                       return <Card
                            key = {index}
                            title = {card.title}
                            date = {card.date}
                            description = {card.description}
                            image = {card.image}
                            projectLink={card.projectLink}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}