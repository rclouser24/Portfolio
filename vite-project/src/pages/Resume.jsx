import RyanClouserResume from '../assets/RyanClouserResume.png'

export default function Resume () {
    return(
        <div className="resume-container">  
            <h2>My Resume</h2>
            <iframe src= {RyanClouserResume} title="Resume" width="100%" height="600px" ></iframe>
        </div>
    );
}