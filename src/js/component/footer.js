import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CodeBlock , nord} from "react-code-blocks";


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <svg id="visual" viewBox="0 350 900 250" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path d="M0 467L18.8 448.7C37.7 430.3 75.3 393.7 112.8 383C150.3 372.3 187.7 387.7 225.2 402.3C262.7 417 300.3 431 337.8 440.5C375.3 450 412.7 455 450.2 442.2C487.7 429.3 525.3 398.7 562.8 388.3C600.3 378 637.7 388 675.2 395.8C712.7 403.7 750.3 409.3 787.8 402.5C825.3 395.7 862.7 376.3 881.3 366.7L900 357L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#4c566a"></path>
                    <path d="M0 445L18.8 453.2C37.7 461.3 75.3 477.7 112.8 479.2C150.3 480.7 187.7 467.3 225.2 449.7C262.7 432 300.3 410 337.8 417C375.3 424 412.7 460 450.2 461.8C487.7 463.7 525.3 431.3 562.8 418.3C600.3 405.3 637.7 411.7 675.2 419C712.7 426.3 750.3 434.7 787.8 442.8C825.3 451 862.7 459 881.3 463L900 467L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#444d5f"></path>
                    <path d="M0 496L18.8 494.7C37.7 493.3 75.3 490.7 112.8 491.2C150.3 491.7 187.7 495.3 225.2 488.5C262.7 481.7 300.3 464.3 337.8 466.2C375.3 468 412.7 489 450.2 496.3C487.7 503.7 525.3 497.3 562.8 490.3C600.3 483.3 637.7 475.7 675.2 468.7C712.7 461.7 750.3 455.3 787.8 465C825.3 474.7 862.7 500.3 881.3 513.2L900 526L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#3d4555"></path>
                    <path d="M0 480L18.8 479.3C37.7 478.7 75.3 477.3 112.8 488C150.3 498.7 187.7 521.3 225.2 525C262.7 528.7 300.3 513.3 337.8 513.5C375.3 513.7 412.7 529.3 450.2 535C487.7 540.7 525.3 536.3 562.8 530C600.3 523.7 637.7 515.3 675.2 515.8C712.7 516.3 750.3 525.7 787.8 525.3C825.3 525 862.7 515 881.3 510L900 505L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#353c4a"></path>
                    <path d="M0 571L18.8 572.2C37.7 573.3 75.3 575.7 112.8 577C150.3 578.3 187.7 578.7 225.2 571.8C262.7 565 300.3 551 337.8 541.7C375.3 532.3 412.7 527.7 450.2 534.3C487.7 541 525.3 559 562.8 566.8C600.3 574.7 637.7 572.3 675.2 569.3C712.7 566.3 750.3 562.7 787.8 558.2C825.3 553.7 862.7 548.3 881.3 545.7L900 543L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#2e3440"></path>
                </svg>

                <div className='App-footer-copyright'>
                    <div className='App-footer-name'>
                        <p>Made with <b>&hearts;</b> by hand</p>
                        <div className="codeBlock" >
                            < CodeBlock
                                language="c" 
                                text={`public static void Footer () {
    Author author = new Author();
    author.setName("Paul Dufour");
    author.setCopyright("© 2022");
}`}
                                theme={nord}
                                codeBlock
                            />
                        </div>
                    </div>
                            <div className='App-footer-menu'>
                                    <Link to="/"><i class="fas fa-home"></i> Home</Link>
                                    <Link to="/Author"><i class="fas fa-user"></i> About Us</Link>
                                    <Link to="/credit"><i class="fas fa-address-book"></i> Contacts</Link>
                            
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;