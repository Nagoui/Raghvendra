import React from 'react';
// import { Asset, AppLoading } from 'expo';

import { Sections, Section } from './Section.js';

const mariner = '#3B5F8F';
const mediumPurple = '#8266D4';
const tomato = '#F95B57';
const mySin = '#F3A646';

const sections: Section() = [
  {
    title: 'SUNGLASSES',
    leftColor: mediumPurple,
    rightColor: mariner,
    image: require('./assets/bird.png'),
  },
  {
    title: 'FURNITURE',
    leftColor: tomato,
    rightColor: mediumPurple,
    image: require('./assets/bird.png'),
  },
  {
    title: 'JEWELRY',
    leftColor: mySin,
    rightColor: tomato,
    image: require('./assets/bird.png'),
  },
  {
    title: 'HEADWEAR',
    leftColor: 'white',
    rightColor: tomato,
    image: require('./assets/bird.png'),
  },
];

export default class App_Phone extends React.Component {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Promise.all(sections.map(section => Asset.loadAsync(section.image)));
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <AppLoading />
      );
    }
    return (
      <Sections {...{ sections }} />
    );
  }
}