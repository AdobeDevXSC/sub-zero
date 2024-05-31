import { makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {    
    const videoSrc = block.querySelector('div > a');

    if(videoSrc.href.includes(window.hlx.codeBasePath)) {
      videoSrc.href = videoSrc.text;
    }

    makeVideo(videoSrc.closest('div'), videoSrc.href);
    videoSrc.remove();
}