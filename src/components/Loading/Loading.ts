import './Loading.css';
import { html } from '../../utils/html';

export function Loading(): Element {
  return html`
    <div class="loading">Loading...</div>
  `;
}
