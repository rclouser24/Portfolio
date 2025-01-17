function Footer() {
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
