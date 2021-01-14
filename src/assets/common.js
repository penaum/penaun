// 转时间格式
export function formateDateTime(inputTime) {
  if (inputTime) {
    var date = new Date(inputTime)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    var d = date.getDate()
    d = d < 10 ? '0' + d : d
    var h = date.getHours()
    h = h < 10 ? '0' + h : h
    var minute = date.getMinutes()
    minute = minute < 10 ? '0' + minute : minute
    var second = date.getSeconds()
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  } else {
    return
  }
}
// 判断空 null undefined
export function isNullUndefined(val) {
  if (!val || val === 'null' || val === 'undefined') {
    return ''
  }
  return val
}
// 定时任务需要的randomID
export function uuid() {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = '4'
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // eslint-disable-line no-bitwise
  s[8] = '-'
  s[13] = '-'
  s[18] = '-'
  s[23] = '-'
  const uuid = s.join('')
  return uuid
}
// element 时间快捷选择
export function pickerOptions() {
  return {
    shortcuts: [{
      text: '今天',
      onClick(picker) {
        picker.$emit('pick', [new Date(), new Date()])
      }
    }, {
      text: '昨天',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', [date, date])
      }
    }, {
      text: '最近一周',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      }
    }]
  }
}
// 时间显示刚刚
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
// 复制文本信息
export function copyText(value) {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', value)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 9999)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    alert('复制成功')
    // window.showTips('复制成功', 'success')
  }
  document.body.removeChild(input)
}
