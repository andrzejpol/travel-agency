/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.error = err => {
  throw new Error(err);
};

configure({ adapter: new Adapter() });