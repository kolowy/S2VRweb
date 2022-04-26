import React, { Component } from 'react';
import Card from '../component/creditCard';
import '../../css/credit.css';
// logo
import react from '../../images/logo.svg';
import nord from '../../images/nord.svg';
import unity from '../../images/unity.svg';
import blender from '../../images/blender.png';
import vsc from '../../images/vsc.svg';
import rider from '../../images/Rider.svg';
import SteamVR from '../../images/SteamVR.webp';
import GitHub from '../../images/GitHub.png';



class Credit extends Component {
    render() {
        return (
            <div className="App-body">
                <div className="App-credits">
                    <div className="App-credits-by2">
                        <Card
                            logo={unity}
                            website="https://unity.com/"
                            name="Unity"
                            tag="App-credit-logo"
                        />
                        <Card
                            logo={blender}
                            website="https://www.blender.org/"
                            name="Blender"
                            tag="App-credit-logo"
                        />
                        
                    </div>
                    <div className="App-credits-by2">
                        <Card
                            logo={GitHub}
                            website="https://github.com/"
                            name="GitHub"
                            tag="App-credit-logo"
                        />
                        <Card
                            logo={SteamVR}
                            website="https://store.steampowered.com/steamvr"
                            name="SteamVR"
                            tag="App-credit-logo"
                        />
                    </div>
                    <div className="App-credits-by2">
                        <Card
                            logo={react}
                            website="https://reactjs.org/"
                            name="React"
                            tag="App-credit-logo react"
                        />
                        <Card
                            logo={nord}
                            website="https://www.nordtheme.com/"
                            name="Nord Theme"
                            tag="App-credit-logo"
                        />
                    </div>
                    <div className="App-credits-by2">
                        <Card
                            logo={rider}
                            website="https://www.jetbrains.com/"
                            name="Rider"
                            tag="App-credit-logo"
                        />
                        <Card
                            logo={vsc}
                            website="https://code.visualstudio.com/"
                            name="Visual Studio Code"
                            tag="App-credit-logo"
                        />
                    </div>
                </div> 
            </div>
        );
    }
}

export default Credit;