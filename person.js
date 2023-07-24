export default class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  name() {
    return `${this.firstName} ${this.lastName}`
  }
}
