import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Image extends Component {
  state = {
    //showImageInfo: false
  };

  render() {
    const { id, name, artist, img } = this.props.image; // Destructuring.
    // const { showImageInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="col-4 mb-4">
              <img
                className="card img-top border-0"
                src={img}
                alt={name}
                height="100%"
                width="100%"
              />
              {/* ) : null} */}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired
};

export default Image;
