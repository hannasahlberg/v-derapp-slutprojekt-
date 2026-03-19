import { View, Text, FlatList } from "react-native"
import { useContext } from "react";
import { useRouter } from "expo-router";
import Background from "../Componens/Background";
import WeatherCard from "../Componens/WeatherCard";
import { WeatherContext } from "../Context/weatherContext";

const favorites = () => {

    const {favoriteCities, setCurrentCity} = useContext(WeatherContext);
    const router = useRouter();

    return(
        <Background>
        <Text style={{fontSize: 40, color: "white"}}> Favoriter </Text>
        <View style={{justifyContent: "center"}}>
        <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <WeatherCard
            city={item.name}
            country={item.country}
            temp={item.temp}
            description={item.description}
            icon={item.icon}
            onPress={() => {
              setCurrentCity(item.name);
              router.push("/");
            }}
          />
        )}
      />

        </View>
        
        </Background>
    )
}

export default favorites;

