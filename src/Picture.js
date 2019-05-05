import React, { Component } from 'react';
import Webcam from "react-webcam";
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";
import fakepets from './FAKEPETS.png';
import faketaxi from './FAKETAXI.png';

export default class Picture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      redirect: false,
      emotion: null,
      count: this.props.location.state ? this.props.location.state.count : 1,
    };
  }
  
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.uploadFile(imageSrc);
  };

  uploadFile = (imageSrc) => {
    const cloudName = 'dp9w7ci5y';
    const unsignedUploadPreset = 'jboz1u8y';

    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;
        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        var img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
        var imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${response.public_id}.jpg`;
        console.log(imageUrl);
        //document.getElementById('gallery').appendChild(img);
        this.sendPicture(imageUrl);
      }
    };
  
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', imageSrc);
    xhr.send(fd);
  }

  sendPicture = (imageUrl) => {
    console.log(imageUrl);
    const request = require('request');
    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = 'fabb4183fc89457f8e0a19eda2d04347';
    // You must use the same location in your REST call as you used to get your
    // subscription keys. For example, if you got your subscription keys from
    // westus, replace "westcentralus" in the URL below with "westus".
    const uriBase = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0/detect';
    //const imageUrl = 'https://i.kinja-img.com/gawker-media/image/upload/s--rKYOx8vT--/c_scale,f_auto,fl_progressive,q_80,w_800/19cmhfu7ebpy7jpg.jpg';
    //const imageUrl = 'https://res.cloudinary.com/dp9w7ci5y/image/upload/v1557001078/zwsatrpybpit6zozrh6v.jpg'
    // Request parameters.
    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };
    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": "' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log(jsonResponse);
      var jsonData = JSON.parse(jsonResponse);
      if (jsonData[0].faceAttributes.emotion && jsonData[0].faceAttributes.emotion.anger > 0.5){
        console.log(jsonData[0].faceAttributes.emotion);
        this.setState({emojiType: 'angry'});
      } else if (jsonData[0].faceAttributes.emotion && jsonData[0].faceAttributes.emotion.happiness > 0.5){
        console.log(jsonData[0].faceAttributes.emotion);
        this.setState({emojiType: 'yay'});
      } else if (jsonData[0].faceAttributes.emotion && jsonData[0].faceAttributes.emotion.surprise > 0.5){
        console.log(jsonData[0].faceAttributes.emotion);
        this.setState({emojiType: 'wow'});
      } else if (jsonData[0].faceAttributes.emotion && jsonData[0].faceAttributes.emotion.disgust > 0.5){
        console.log(jsonData[0].faceAttributes.emotion);
        this.setState({emojiType: 'angry'});
      } else if (jsonData[0].faceAttributes.emotion && jsonData[0].faceAttributes.emotion.neutral > 0.5){
        console.log(jsonData[0].faceAttributes.emotion);
        this.setState({emojiType: 'like'});
      }
      this.setState({redirect: true, count: 2});
    });
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };
    if (this.state.redirect) {
      return <Redirect to={{pathname: '/result', state: { emotion: this.state.emojiType, count: this.state.count + 1 }}} />;
    }
    return (
      <Segment style={{height: '100vh'}}>
        <Segment style={{backgroundColor: '#4267b2', margin: 0, with: '100%', height: '5vh', flex: 1, flexDirection: 'row'}}>
          <div style={{bakgroundColor: '#4267b2', height: '4vh', flex: 0.2}}></div>
          <Segment style={{bakgroundColor: 'white', height: '4vh', flex: 0.7}}></Segment>
          <div style={{bakgroundColor: '#4267b2', height: '4vh', flex: 0.1}}></div>
        </Segment>
        <Segment style={{textAlign: 'center', display: 'flex', flex: 1, flexDirection: 'row', width: '100vw'}}>
          <div style={{display: 'flex', flex: 1, flexDirection: 'column', width: '50vw'}}>
            <img src={this.state.count === 1 ? fakepets : faketaxi} alt='' style={{width: 640, height: 480}} />
          </div>
          <div style={{textAlign: 'center', display: 'flex', flex: 1, flexDirection: 'column', width: '50vw'}}>
            <Header content='Take a photo!' />
            <Webcam
              audio={false}
              height={480}
              ref={(webcam) => {this.webcam = webcam;}}
              facingMode='user'
              screenshotFormat='image/jpeg'
              width={640}
              videoConstraints={videoConstraints}
            />
          </div>
        </Segment>
        <Segment>
          <Button primary content='Capture' onClick={this.capture} />
          <Link to='/'><Button content='Back' /></Link>
        </Segment>
      </Segment>
    );
  }

}
