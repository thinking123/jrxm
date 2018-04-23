export const COMMON_CHANGE_LOADING_BAR = 'COMMON_CHANGE_LOADING_BAR'
export const COMMON_IS_SLIDEBAR_SHOW = 'COMMON_IS_SLIDEBAR_SHOW'

export const ACCOUNT_TOKEN = 'ACCOUNT_TOKEN'
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT'
export const ACCOUNT_USER = 'ACCOUNT_USER'


const loadQueue = []

export default {
  [COMMON_CHANGE_LOADING_BAR](state , isLoading){
    if(isLoading){
      loadQueue.push(true)
    }else{
      loadQueue.pop()
    }

    state.isLoading = loadQueue.length > 0
  },
  [COMMON_IS_SLIDEBAR_SHOW](state , isSlideBarShow){
    state.isSlideBarShow = isSlideBarShow
  },
  [ACCOUNT_LOGOUT](state){
    state.user = null
  }
}
