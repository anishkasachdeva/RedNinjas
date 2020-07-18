import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// import axios from 'axios';
// import Board from "./threeBoard.js";/
// import nineBoard from "./nineBoard.js";

import ThreeBoard from "./threeBoard.js";
import NineBoard from "./nineBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
<<<<<<< HEAD

import configStyles from "../static/css/Config-mallika.module.css";

=======
>>>>>>> 0b132584... Changed to component implementation
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";

export default class ThreeConfiguration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //   showWinComponent : false,
        //   showConfigurationComponent : false,
        //   showGameConfiguration : false
      }
    }
     
<<<<<<< HEAD
//     render() {
//       return (
        
//           <div>


//         <Button variant="default" onClick={(e) => this.props.handleStartHuman_Three(e)}>
//           Beginner_Human
//         </Button>


//         <Button variant="default" onClick={(e) => this.props.handleStartAgent_Three(e)}>
//           Beginner_Agent
//         </Button>

//         <ButtonGroup aria-label="Basic example">
//           <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 1)}>
//             Depth 1
//           </Button>
//           <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 2)}>
//             Depth 2
//           </Button>
//           <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 3)}>
//             Depth 3
//           </Button>
//           <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 4)}>
//             Depth 4
//           </Button>
//           <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, -1)}>
//             Ultimate
//           </Button>
//         </ButtonGroup>

//         <div style={{}}>
//           <Button
//             variant="info"
//             size="lg"
//             style={{}}
//             onClick={(e) => this.props.update_Three("Go To Game")}
//           >
//               Go To Game
//             {/* {this.state.startGameButton} */}
//           </Button>{" "}
//         </div>

//               {/* <p>Hello</p> */}
//           </div>
//       )}
// }



render() {
  return (
    <div className={configStyles.wrapper}>
      <Container className={configStyles.mainDiv}>
        <Container
          className={configStyles.containerBody}
          style={{ display: "flex" }}
        >
          <Container style={{ marginTop: "auto", marginBottom: "auto", padding:"3% 0"}}>
            <h1 className={configStyles.heading}>
              Select your game configuration
            </h1>
            <Container className={configStyles.startWrapper}>
              <Row className="mb-5">
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <h3 className={configStyles.startContent}>
                    Game Beginner :
                  </h3>
                </Col>
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <div
                    style={{
                      textAlign: "center",
                      margin: "0 10%",
                      display: "inline-block",
                    }}
                  >
                    <i
                      className={
                        "fas fa-robot mr-2 " + configStyles.iconStyles
                      }
                      onClick = {(e) => this.props.handleStartAgent_Three(e)}
                    ></i>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      margin: "0 10%",
                      display: "inline-block",
                    }}
                  >
                    <i
                      className={
                        "fas fa-user-astronaut mr-2 " +
                        configStyles.iconStyles
                      }
                      onClick = {(e) => this.props.handleStartHuman_Three(e)}
                    ></i>
                  </div>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <h3 className={configStyles.startContent}>Depth Type</h3>
                </Col>
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 1)}
                  >
                    1
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 2)}
                  >
                    2
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 3)}
                  >
                    3
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 4)}
                  >
                    4
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, -1)}
                  >
                    Ultimate
                  </Button>
                </Col>
              </Row>
              <div>
                {/* {this.state.type === 3 && ( */}
                  <>
                    {this.props.depth !== " " &&
                    this.props.gameBeginner != " " ? (
                      <Button size="lg" variant="light" onClick={(e) => this.props.update_Three("Go To Game")}>
                        Let's Play!
                      </Button>
                    ) : (
                      <Button size="lg" variant="light" disabled>
                        Let's Play!
                      </Button>
                    )}
                  </>
              </div>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
}

const iconStyles = {
color: "#FF7885",
};
=======
    render() {
      return (
          <div>


        <Button variant="default" onClick={(e) => this.props.handleStartHuman_Three(e)}>
          Beginner_Human
        </Button>


        <Button variant="default" onClick={(e) => this.props.handleStartAgent_Three(e)}>
          Beginner_Agent
        </Button>

        <ButtonGroup aria-label="Basic example">
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 1)}>
            Depth 1
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 2)}>
            Depth 2
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 3)}>
            Depth 3
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 4)}>
            Depth 4
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, -1)}>
            Ultimate
          </Button>
        </ButtonGroup>

        <div style={{}}>
          <Button
            variant="info"
            size="lg"
            style={{}}
            onClick={(e) => this.props.update_Three("Go To Game")}
          >
              Go To Game
            {/* {this.state.startGameButton} */}
          </Button>{" "}
        </div>

              {/* <p>Hello</p> */}
          </div>
      )}
}
>>>>>>> 0b132584... Changed to component implementation
