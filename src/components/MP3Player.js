import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const MP3Player = () => {
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
  const mp3s = data.allFile.edges.map((edge) => edge.node);
  // LEON RIVER EP
  const track1 = {
    name: "Leon River Blues",
    mp3Filename: "Leon_River_Blues",
  };
  const track2 = {
    name: "Sit There and Stare",
    mp3Filename: "Sit_There_and_Stare",
  };
  const track3 = {
    name: "44 Miles to Independence",
    mp3Filename: "44_Miles_to_Independence",
  };
  const track4 = {
    name: "God Given Talent",
    mp3Filename: "God_Given_Talent",
  };
  const track5 = {
    name: "Imperfect Lens",
    mp3Filename: "Imperfect_Lens",
  };
  const leonRiverEP = [track1, track2, track3, track4, track5].map((track) => {
    const trackMP3Node = mp3s.find((mp3) => {
      return mp3.name === track.mp3Filename;
    });
    const src = trackMP3Node?.publicURL ?? "";
    return {
      name: track.name,
      src,
    };
  });
  return (
    <>
      {leonRiverEP.map((track) => (
        <details key={track.name}>
          <summary>{track.name}</summary>
          <AudioPlayer
            src={track.src}
            // header={`${track?.name}`}
          />
        </details>
      ))}
    </>
  );
};
