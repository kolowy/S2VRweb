import React, { Component } from 'react';
import Card from '../component/card';

class Author extends Component {
    render() {
        return (
            <div className="App-body">
                <div className="App-body-content">
                    <h1>About Us</h1>
                    {/* make a cool author card */}
                    <div className="App-body-content-author">
                        <Card
                            name={"Auguste Charpentier"}
                            title={"Project leader, programmer, tester"}
                            description={"Manages the overall state of the Unity project and its integration with VR software. Has the hardware capable of running VR."}
                            login={"auguste.charpentier"}
                            email={"auguste.charpentier@epita.fr"}
                            img={"https://photos.cri.epita.fr/auguste.charpentier"}
                        />
                        <Card
                            name={"David Goncalves"}
                            title={"Artistic direction, programmer"}
                            description={"In charge of the artistic direction, will provide design ideas and artworks. Also will contribute to the code."}
                            login={"david.goncalves"}
                            email={"david.goncalves@epita.fr"}
                            img={"https://photos.cri.epita.fr/david.goncalves"}
                        />
                        <Card
                            name={"Julie Fiadino"}
                            title={"3D modeler, programmer"}
                            description={"Has the most experience with 3D modeling and Unity tools like animations, shaders and other various stuff."}
                            login={"julie.fiadino"}
                            email={"julie.fiadino@epita.fr"}
                            img={"https://photos.cri.epita.fr/julie.fiadino"}
                        />
                        <Card
                            name={"Paul Dufour"}
                            title={"Web developer, Programmer"}
                            description={"Will manage the website of the project and contribute to the code."}
                            login={"paul.dufour"}
                            email={"paul.dufour@epita.fr"}
                            img={"https://photos.cri.epita.fr/paul.dufour"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Author;