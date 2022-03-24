import {
	useState
} from '@/utils/vuexmap/useState'
// import {
// 	useActions
// } from '@/utils/vuexmap/useActions'

var userState = () => {
	return useState('login', ['userInfo', 'wallet'])
}
// var userAction = () => {
// 	return useState('login', ['userInfo', 'wallet'])
// }

export {
	userState
}
