import React from "react";

import { AiFillSound } from "react-icons/ai";
import { useState } from "react";

const Tts = (props) => {
  let review = props.review;

  const sound = () => {
    const val = review.shayari;
    const text = new SpeechSynthesisUtterance(val);
    text.lang = "hi-IN";

    // Adjusting the voice properties
    text.volume = 1; // volume range is from 0 (silent) to 1 (loud)
    text.rate = 0.9; // rate range is from 0.1 (slow) to 10 (fast)
    text.pitch = 1; // pitch range is from 0 (low) to 2 (high)

    // Function to find and set the voice
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const googleHindiVoice = voices.find(
        (voice) => voice.name === "Google हिन्दी"
      );
      if (googleHindiVoice) {
        text.voice = googleHindiVoice;
      }
      window.speechSynthesis.speak(text);
      console.log(val);
      console.log(voices);
    };

    // Load voices and set the voice
    if (window.speechSynthesis.getVoices().length !== 0) {
      setVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = setVoice;
    }
  };
  return (
    <div>
      <button onClick={sound}>
        <AiFillSound />
      </button>
    </div>
  );
};

export default Tts;
