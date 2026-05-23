import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AvatarImg from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* TO DO: Replace the image file in your assets or use a direct link to her photo */}
          <img src={AvatarImg} alt="Fatemeh Kheirkhah" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/fatemekh78" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fatemeh-kheirkhah-7b24a5212/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Fatemeh Kheirkhah</h1>
          <p>Full-Stack Developer & Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/fatemekh78" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fatemeh-kheirkhah-7b24a5212/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;