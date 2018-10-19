// import Vue from 'vue'
export const setIsAutnenticated = (state, data) => {
    state.isAutnenticated = data
}

export const setUser = (state, data) => {
    state.user = data
    // console.log(state)
    // Vue.set(state.user,state.user.avatar,data)
}

export const setProfile = (state, data) => {
    state.profile = data
}
export const setLoading = (state, data) => {
    state.loading = data
}
export const setProfiles = (state, data) => {
    state.profiles = data
}


//改变头像方法
export const setUserAvatar = (state, y) => {
    state.user.avatar = y
}