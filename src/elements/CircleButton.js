import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#FFF';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 10,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    lineHeight: 48,
    fontSize: 24,
  },
});

export default CircleButton;
