// THIS COMPONENT IS TO BE DELETED

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text } from 'react-native';

const DiscordView = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const serverId = '1063204620157067274';
    const channelId = '1063204647860437012';
    const token = 'MTA2MTY5MzYzNDk4NDAzMDMyOA.G3tWki.Gn40xm9flbJELZB9TqqybePDWu6dkc8t4zSHRs';
    axios.get(`https://discord.com/api/guilds/${serverId}/channels/${channelId}/messages`, {
      headers: {
        Authorization: `Bot ${token}`
      }
    })
    .then(response => {
      const messages = response.data;
      setMessages(messages.slice(0, 3));
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  if (!messages.length) {
    return <Text>Loading...</Text>
  }

  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <Text>{message.content}</Text>
        </div>
      ))}
    </div>
  );
};

export default DiscordView;