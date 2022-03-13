import { observable, makeObservable, action, computed } from 'mobx'
class User {
  detail = {
    name: 'Shinji',
    email: 'shinji.parademeatasanar@teste.com'
  }
  job = null

  constructor() {
    makeObservable(this, {
      detail: observable,
      job: observable,
      changeUserName: action,
      changeUserJob: action,
      liquidValue: computed
    })
  }

  changeUserName(name) {
    this.detail.name = name
  }

  changeUserJob(job) {
    this.job = job
  }

  get liquidValue() {
    let finalValue = 0
    if (this.job) {
      finalValue = this.job.grossValue - this.job.tribute * 100
    }
    return finalValue
  }
}

const observableUserStore = new User()
export default observableUserStore
