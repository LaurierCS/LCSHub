import React from 'react';
import { View } from 'react-native';
import axios from 'axios';

const YOUR_DISCORD_SERVER_ID = "224916296179908609"
const YOUR_CHANNEL_ID = "573215976997519360"
const YOUR_BOT_TOKEN = "MTA2MTY5MzYzNDk4NDAzMDMyOA.GZa6VG.SIG0weKbgAGwZ5bWSoAccaMLwMXSr1_5SCJA3Q"

export class DiscordView extends React.Component {
  state = {
    announcements: [],
  };

  async componentDidMount() {
    try {
      // Fetch the 3 most recent announcements from the public Discord server
      // Replace YOUR_DISCORD_SERVER_ID and YOUR_CHANNEL_ID with the actual IDs of your public Discord server and channel
      const response = await axios.get(`https://discordapp.com/api/guilds/${YOUR_DISCORD_SERVER_ID}/channels/${YOUR_CHANNEL_ID}/messages`, {
        headers: {
          Authorization: `Bot ${YOUR_BOT_TOKEN}`,
        },
        params: {
          limit: 3,
        },
      });

      this.setState({
        announcements: response.data.map(message => message.content),
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View>
        {this.state.announcements.map(announcement => (
          <p>{announcement}</p>
        ))}
      </View>
    );
  }
}
