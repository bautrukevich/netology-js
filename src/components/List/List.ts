import './List.css';
import { html } from '../../utils/html';
import type { Item } from '../../api/getData';

function ListItem({
  title, itemsCount, link,
}: Item): Element {
  return html`
    <li class="list__item">
      <a class="list__link" href="${link}">
        <span class="list__item-title">${title}</span>
        <span class="list__item-count">${itemsCount}</span>
      </a>
      <div class="list__circle"></div>
    </li>
  `;
}

export function List({ data }: { data: Item[] }): Element {
  return html`
    <ul class="list">
      ${data.map(({
    title, itemsCount, link,
  }) => ListItem({
    title, itemsCount, link,
  }))}
    </ul>`;
}
