import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const YoutubeView = () => {
  const [videoID, setVideoID] = useState('');

  useEffect(() => {
    const fetchVideoID = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD4oMs-4ffbQm_ZIb9gonEr2aBuT2ARPng&channelId=UCF9Pp-ZO-dJhYg5Ig-LcD2Q&part=snippet,id&type=video&order=date&maxResults=1');
        const data = await response.json();

        if (!data || !data.items) return;

        // Extract the video ID from the response
        const video = data.items[0];
        const videoID = video.id.videoId;
        setVideoID(videoID);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoID();
  }, []);

  if (!videoID) {
    return null;
  }

  return (
    <WebView
      source={{ uri: `https://www.youtube.com/embed/${videoID}` }}
      style={{ flex: 1 }}
    />
  );
};

export default YoutubeView;
