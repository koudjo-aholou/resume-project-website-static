import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_giftbox from '../../resources/images/icons/giftbox.png';
import icon_arbitrator from '../../resources/images/icons/arbitrator.png';

const SlapInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
        <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div
                  className="vn_icon"
                  style={{
                    background: `url(${icon_giftbox})`
                  }}
                  >
                </div>
                <div className="vn_title">
                  Slap Donation
                </div>
                <div className="vn_desc">
                  3 slaps gived
                </div>
              </div>
            </div>
          </div>
        </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_arbitrator})`
                    }}
                    >
                  </div>
                  <div className="vn_title">
                    SB Commissioner
                  </div>
                  <div className="vn_desc">
                    M. Ted Mosby
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

    </div>
  );
};

export default SlapInfo;
