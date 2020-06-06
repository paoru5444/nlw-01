import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
// import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

// interface Cities {
//   label: string,
//   value: string,
// }

const Home = () => {
  const navigation = useNavigation()

  // const [ufs, setUfs] = useState<string[]>([])
  // const [cities, setCities] = useState<Cities[]>([])

  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')

  const [selectedUf, setSelectedUfs] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  function handleNavigateToPoints() {
    navigation.navigate("Points", { uf, city })
  }

  // useEffect(() => {
  //   axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
  //     const ufInitials = response.data.map(uf => uf.sigla)
  //     setUfs(ufInitials)
  //   })
  // }, [])

  // useEffect(() => {
  //   if (selectedUf === '0') return

  //   axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
  //     const cityNames = response.data.map(city => {
  //       return { label: city.nome as string, value: city.nome }
  //     })
  //     console.log(cityNames)
  //     setCities(cityNames)
  //   })
  // }, [selectedUf])

  function handleSelectUf(event: React.ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value
    setSelectedUfs(uf)
  }

  function handleSelectCity(event: React.ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value
    setSelectedCity(city)
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu Marketplace de coleta de residuos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          {/* <RNPickerSelect
          style={{ ...styles.input as object }}
          onValueChange={(value) => console.log(value)}
          placeholder="Selecione a Cidade"
          items={cities}
        /> */}

          <TextInput
            style={styles.input}
            onChangeText={setUf}
            placeholder="Digite a UF"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
          />

          <TextInput
            style={styles.input}
            onChangeText={setCity}
            placeholder="Digite a Cidade"
            autoCorrect={false}
          />

          <RectButton
            style={styles.button}
            onPress={handleNavigateToPoints}
          >
            <View style={styles.buttonIcon}>
              <Text>
                <Feather name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>

            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5'
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});
export default Home