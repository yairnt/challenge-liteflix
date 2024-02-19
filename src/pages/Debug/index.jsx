import {
  useEffect,
  useContext
} from 'react';

import AuthProvider from '../../context/AuthContext';

import useProducts from '../../hooks/useProducts';

import {
  storeData,
  clearData,
  getData,
} from '../../helpers/storageData';

import Text from '../../components/Text';

function Debug() {
    const { users } = useContext(AuthProvider);

    const {
      products,
      loading,
      error,
    } = useProducts();

    console.info('users :', users);
    console.info('Products :', products);

    useEffect(() => {
      storeData({ message: 'Hola, esto es un ejemplo' });
  
      const data = getData();
      console.log('Datos almacenados:', data);
  
      clearData();
  
      const newData = getData();
      console.log('Datos después de limpiar:', newData);
    }, []);  

    return (
        <div>
            <Text
              customSize="40px"
              color="secondary-greenStrong"
              weight="700"
              underline
              styles={{
                marginLeft: 30,
              }}
            >
               Debug
            </Text>
        </div>
    )
}

export default Debug;
