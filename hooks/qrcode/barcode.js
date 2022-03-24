	import wxbarcode from '../../utils/code.js'
	
	
	const createBarcode = (id, text, width, height) => {
		
		wxbarcode.barcode(id, text, width, height);
		// wxbarcode.barcode('barcode', '123123441233', 600, 300);
	}
	export {createBarcode}