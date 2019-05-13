import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    images: [
      {
        id: 1,
        img:
          'https://scontent.cdninstagram.com/vp/48dd5ca7a0bbf664ee8611aff0131888/5D71E080/t51.2885-15/sh0.08/e35/s640x640/47584792_343270989593728_9007067275045271579_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 2,
        img:
          'https://scontent.cdninstagram.com/vp/ddfb42d99a1714d7b3fd5a1e06b79b8b/5D55897A/t51.2885-15/sh0.08/e35/s640x640/42790690_2051531454867869_4551228932128999988_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 3,
        img:
          'https://scontent.cdninstagram.com/vp/d59b71b20f64b5448bba40d438e8ea11/5D6A0939/t51.2885-15/sh0.08/e35/s640x640/18444382_1910227719257758_990049962421125120_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 4,
        img:
          'https://scontent.cdninstagram.com/vp/7a6b6aa947d957e74ab73ea3a065392c/5D69DCF5/t51.2885-15/sh0.08/e35/s640x640/41394461_2124629174421078_840262950223744231_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 5,
        img:
          'https://scontent.cdninstagram.com/vp/0fee77d8b30901c724df5975fb8424ba/5D6C0304/t51.2885-15/sh0.08/e35/s640x640/41335911_173040163592175_1795391712865912873_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 6,
        img:
          'https://scontent.cdninstagram.com/vp/62063d5cf2030556901f2b7687a82f8a/5D62BA61/t51.2885-15/sh0.08/e35/s640x640/41563004_325428321558883_3588181052676961568_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 7,
        img:
          'https://scontent.cdninstagram.com/vp/929e0e92616f995d5881220493c13a18/5D60FA7B/t51.2885-15/sh0.08/e35/s640x640/41322973_455550941601095_4754593735201782272_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 8,
        img:
          'https://scontent.cdninstagram.com/vp/3452839f21b4e905158c8fc938a9dfde/5D67FFC2/t51.2885-15/sh0.08/e35/s640x640/41100764_713322955717413_2335558242234645789_n.jpg?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 9,
        img:
          'https://scontent.cdninstagram.com/vp/0971c4dcb45982d6c2d22549a71b0471/5D5F2BBE/t51.2885-15/sh0.08/e35/s640x640/21910743_129532921122661_3686645836344721408_n.jpg?_nc_ht=scontent.cdninstagram.com'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
