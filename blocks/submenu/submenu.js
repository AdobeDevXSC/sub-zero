export default async function decorate(block) {
	const list = block.querySelector('ul');
	list.id = "menu-list"
	// TODO: calculate scroll positions to add/remove gradient based on if there are remaning elements or not
}