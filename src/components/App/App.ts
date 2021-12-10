import './App.css';
import { Title } from '../Title/Title';
import { List } from '../List/List';
import { Loading } from '../Loading/Loading';
import { html } from '../../utils/html';
import type { Item } from '../../api/getData';

interface Props {
  isLoading: boolean
  data: Item[]
}

export function App({ isLoading, data }: Props): Element {
  if (isLoading) {
    return Loading();
  }

  const title = Title({
    text: 'Изучайте <a class="title__link" href="#">актуальные темы</a>',
  });
  const list = List({ data });

  return html`
    <main class="app">
      <section class="app__container">
        ${title}
        ${list}
      </section>
    </main>
  `;
}
