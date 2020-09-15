import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../styles/styles';
import {ActionSheet, Root} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import {itemViewImage, imageItem} from '../styles/styles';

export default class CameraImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  onSelectedImage = (image) => {
    let newDataImage = this.state.fileList;
    const source = {uri: image.path};
    let item = {
      id: Date.now(),
      url: source,
      content: image.data,
    };
    newDataImage.push(item);
    this.setState({fileList: newDataImage});
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.onSelectedImage(image);
      console.log(image);
    });
  };

  choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.onSelectedImage(image);
      console.log(image);
    });
  };

  onCliskAddImage = () => {
    const BUTTONS = ['Камера', 'Галерея', 'Отмена'];
    ActionSheet.show(
      {options: BUTTONS, cancelButtonIndex: 2, title: 'Выбрать фото:'},
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.choosePhotoFromGallery();
            break;
          default:
            break;
        }
      },
    );
  };

  renderItem = ({item, index}) => {
    return (
      <View style={itemViewImage}>
        <Image source={item.url} style={imageItem} />
      </View>
    );
  };

  render() {
    let {fileList} = this.state;
    return (
      <Root>
        <View style={styles.content}>
          <FlatList
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />
          <TouchableOpacity onPress={this.onCliskAddImage}>
            <Icon name={'camera-retro'} color="#fff" size={50} />
          </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'flex-end',
  },
});
