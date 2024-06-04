export default function decorate(block) {
	const scriptDOM = document.createElement('script');
	scriptDOM.setAttribute('src', '//913-LBR-152.mktoweb.com/js/forms2/js/forms2.min.js');

	const formDOM = document.createElement('form');
	formDOM.setAttribute('id', 'mktoForm_1005');

	const scriptLoadDOM = document.createElement('script');
	scriptLoadDOM.innerHTML = `MktoForms2.loadForm("//913-LBR-152.mktoweb.com", "913-LBR-152", 1005);`;

	block.append(scriptDOM);
	block.append(formDOM);
	block.append(scriptLoadDOM);
}