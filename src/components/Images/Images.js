import React, { Component } from 'react';
import Image from './Image';
import { Consumer } from '../../context';

class Images extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { images } = value;
          return (
            <div className="album py-5">
              <div className="container">
                <div className="row">
                  {images.map(image => (
                    <Image key={image.id} image={image} />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Images;
