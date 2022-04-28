import '../../css/App.css';
import '../../css/part.css';
import React from 'react'
import MainImage from '../../images/Battle_Title.jpg';
import SecImage from '../../images/patate.png';
import Specification from '../../images/Projet_S2.pdf';
import FirstPresentation from '../../images/Projet_S2.pdf';
import SecondPresentation from '../../images/Second_presentation.pdf';
import { Link } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App-body">
        <div className="App-body-content">
          <div className="App-body-content-one">
            <div className="part-body-title">
              Battle Fields: Return of the Potatoes
            </div>
            <div className="part-body-image">
              <img src={MainImage} alt="" className="part-body-image"/>
            </div>
            <div className="part-body-subtitle">
              One of the first two players Tower Defense in VR !
            </div>
            <div className="part-body-button">
              <button>
                <a href={Specification} rel="noopener"> Play / Download </a>
              </button>
            </div>

          </div>
          <svg className="App-body-content-svg" id="visual" viewBox="0 80 900 230" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <path fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,181.3C1120,192,1280,256,1360,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#3B4252" stroke-linecap="round"></path>
          </svg>
          <div className="App-body-content-two">
            <div className="part-body-title">
              Presentation :
            </div>
            <div className="part-body-subtitle">
              The game is a Tower Defense: potatoes will spawn in different places and will try to reach
              the player’s base. The players must prevent this and hold as long as possible.
            </div>
            <div className="part-body-image">
              <img src={SecImage} alt="" className="part-body-image"/>
            </div>
            <div className="part-body-subtitle">
              Both players have to communicate together to survive through the endless waves.
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#3B4252" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,250.7C640,256,800,224,960,224C1120,224,1280,256,1360,272L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div className="App-body-content-three">
            <div className="part-body-title">
              Project :
            </div>
            <div className="part-body-button">
              <button>
                <a href={Specification} rel="noopener"> Project Specification </a>
              </button>
              <button>
                <a href={FirstPresentation} rel="noopener"> First presentation </a>
              </button>
              <button>
                <a href={SecondPresentation} rel="noopener"> Second presentation </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
