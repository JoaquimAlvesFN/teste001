import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Alert, Image } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


interface CoordsProps {
  latitude: Number,
  longitude: Number
}

interface PlacesProps {
  name: string,
  latitude: Number,
  longitude: Number,
  image: string;
}

const data = [
  {
    "name":"Loja De Roupas",
    "latitude": -3.821388,
    "longitude": -38.511180,
    "image": "https://i.pinimg.com/564x/13/98/89/1398895f810bfe2ce5aaa0187ab8998b.jpg"
  },
  {
    "name":"Oficina Mecanica",
    "latitude": -3.822009,
    "longitude": -38.508958,
    "image": "https://static.ferramentaskennedy.com.br/storage/assets/Empreendedorismo-oficina-M1.jpg"
  },
  {
    "name":"Supermercado",
    "latitude": -3.8227811,
    "longitude": -38.5097224,
    "image": "https://conteudo.imguol.com.br/c/entretenimento/de/2020/05/13/supermercado-1589402529199_v2_450x337.jpg"
  },
  {
    "name":"PetShop",
    "latitude": -3.8211301,
    "longitude": -38.5092288,
    "image": "https://380342-1192392-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/como-montar-petshop-696x522.jpg"
  },
  {
    "name":"Shopping",
    "latitude": -3.8192091,
    "longitude": -38.498875,
    "image": "https://www.jornalcontabil.com.br/wp-content/uploads/2020/05/vista-superior-interior-shopping-center_23-2148225020.jpg"
  },
  {
    "name":"Posto de Gasolina",
    "latitude": -3.8179934,
    "longitude": -38.4969532,
    "image": "https://minaspetro.com.br/blog/wp-content/uploads/2017/12/como-escolher-o-melhor-local-para-montar-um-posto-de-combustivel-770x400.jpeg"
  }
];

const Home: React.FC = () => {
  const [region, setRegion] = useState<CoordsProps | {}>({});

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       setRegion({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       });
  //     },
  //     error => Alert.alert('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
    
  // }, []);

  return (
      <View style={{flex: 1}}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent"/>

        <MapView 
          style={{flex: 1}}
          initialRegion={{
            latitude: -3.82416226901114,
            longitude: -38.50971559993923,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0921,
          }}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          showsIndoors={false}
        >
          {data.map(({name, latitude, longitude, image}: PlacesProps) => (
            <Marker
              key={name}
              coordinate={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0921,
              }}
            >
              <Callout>
                <Text>{name}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
  );
}

export default Home;