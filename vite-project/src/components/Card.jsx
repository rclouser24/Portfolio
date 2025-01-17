export default function Card( {title, date, description, image, projectLink} ){
    return(
        <div className="card-container">
            <img src={image} alt={title} className="card-img"/>
            <div className="text-container">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-date">{date}</h3>
                <p className="card-description">{description}</p>
                <button className="project-link">{projectLink}</button>
            </div>
        </div>
    );
}