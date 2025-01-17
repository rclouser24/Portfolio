import Card from "../components/Card"

export default function Portfolio(){

    const cardData = [
        {
            title: 'Colgate Brushing ',
            date: 'Febuary 2023',
            description: 'Implemented gamification to build better brushing habits for users.',
            image: 'https://static.wixstatic.com/media/a443bf_f21270db0dd4491b93c54ab0d520eb60~mv2.png/v1/fill/w_630,h_719,al_c,lg_1,q_90,enc_avif,quality_auto/Frame%202170-2.png'
        },
        {
            title: 'Brush Pressure Sensor',
            date: 'June 2023',
            description: 'Developed a new feature to detect the brushing pressure of the user.',
            image: 'https://static.wixstatic.com/media/a443bf_bdf69bdf990d460e89318d36be8b4065~mv2.jpg/v1/fill/w_720,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/colgate-pulse-series-1-main-banner-new_e.jpg'
        },
        {
            title: 'Allocations SPV Platform',
            date: 'July 2022',
            description: 'Developed a dashboard for investors to track deal flow and view returns on SPV investments.',
            image: 'https://static.wixstatic.com/media/a443bf_c264b4571b8b4065b514b4eb5aa7a7eb~mv2.png/v1/fill/w_894,h_610,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Exchange%20Landing%20Page%2000.png'
        },
        {
            title: 'CreativeX',
            date: 'April 2022',
            description: 'Designed a new filter system for the CreativeX platform allowing brands to view returns on creative ad assets.',
            image: 'https://static.wixstatic.com/media/a443bf_e18cc23b95b946a78b80498ae9d437e6~mv2.png/v1/fill/w_882,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Neutral%20State.png'
        },
        
    ]

    return(
        <div className="portfolio-container">
            <h1>My Word</h1>
            <div className="card-container">
                {cardData.map((card, index) => {
                   return <Card 
                        key = {index}
                        title = {card.title}
                        date = {card.date}
                        description = {card.description} 
                        image = {card.image}
                    />
                })}
            </div>
        </div>
    )
}