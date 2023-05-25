import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './src/pages/Inicio';
import NovoContato from './src/pages/NovoContato';
import ListaContatos from './src/pages/ListaContatos';
import Contatos from './src/pages/Contatos';

const Bloco = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Bloco.Navigator>
        <Bloco.Screen name="Início" component={Inicio}/>
        <Bloco.Screen name="NovoContato" component={NovoContato}/>
        <Bloco.Screen name="ListaContatos" component={ListaContatos}/>
        <Bloco.Screen name="Contatos" component={Contatos}/>
      </Bloco.Navigator>
    </NavigationContainer>
  )
}

