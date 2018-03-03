import {commonConfig} from './config'
import axios from 'axios'

function setParams({appid, action, params, controller}) {
  commonConfig.appcontext.appid = appid || 'test'
  commonConfig.servicecontext.viewid = controller
  commonConfig.servicecontext.params = params || {}
  commonConfig.servicecontext.actionname = action || 'handler'
}

class _ {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  static formatDate(date, fmt) {
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return fmt
  }

  static setStorage(key, value) {
    let saveObj = window.localStorage._saveObj_
    if (!saveObj) {
      saveObj = {}
    } else {
      saveObj = JSON.parse(saveObj)
    }
    saveObj[key] = value
    window.localStorage._saveObj_ = JSON.stringify(saveObj)
  }

 static getStorage(key, def) {
    let saveObj = window.localStorage._saveObj_
    if (!saveObj) {
      return def
    }
    saveObj = JSON.parse(saveObj)
    let ret = saveObj[key]
    return ret || def
  }

 static removeStorageItem(key) {
    let saveObj = window.localStorage._saveObj_
    if (saveObj) {
      saveObj = JSON.parse(saveObj)
      delete saveObj[key]
      window.localStorage._saveObj_ = JSON.stringify(saveObj)
    }
  }

  clearStorage() {
    window.localStorage.clear()
  }
}

export function setConfig(ip, port) {
  window.summer.setConfig({
    host: ip,
    port: port
  })
}

export function getData(opts, success, error) {

}
