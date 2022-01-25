import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
      <h1>Hello there, welcome</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
  }
}
