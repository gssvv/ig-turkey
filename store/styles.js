export const state = () => ({
  logo: 'dark'
})

export const mutations = {
  setLogoStyle(state, style) {
    state.logo = style
  }
}
