import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {

    const iconLinkStyle = {
        color: 'gray-800', 
        textDecoration: 'none',
        margin: '0 10px', 
      };

  return (
    <>
      <footer className='h-48 bg-gray-50 flex flex-wrap justify-center items-center mt-auto'>
        <div className='flex flex-row'>
        <a
            href="https://www.github.com/rclouser24"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaGithub size={30} />
          </a>  
          <a
            href="https://stackoverflow.com/users/6111346/rclouser24"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaStackOverflow size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-clouser"
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
