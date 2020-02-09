import Vue from 'vue'
import Vuex from 'vuex'
import db from './db.json'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        projects: db
        },
    getters: {
        projetsfilter: state => {
            return filter => state.projects.filter(projets => {
                return projets.lang == filter
            })
        },
        projets: state => {
            return state.projects
        }
    },
    // mutations: {
    //   increment (state) {
    //     state.count++
    //   }
    // }
})
