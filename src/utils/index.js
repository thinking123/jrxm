
const API_SUCCESS = 200

export const showMessage = e => {
  const msg = (e instanceof Error) ? e.message : e
  // todo show message
  alert(msg)
}

export const parseRes = res => {
  if (res.result === API_SUCCESS) {
    return res.data
  }

  throw new Error(res.message ? res.message : '请求失败')
}

export const formatDateWithWeek = () => {
  const showDay = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  const day = time.getDay()

  return year + '年' + month + '月' + date + '日' + ' ' + showDay[day - 1]
}
