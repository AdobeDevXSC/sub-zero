import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // code for custom image section in footer   
  const footerImageBlock = footer.querySelector('.footer-image-links');
  const footerImages = footerImageBlock.querySelectorAll('img')
  footerImages.forEach((image)=> {
	const link = image.closest('a');
	const linkHeading = document.createElement('h6');
	linkHeading.innerHTML = `${image.alt}`;
	link.append(linkHeading);
  })

  block.append(footer);
}
