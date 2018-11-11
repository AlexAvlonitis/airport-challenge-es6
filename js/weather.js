export default class Weather {
  constructor() {
    this.states = ['stormy', 'sunny', 'rainy', 'snowy'];
  }

  current() {
    return this.states[Math.floor(Math.random() * this.states.length)];
  }
}