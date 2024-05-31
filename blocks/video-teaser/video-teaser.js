import { makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {    
	console.log('block children', block.children)

    const videoSrc = block.querySelector('div > a');

    if(videoSrc.href.includes(window.hlx.codeBasePath)) {
      videoSrc.href = videoSrc.text;
    }

    makeVideo(block.querySelector('div'), videoSrc.href);
    videoSrc.remove();
}