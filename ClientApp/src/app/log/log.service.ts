import invert from 'invert-color'
import { castArray, cloneDeep, keys, lowerFirst } from 'lodash'
import * as moment from 'moment'
import { ensureUnique } from 'utilizes/ensure-unique'
import { prefix } from 'utilizes/prefix'
import { Injectable, isDevMode } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {

    this.debugClass(this)

    if (this.devMode) {

      window['moment'] = moment

      window['application'] = this.instances

      this.onTime('Init', '#e7c5ad')

      console.dir(this.instances)

    }

  }

  private readonly devMode = isDevMode()

  private readonly instances = new class application { }

  private readonly intervals = {}

  interval(handler: (...args: any[]) => boolean, timeout?: number, ...args: any[]) {

    const handle = window.setInterval(
      (...args: any[]) => {
        try {

          const finish = handler(...args)

          if (finish) this.clearInterval(handle)

        } catch (e) {
          this.error(e).clearInterval(handle)
        }
      },
      timeout,
      ...args
    )

    this.intervals[handle] = true

    return handle

  }

  clearInterval(handle?: number) {

    clearInterval(handle)

    this.intervals[handle] = false

    return this

  }

  onTime(message: string, backgroundColor = '#fff') {

    console.debug(`%c ${message} on ${moment().format('h:mm:ss.SSS a')} :`, `background-color:${backgroundColor};color:${invert(backgroundColor)}`)

    return this

  }

  debugClass(that) {

    const { devMode, instances } = this

    if (devMode) instances[ensureUnique(lowerFirst(that.constructor.name), keys(instances))] = that

    return this

  }

  now(...args) {

    if (this.devMode) {

      this.onTime('Cloned', '#00BFFF')

      args.length ? console.trace(...args.map(cloneDeep)) : console.dir(cloneDeep(this.instances))

    }

    return this

  }

  error(...args) {

    const { devMode } = this

    console[devMode ? 'error' : 'trace'](`${prefix(!devMode && 'Error in ', moment().format('h:mm:ss.SSS'))} :`, ...args)

    return this

  }

  debug(...args) {

    if (this.devMode) console.trace(...args)

    return this

  }

  invoke(fn: Function, now = false) {

    if (this.devMode) this[!now ? 'debug' : 'now'](...castArray(fn()))

    return this

  }

}