import Reactotron, { openInEditor } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(openInEditor())
  .connect();

tron.clear();

console.tron = tron;

export default tron;
