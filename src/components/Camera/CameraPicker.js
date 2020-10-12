import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import {mainContainer, panel, panelButton, panelTitle, panelSubtitle, panelButtonTitle} from "../../styles/styles";

function CameraPicker (props) {
  const [image, setImage] = useState(null);
  const defaultImg = require('../../../assets/onboarding1.png');
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  const navigation = useNavigation(); 

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={panelTitle}>Изменить фото</Text>
        <Text style={panelSubtitle}>Выберите фото профиля</Text>
      </View>
      <TouchableOpacity
        style={panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={panelButtonTitle}>Камера</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={panelButtonTitle}>Выбрать из галереи</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={panelButton}
        onPress={() => {
            props.close();
            navigation.navigate('Profile');
        }}
        >
        <Text style={panelButtonTitle}>Отмена</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={mainContainer}>
      <BottomSheet
        ref={bs}
        snapPoints={[300, 0]}
        renderContent={renderInner}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
          onPress={() => bs.current.snapTo(0)}
          >
            <View
              style={{
                height: 300,
                width: 300,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={image === null ? defaultImg : {uri: image}}
                style={{height: 300, width: 300}}
                imageStyle={{borderRadius: 15}}>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default CameraPicker;
