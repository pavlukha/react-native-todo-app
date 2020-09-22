import React from 'react';
import {View} from 'react-native';
import {mainContainer} from '../styles/styles';
import {
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  PageFive,
} from './OnboardingFunc/onboarding';

class OnboardingScreen extends React.Component {
  state = {page: 1};

  onboardingPages = () => {
    switch (this.state.page) {
      case 1:
        return <PageOne setStep={() => this.setState({page: 2})} />;
      case 2:
        return (
          <PageTwo
            setStepEmail={() => this.setState({page: 3})}
            setStepAccount={() => this.setState({page: 4})}
          />
        );
      case 3:
        return (
          <PageThree
            setStep={() => this.setState({page: 4})}
            navigation={this.props.navigation}
          />
        );
      case 4:
        return <PageFour setStep={() => this.setState({page: 5})} />;
      case 5:
        return (
          <PageFive
            setStep={() => this.setState({page: 1})}
            navigation={this.props.navigation}
          />
        );
      default:
        break;
    }
  };

  render() {
    return <View style={mainContainer}>{this.onboardingPages()}</View>;
  }
}

export default OnboardingScreen;
