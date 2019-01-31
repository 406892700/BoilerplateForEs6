import './index.scss';
import name from './src/hello';

console.log(name);

if (module.hot) {
  module.hot.accept();
}
