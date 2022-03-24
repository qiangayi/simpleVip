import {
	getUser
} from '../../api/user.js'

const state = {
	userInfo: {
		birthday: "",
		createTime: "",
		gender: "",
		level: "",
		name: "",
		openId: "ovsdCxF4tmAuRU9DER_n-hyHMsyg",
		phone: "",
		storeId: "",
		unionid: "",
		vipcode: ""
	},
	wallet: {
		money: 0,
		point: 25205
	},
	tarbar: []
}

const getters = {}

const mutations = {
	SETUSERINFO: (state, userInfo) => {
		state.userInfo = userInfo
	},
	SETWALLET: (state, wallet) => {
		state.wallet = wallet
	},
	SETTABBAR: (state, tabbar) => {
		state.tabbar = tabbar
	},
}

const actions = {
	toLogin({
		commit,
		state
	}, params) {
		getUser(state.userInfo.openId).then(res => {
			const {
				data: {
					info,
					wallet
				}
			} = res
			info.openId = 'ovsdCxF4tmAuRU9DER_n-hyHMsyg'
			// info.openId = info.openid
			commit('SETUSERINFO', info)
			const wall = {
				money: wallet.money,
				point: wallet.point
			}
			commit('SETWALLET', wall)
			console.log("获取用户信息")
		})

		// 工具栏
		var tarbar = []
		tarbar.push({
			pagePath: '/pages/index/index',
			text: '首页',
			selectedIconPath: "home-fill",
			iconPath: "home",
		})

		tarbar.push({
			pagePath: '/pages/index/store',
			text: '附近门店',
			selectedIconPath: "list-dot",
			iconPath: "list-dot",
		})

		tarbar.push({
			pagePath: '/pages/index/mycenter',
			text: '个人中心',
			selectedIconPath: "account-fill",
			iconPath: "account",
		})
		commit('SETTABBAR', tarbar)
	},
	pageChange({
		commit,
		state
	}, params) {
		var url = params
		var bar = state.tabbar.find(item => item.pagePath.indexOf(url) !== -1)
		if (bar) {
			uni.switchTab({
				url
			})
		} else {
			uni.navigateTo({
				url
			})
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
