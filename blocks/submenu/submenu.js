export default async function decorate(block) {
	const list = block.querySelector('ul');
	list.id = "menu-list"
	const listWrapper = list.closest('div')
	console.log(list)



	const getRect = listWrapper.getBoundingClientRect()
	console.log(getRect)

	// $('#menu-list').on("scroll", function(e) {
	// 	horizontal = e.currentTarget.scrollLeft;
	// 	console.log(horizontal, window.innerWidth);
	// 	});

	// if(list.width > window.innerWidth){
	// 	list.className = "scroll-more"
	// } else {
	// 	list.className = "no-scroll"
	// }
	list.className = "scroll-more"
}