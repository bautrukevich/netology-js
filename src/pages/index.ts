import './index.css';
import { render } from '../utils/render';
import { App } from '../components/App/App';
import { getData } from '../api/getData';

(async () => {
  const rootElement = document.getElementById('root');
  const app = App({ isLoading: true, data: [] });
  render(app, rootElement);

  const data = await getData();
  render(App({ isLoading: false, data }), app);
})();
