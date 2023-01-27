import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const YoutubeView = () => {
  const [videoId, setVideoId] = useState('');
  const API_KEY = 'AIzaSyD4oMs-4ffbQm_ZIb9gonEr2aBuT2ARPng';
  const CHANNEL_ID = 'UCx5kLv_MO-yhjIIqcCLEMFA';

  // useEffect(() => {
  //     try {
  //       console.log('about to fetch')
  //       const response = fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`);
  //       console.log(response)
  //       const data = response.json();
  //       setVideoId(data.items[0].id.videoId);
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }, []);
  const baseURL =
  'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCx5kLv_MO-yhjIIqcCLEMFA';

useEffect(() => {
    try {
      const data = fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCx5kLv_MO-yhjIIqcCLEMFA',
      ).then((response = response.json()));
      console.log(data)
    } catch (error) {
      console.log(error);
    }

}, []);
  return (
    <WebView
      source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      style={{ flex: 1 }}
    />
  );
};

export default YoutubeView;
