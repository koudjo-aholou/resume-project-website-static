import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4774996550263!2d-73.99864958497633!3d40.72951744448133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599af55395c1%3A0xda30743171b5f305!2sUniversit%C3%A9+de+New+York!5e0!3m2!1sfr!2sfr!4v1546508893288"
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen
      >
      </iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>

  );
};

export default Location;
