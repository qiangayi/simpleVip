// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import { createStore } from 'vuex'

import login from '@/store/modules/login'
// import moduleB from '@/store/modules/moduleB'

const store = createStore({
		modules: {
			login
		}
})

// const storeContext = require.context('./modules', true, /\.js$/)

// storeContext.keys().forEach((modules) => {
//   store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
// })

export default store
