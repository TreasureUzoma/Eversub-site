import { useState, useEffect } from "react";

const useFadeOut = () => {
  const [currentSentence, setCurrentSentence] = useState<string>(
    "The #1 most loved subscription app."
  );
  const [fade, setFade] = useState<boolean>(true);

  // Word cycling effect
  useEffect(() => {
    let sentenceIndex = 0;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        sentenceIndex= (sentenceIndex + 1) % sentences.length;
        setCurrentSentence(sentences[sentenceIndex]);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sentences = [
    "The #1 most loved subscription app.",
    "Manage all your subcriptions effortlessy.",
    "Track all your subscriptions in one place.",
    "Get cashbacks when you refer friends.",
  ];

  return {
    currentSentence,
    fade,
  };
};

export { useFadeOut }
