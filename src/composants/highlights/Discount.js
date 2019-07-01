import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton'

class Discount extends Component {

  state = {
    kilometerStart: 0,
    kilometerEnd: 110,
  }

  porcentage = () => {
    if(this.state.kilometerStart < this.state.kilometerEnd){
      this.setState({
        kilometerStart: this.state.kilometerStart + 1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.porcentage()
    },20)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        <Fade
          onReveal={()=> this.porcentage()}
        >
          <div className="discount_porcentage">
            <span>{this.state.kilometerStart}</span>
            <span>Km/h</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Speed of the last Slap</h3>
            <p>Robin lies and tells Ted she married a guy in a mall in Canada, but he moved away to Hong Kong.
              Ted tells Lily, Marshall, and Barney.
              Marshall, being proven right, slaps Barney.
            </p>
            <MyButton
              text="Purchase videos"
              bck="red"
              color="white"
              link="https://monfiltresnapchat.com"
            />
          </div>
        </Slide>

        </div>
      </div>
    );
  }
}
export default Discount;
