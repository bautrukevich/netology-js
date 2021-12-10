import './List.css';
import { html } from '../../utils/html';
import { Item } from '../../api/getData';

function ListItem({ title, itemsCount }: Item): Element {
  return html`
    <li class="list__item">
      <a class="list__link" href="">
        <span class="list__item-title">${title}</span>
        <span class="list__item-count">${itemsCount}</span>
      </a>
    </li>
  `;
}

export function List({ data }: { data: Item[] }): Element {
  return html`
    <ul class="list">
      ${data.map(({ title, itemsCount }) => ListItem({ title, itemsCount }))}
    </ul>`;
}
