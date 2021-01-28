import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Pages
import SplashScreen from './pages/splashScreen/SplashScreen';
import Contacts from './pages/contacts/Contacts';
import RegisterContact from './pages/registerContact/RegisterContact';
import EditContact from './pages/editContact/EditContact';

// Context
import { ContactsProvider } from './contexts/contactsContext';

const Stack = createStackNavigator();

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);

	}, [])

	if (isLoading) {
		return <SplashScreen />
	}

	return (
		<NavigationContainer>
			<ContactsProvider>
				<Stack.Navigator
					screenOptions={{
						cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
					}}>
					<Stack.Screen options={{ headerShown: false }} name="Contacts" component={Contacts} />
					<Stack.Screen options={{ headerShown: false }} name="RegisterContact" component={RegisterContact} />
					<Stack.Screen options={{ headerShown: false }} name="EditContact" component={EditContact} />
				</Stack.Navigator>
			</ContactsProvider>
		</NavigationContainer>
	);
}

export default App;