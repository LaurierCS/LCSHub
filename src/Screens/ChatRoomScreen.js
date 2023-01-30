import React, {Component} from 'react';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {navigateAndSimpleReset} from '../Navigators/util';
import {CommonActions} from '@react-navigation/native';

const database = getDatabase();
const auth = getAuth();

class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [{message: 'messageasdas', sender: 'lol'}],
      message: '',
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    const prevMessages = ref(database, '/messages');
    onValue(prevMessages, snapshot => {
      var chat = [];
      snapshot.forEach(childSnapshot => {
        const obj = {
          message: childSnapshot.val().message,
          sender: childSnapshot.val().sender,
        };
        chat.push(obj);
      });
      this.setState({
        chat: chat,
      });
    });
    this.setState({chat: this.state.chat.reverse()});
  }

  async sendMessage() {
    const curDate = new Date();
    set(ref(database, '/messages/' + curDate.getTime()), {
      message: this.state.message,
      sender: auth.currentUser.email,
      time: curDate.getTime(),
    });
    this.setState({message: ''});
  }

  logout() {
    auth.signOut();
    this.props.navigation.pop();
  }

  render() {
    return (
      <View>
        <View style={styles.messageBox}>
          <Text style={styles.label}>Chatbox</Text>
          <ScrollView>
            {this.state.chat.map((chat, index) => {
              console.log(auth.currentUser.email);
              if (chat.sender === auth.currentUser.email) {
                return (
                  <View key={chat.time} style={styles.myMsgs}>
                    <Text style={styles.myMessage}>{chat.message}</Text>
                    <Text style={styles.senderIsMe}>Sent by YOU</Text>
                  </View>
                );
              } else {
                return (
                  <View key={index} style={styles.msgs}>
                    <Text style={styles.message}>{chat.message}</Text>
                    <Text style={styles.sender}>From: {chat.sender}</Text>
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
        <TextInput
          onChangeText={newText => this.setState({message: newText})}
          value={this.state.message}
          placeholder="Enter message"
          placeholderTextColor="#000000"
          style={styles.inputField}
        />
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={[styles.btnSendMessage, {flex: 1}]}
            onPress={this.sendMessage}>
            <Text style={[styles.btnTxt, {justifyContent: 'flex-start'}]}>
              Send Message
            </Text>
          </Pressable>
          <Pressable
            style={[styles.btnSendMessage, {flex: 1}]}
            onPress={this.logout}>
            <Text style={[styles.btnTxt, {justifyContent: 'flex-end'}]}>
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  myMsgs: {
    backgroundColor: '#a8aaad',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  msgs: {
    backgroundColor: '#a8aaad',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  messageBox: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#000000',
    maxHeight: height * 0.6,
    overflow: 'scroll',
  },
  myMessage: {
    color: '#000000',
    fontSize: 15,
    alignSelf: 'flex-end',
  },
  senderIsMe: {
    color: '#543331',
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  message: {
    color: '#000000',
    fontSize: 15,
  },
  sender: {
    color: '#543331',
    fontSize: 10,
  },
  inputField: {
    backgroundColor: '#a8aaad',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: height * 0.1,
    borderRadius: 10,
  },
  btnSendMessage: {
    backgroundColor: '#a8aaad',
    marginTop: 10,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
  },
  label: {
    fontSize: 20,
    paddingTop: 20,
  },
});

export default ChatRoomScreen;
