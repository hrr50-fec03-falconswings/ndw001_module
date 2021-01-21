// const configure = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');
// configure.configure({ adapter: new Adapter() });



import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
export { shallow, mount, render }
export default Enzyme;