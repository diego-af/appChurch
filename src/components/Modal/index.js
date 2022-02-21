import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Texts} from '../../../src/files';

//19555r15 85v
const {width, height} = Dimensions.get('window');

const ViewModal = props => {
  const [writes, setWrites] = useState(Texts);

  return (
    <View style={styles.container}>
      <View style={styles.viewModal}>
        {writes.map(item => {
          if (item.id == props.id) {
            return (
              <Text key={item.id} style={styles.textModal}>
                {item.text}
              </Text>
            );
          }
        })}
      </View>

      <TouchableOpacity
        style={[styles.viewButton, {opacity: 7}]}
        onPress={props.closed}>
        <Text style={styles.textButton}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  viewModal: {
    width: '100%',
    height: '80%',
    backgroundColor: '#085530',
    borderRadius: 10,
    elevation: 5,
    marginTop: 40,
  },
  textModal: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    lineHeight: 20,
  },
  viewButton: {
    backgroundColor: '#085530',
    marginTop: 15,
    paddingHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ffff',
    borderWidth: 2,
    borderShadowColor: '#ffff',
  },
  textButton: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewModal;
