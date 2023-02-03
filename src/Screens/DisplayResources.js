import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ref, get, onValue, getDatabase} from 'firebase/database';
import ButtonDynamicImg from '../Components/ButtonDynamicImg';
import { ScrollView } from 'react-native-web';

const FetchData = () => {
  const db = getDatabase();
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
            <View style={LCS_Style.button} key={index}>
              <ButtonDynamicImg
                Title={item.Title}
                IMG={item.IMG}
                URL={item.URL}
              />
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

  button :{
    marginTop : 10,
    marginRight : 10,
    flexDirection : 'col',
    alignItems : 'center',
  },
});

export default FetchData;