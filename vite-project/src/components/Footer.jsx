import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

    const iconLinkStyle = {
        color: 'gray-800', 
        textDecoration: 'none',
        margin: '0 10px', 
      };

  return (
    <>
      <footer className='h-48 bg-slate-100 flex flex-wrap justify-center items-center mt-auto'>
        <div className='flex flex-row'>
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
