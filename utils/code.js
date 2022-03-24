import barcode from './barcode'
 
function convert_length(length) {
	return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}
 
function barc(id, code, width, height, that) {
	barcode.code128(wx.createCanvasContext(id, that), code, convert_length(width), convert_length(height))
}
export default {
	barcode: barc
}