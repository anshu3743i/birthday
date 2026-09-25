import birthdayMusic from "./WhatsApp Audio 2026-09-25 at 20.55.10.mp3";

const audio = new Audio(birthdayMusic);

audio.loop = true;
audio.volume = 0.5;

export const startMusic = () => {
  audio.play().catch(() => {});
};

export const stopMusic = () => {
  audio.pause();
  audio.currentTime = 0;
};