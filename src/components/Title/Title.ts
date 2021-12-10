import './Title.css';
import { html } from '../../utils/html';

interface Props {
  text: string
}

export function Title({ text }: Props): Element {
  return html`
    <h1 class="title">${text}</h1>
  `;
}
