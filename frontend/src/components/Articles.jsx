import React from 'react';
import MenuH from './MenuH';
import Buttons from './Buttons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../style/style.css';

function Homepage() {
  return (
    <div>
      <MenuH />
      <h1>MEDIA APPERANCES</h1>

      <div className="container">
        <div className="left-side">
          <div className="text">
            <h3>Science Magazine</h3>
            <h3>11. 12. 2018</h3>
            <p>Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In his new book, The formalula: The Universal Laws of Success, Albert-László Barabási translates almost a decade of scholarly research on the science of success into a lively...</p>
          </div>
          <Buttons />
        </div>

        <div className="middle">
          <div className="text">
            <h3>Nature</h3>
            <h3>27. 11. 2018</h3>
            <p>Originally printed by the National Acedemies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London....</p>
          </div>
          <Buttons />
        </div>

        <div className="right-side">
          <div className="text">
            <div className="icon-con">
              <PlayArrowIcon className="icon" />
            </div>
            <h3>Lecture at NYU</h3>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  )
}

export default Homepage