import React, { Component } from 'react';
import Webcam from "react-webcam";
import { Button, Header, Image, Segment } from 'semantic-ui-react';

export default class WebcamCapture extends Component {

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          facingMode='user'
          screenshotFormat='image/jpeg'
          width={350}
          videoConstraints={videoConstraints}
        />
        <Button primary content='Capture' onClick={this.capture} />
      </div>
    );
  }

}
