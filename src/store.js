import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    nextPage: null,
  },
  mutations: {
    ADD_VIDEO: (state, video) => {
      state.videos.push(video);
    },
    SET_NEXT_PAGE: (state, pageId) => {
      state.nextPage = pageId;
    },
  },
  actions: {
    addVideo: (context, video) => context.commit('ADD_VIDEO', video),
    setNextPage: (context, pageId) => context.commit('SET_NEXT_PAGE', pageId),
  }
})
