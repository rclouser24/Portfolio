import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

    const iconLinkStyle = {
        color: 'black', // Default icon color
        textDecoration: 'none',
        margin: '0 10px', // Spacing between icons
        transition: 'color 0.3s', // Smooth color transition
      };

  return (
    <>
      <footer>
        <div>
        <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaGithub size={30} />
          </a>  
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer
