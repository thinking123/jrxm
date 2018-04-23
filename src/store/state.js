export default {
  user:localStorage['user'] != null ? JSON.parse(localStorage['user']) : null,
  devInfo:{}
}
