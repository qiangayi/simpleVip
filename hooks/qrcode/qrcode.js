
	import drawQrcode from '../../utils/weapp.qrcode.esm.js'
		
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from 'vue'
		
	
	// 显示二维码
	const createQrcode = (text) => {
		const query = wx.createSelectorQuery()
		query.select('#myQrcode')
			.fields({
				node: true,
				size: true
			})
			.exec((res) => {
				var canvas = res[0].node
	
				// 调用方法drawQrcode生成二维码
				drawQrcode({
					canvas: canvas,
					canvasId: 'myQrcode',
					width: 260,
					padding: 30,
					background: '#ffffff',
					foreground: '#000000',
					text,
				})
			})
	}
	
	export {createQrcode}