import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {

  return (
  <Fade>
    <div className="center_wrapper">
      <h2>The Rules of SlapBet</h2>
      <div className="highlight_description">
      <ol>
        <li> Winner of bet gets 1 slap as hard as they can against loser. This must occur immediately, unless otherwise decided by the Slap Bet Commissioner.</li>
        <li> No rings, gloves or anything else may be worn on the hand during the slap.</li>
        <li> A Slap Bet Commissioner must be appointed to handle any discrepancies and make rulings.</li>
        <li> Premature Slapulation: If a winning slap turns out to be proven wrong, the slap bet commissioner may grant a number of punishment slaps of their choosing (usually 2).</li>
        <li> If a winning slap turns out to be proven wrong and the winner was withholding information which would have proved them wrong, the Slap Bet commissioner may grant a number of punishment slaps of their choosing, in addition to the slaps for being proven wrong. (usually 1)</li>
        <li> If neither party wins the bet, no slaps will be given unless otherwise indicated by the Slap Bet Commissioner.</li>
        <li> In the case of a penalty, the slap bet commissioner may give the option of more slaps now or less slaps that may occur at any moment for all eternity. i.e. 10 now or 5 at any time</li>
        <li> The Slap Bet Commissioner has the final word in all things related to the Slap Bet.</li>
      </ol>
      </div>
    </div>
  </Fade>
  );
};

export default Description;
