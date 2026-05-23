import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* Updated with Fatemeh's professional profiles */}
        <a href="https://github.com/fatemekh78" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/fatemeh-kheirkhah-7b24a5212/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;