import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const MP3Player = () => {
  const [songIndex, setSongIndex] = React.useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "mp3" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);
  const songsArr = data.allFile.edges.map(({ node: song }) => {
    return {
      name: prettifySongName(song.name),
      src: song.publicURL,
    };
  });
  const maxIndex = songsArr.length - 1;
  const handleNextSong = () => {
    const isNextable = songIndex >= 0 && songIndex < maxIndex;
    if (isNextable) {
      setSongIndex((state) => state + 1);
    } else {
      setSongIndex(0);
    }
  };
  const handlePrevSong = () => {
    const isPrevable = songIndex > 0 && songIndex <= maxIndex;
    if (isPrevable) {
      setSongIndex((state) => state - 1);
    } else {
      setSongIndex(maxIndex);
    }
  };
  const currentSong = songsArr[songIndex];
  const currentSongSrc = currentSong?.src ?? '';
  const currentSongName = currentSong?.name ?? '...';
  return (
    <AudioPlayer
      src={`${currentSongSrc}`}
      preload="metadata"
      autoPlayAfterSrcChange={false}
      showSkipControls={true}
      customAdditionalControls={[]}
      onClickPrevious={handlePrevSong}
      onClickNext={handleNextSong}
      header={`${currentSongName}`}
      footer={`Leon River EP - track ${songIndex + 1}`}
    />
  );
};

function prettifySongName(str) {
  return replaceAll(str, '-', ' ').split(' ').map(capitalize).join(' ');

  function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

  function capitalize(str, i) {
    let myStr = str;
    if (i > 0 && (str === 'to' || str === 'and' || str === 'for')) {
      return str;
    }
    //handle parentheses -- i.e.'wrong-sides-(bygones)' => Wrong Side (Bygones)
    const isParentheses = str.startsWith('(');
    if (isParentheses) {
      myStr = str.slice(1);
    }
    return (
      (isParentheses ? '(' : '') +
      myStr.charAt(0).toUpperCase() +
      myStr.slice(1)
    );
  }
}
