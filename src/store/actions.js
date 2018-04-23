import {login as apiLogin} from '@/api'

const login = async ({commit, state}, data) => {
  await apiLogin()
  return ''
}


export default {
  login
}
