import './index.css';
import { render } from '../utils/render';
import { App } from '../components/App/App';
import { getData } from '../api/getData';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

(async () => {
  const rootElement = document.getElementById('root');

  try {
    const app = App({ isLoading: true, data: [] });
    render(app, rootElement);

    const data = await getData();
    const appWithData = App({ isLoading: false, data });
    render(appWithData, rootElement);
  } catch (error) {
    render(ErrorMessage({ message: error.message }), rootElement);
  }
})();
