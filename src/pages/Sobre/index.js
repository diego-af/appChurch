import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import ViewModal from '../../components/Modal/index';

const {WIDTH, HEIGHT} = Dimensions.get('screen');

const Sobre = () => {
  const buttons = [
    {id: 1, text: 'Sobre a Igreja presbiteriana do Brasil'},
    {id: 2, text: 'Estrutura'},
    {id: 3, text: 'Doutrina'},
  ];

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleTree, setIsVisibleTree] = useState(false);

  const visibles = [
    {id: 1, condition: isVisibleOne},
    {id: 2, condition: isVisibleTwo},
    {id: 3, condition: isVisibleTree},
  ];
  function closeModal() {
    setIsVisibleOne(false);
    setIsVisibleTwo(false);
    setIsVisibleTree(false);
  }

  function openModal(id) {
    visibles.forEach(item => {
      if (item.id == id) {
        if (id == 1) {
          setIsVisibleOne(true);
          setIsVisibleTwo(false);
          setIsVisibleTree(false);
        } else if (id == 2) {
          setIsVisibleOne(false);
          setIsVisibleTwo(true);
          setIsVisibleTree(false);
        } else {
          setIsVisibleOne(false);
          setIsVisibleTwo(false);
          setIsVisibleTree(true);
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      {buttons.map(item => {
        return (
          <TouchableOpacity
            style={styles.titleView}
            onPress={() => openModal(item.id)}
            key={String(item.id)}>
            <Text style={styles.textTitle}>{item.text}</Text>
          </TouchableOpacity>
        );
      })}

      {visibles.map(item => {
        return (
          <Modal
            visible={item.condition}
            transparent={true}
            animationType="slide"
            key={item.id}>
            <ViewModal closed={() => closeModal(id)} id={item.id} />
          </Modal>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: WIDTH,
    height: HEIGHT,
  },

  titleView: {
    backgroundColor: '#085530',
    width: WIDTH,
    padding: 14,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  textModal: {},
  textWrite: {},
});
export default Sobre;
