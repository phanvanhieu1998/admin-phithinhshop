import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import category from './modules/category'
import brand from './modules/brand'
import slider from './modules/slider'
import supplier from './modules/supplier'
import product from './modules/product'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    category,
    brand,
    slider,
    supplier,
	product
  },
  getters
})

export default store
