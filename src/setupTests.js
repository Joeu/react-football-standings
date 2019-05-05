import Enzyme from 'enzyme';
import EnzyneAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzyneAdapter(),
  disableLifecycleMethods: true
});