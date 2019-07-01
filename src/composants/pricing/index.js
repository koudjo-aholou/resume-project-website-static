import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [1, 2, 3],
    positions: ["Barney Stinson","Theodore Mosby", "Marshall Ericksen"],
    descriptions:  [
      "Barney Stinson is one of five main characters on How I Met Your Mother. He is a manipulative, oversexed businessman in his thirties who always wears a suit, likes women with daddy issues and is frequently willing to offer his (sometimes hypocritical) opinion.[4] Throughout the earlier seasons, Barney is a huge womanizer, and has been described as a high-functioning sociopath by his best friend, Ted Mosby (Josh Radnor). Barney has a plethora of strategies and rules designed to meet women, sleep with them, and discard them.",
      "Ted's character is based largely on the show's creator, Carter Bays, with the friendship between him and fellow creator Craig Thomas being the base for the friendship between Ted and Marshall. His personality is also partially based on Ross Geller from the NBC sitcom Friends, including Ted's original profession as an archaeologist being similar to Ross' profession as a paleontologist. His profession was later changed to be an architect, due to the writers having difficulties fitting his profession as an archaeologist in a New York setting.",
      "Marshall was born and raised in St. Cloud, Minnesota, the youngest of three brothers. His last name, the fact that he is from Minnesota and his references to lutefisk suggests that he might be of Norwegian descent. He is extremely close to his family, particularly his father, Marvin (Bill Fagerbakke)."
    ],
    linkto: ["https://en.wikipedia.org/wiki/Barney_Stinson", "https://en.wikipedia.org/wiki/Ted_Mosby", "https://en.wikipedia.org/wiki/Marshall_Eriksen"
    ],
  delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i)=>(
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.descriptions[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Discover"
                bck="red"
                color="white"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Characters</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
