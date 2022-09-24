import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = ({ seconds }) =>
  localStorage.setItem(CURRENT_TIME, seconds);

const getCurrentTime = () => {
  if (localStorage.getItem(CURRENT_TIME)) {
    console.log('getCurrentTime: ', localStorage.getItem(CURRENT_TIME));
    return localStorage.getItem(CURRENT_TIME);
  }
  return 0;
};

player.setCurrentTime(getCurrentTime());

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(saveCurrentTime, 1000));
