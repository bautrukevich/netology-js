import './ErrorMessage.css';
import { html } from '../../utils/html';

interface Props {
  message: string
}
export function ErrorMessage({ message }: Props): Element {
  return html`<div class="error">
    <p class="error__title">Возникла ошибка:</p>
    <p class="error__message">${message}</p>
  </div>`;
}
