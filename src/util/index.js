// 标题
export const setTitle = (title = 'MockMa11') => {
  window.document.title = title
}

// 格式化日期
export const formatDate = (date = new Date()) => {
  // const yy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  const day = date.getDay()
  let dayCN = ''
  switch (day) {
    case 1:
      dayCN = '一'
      break
    case 2:
      dayCN = '二'
      break
    case 3:
      dayCN = '三'
      break
    case 4:
      dayCN = '四'
      break
    case 5:
      dayCN = '五'
      break
    case 6:
      dayCN = '六'
      break
    case 0:
      dayCN = '天'
      break
  }
  return `${mm}月${dd}日 星期${dayCN}`
}

// 背景色重置为白色
export const bgcReset = (color = '#fff') => {
  window.document.body.style.background = color
}

// 表单序列化
export const serialize = data => {
  const list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}
