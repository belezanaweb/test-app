import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screen/products';
import ProdDescription from '../screen/prodDesc';

const MainStack = createStackNavigator(
	{
		ProductsScreen,
		ProdDescription,
	},
	{
		headerMode: 'none',
	}
);

const Routes = createAppContainer(createSwitchNavigator({ MainStack }));

export default Routes;
