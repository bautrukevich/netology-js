import './Loading.css';
import { html } from '../../utils/html';

export function Loading(): Element {
  return html`
    <div class="loading">
      <div class="loading__container">
        <div class="loading__ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `;
}
