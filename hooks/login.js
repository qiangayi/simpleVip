import {
	useState
} from '@/utils/vuexmap/useState'
import {
	useActions
} from '@/utils/vuexmap/useActions'


const loginState = () => {
	return useState('login', ['tabbar'])
}

const loginActions = () => {
	return useActions('login', ['pageChange'])
}
export {
	loginState,
	loginActions
}
