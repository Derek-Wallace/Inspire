import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
time = null
date = null
quote = null
weather = null
weatherUnit = 'F'
tasks = []
// image = 'https://lh3.googleusercontent.com/proxy/ELO93ZZQGz_M7pfqqZO6-FfcDRU28enmuzI1Yuh8YSE-6GCFbHEpFzJLB1YkyN7jW_Pxv9QfIq1v1T8lH66rErNoWorRNNXcrGyo4dg_dCgLaRvn5qBRdH3ym747eyKLxpQzVcehvLszooWGpfk'
user = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
