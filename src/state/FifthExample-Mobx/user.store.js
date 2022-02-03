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
      cangeUserJob: action
    })
  }

  changeUserName(name) {
    this.detail.name = name
  }

  cangeUserJob(job) {
    this.job = job
  }
}

const observableUserStore = new User()
export default observableUserStore
