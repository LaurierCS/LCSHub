import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase.config.js';
import {ref, get, onValue} from 'firebase/database';
import ButtonImg from './Button_Image';

const FetchData = () => {
  const [URL, setURL] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, 'Resources/');
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      const newResource = Object.keys(data).map(key => ({
        URL: key,
        ...data[key],
      }));
      console.log(newResource);
      setURL(newResource);
    });
  }, []);
  return (
    <View>
      <Text>
        {URL.map((item, index) => {
          return (
            <View key={index}>
              <ButtonImg Title={item.Title} IMG={item.IMG} URL={item.URL} />
            </View>
          );
        })}
      </Text>
    </View>
  );
};

const LCS_Style = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default FetchData;
