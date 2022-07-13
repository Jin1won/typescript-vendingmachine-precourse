import { domCreator, domSelector } from '../utils/dom';
import { SELECTOR } from '../constants/index';

class Navbar {
  btnNames: string[];

  constructor() {
    this.btnNames = ['상품 관리', '잔돈 충전', '상품 구매'];
  }

  createNavBtnElements(): HTMLElement {
    const newNode: HTMLElement = domCreator('ul');

    this.btnNames.forEach((name) => {
      const btnNode: HTMLElement = domCreator('li');
      const btnElement: HTMLElement = domCreator('button');
      btnElement.innerHTML = name;
      btnNode.appendChild(btnElement);

      btnNode.style.listStyle = 'none';
      btnNode.style.margin = '10px';

      newNode.appendChild(btnNode);
    });

    newNode.style.display = 'flex';
    newNode.style.flexDirection = 'row';

    return newNode;
  }

  addNavBtnElements(newNode: HTMLElement): void {
    const appElement: HTMLElement | null = domSelector(SELECTOR.APP);
    appElement?.appendChild(newNode);
  }
}

export default Navbar;
