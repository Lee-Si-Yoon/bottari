import { Tmpl, html } from './taggedTemperateLiterals';

abstract class View<T> {
  constructor(public data: T) {}

  template(data: T) {
    return html``;
  }

  render() {
    const wrapEl = document.createElement('div');
    wrapEl.innerHTML = this.template(this.data).toHtml();

    return wrapEl.children[0]!;
  }
}

type User = {
  name: string;
  age: number;
};

class UserView extends View<User[]> {
  override template(): Tmpl {
    return html`<div class="users">
      ${this.data.map(
        (user) =>
          html`<div class="user">
            <input type="checkbox" />
            <span>${user.name}</span>
            <span>${user.age}</span>
          </div>`,
      )}
    </div>`;
  }
}

const main = () => {
  const users: User[] = [
    { name: 'idy', age: 20 },
    { name: 'idy', age: 21 },
    { name: 'idy', age: 22 },
  ];

  document.body.append(new UserView(users).render());
};

main();
