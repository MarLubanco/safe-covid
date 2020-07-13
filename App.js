import { Notifications } from 'expo';
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
  Button,
} from "react-native";
import Carousel from "react-native-snap-carousel";


export default function App() {
  var cores = ['#8ADBAD', '#FF3B6F','#3e0a77']
  var images = [require('./assets/relogio.jpg'), require('./assets/3600338.jpg'),require('./assets/3625718.jpg')]
  console.log('Fucckkk')
  const localNotification = { 
    title: 'Troca de Mascara', 
    body: 'Vamos trocar de mascara para evitar o COVID-19, todos em segurança', // (string) - texto do corpo da notificação. 
    ios: {// (opcional) (objeto) - configuração de notificação específica para iOS. 
      sound: true // (opcional) (booleano) - se verdadeiro, reproduz um som. Padrão: false. 
    }, 
android: // (opcional) (objeto) - configuração de notificação específica para o Android. 
    { 
      sound: true, // (opcional) (booleano) - se verdadeiro, reproduza um som. Padrão: false. 
      priority: 'max', // (opcional) (min | low | high | max) - o Android pode apresentar notificações de acordo com a prioridade, por exemplo, uma notificação de alta prioridade provavelmente será mostrada como uma notificação de alerta. 
      sticky: false, // (opcional) (booleano) - se true, a notificação será pegajosa e não pode ser descartada pelo usuário. A notificação deve ser descartada programaticamente. Padrão: false. 
      vibrate: true // (opcional) (booleano ou array) - se verdadeiro, vibre o dispositivo. Uma matriz pode ser fornecida para especificar o padrão de vibração, por exemplo - - [0, 500]. 
    } 
  };
const schedulingOptions = {
    time:  Date.now() + (((1000 * 60) * 60) * 2), // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
    repeat: 'hour'
  };
  Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);

  var telas = [
    {
      id: 1,
      texto: "Você receberá um alerta a cada 2h para trocar de máscara"
    },
    {
      id: 2,
      texto: "CUIDE-SE, \n\n Lave as mãos. \n Use alcól em gel. \n Não abaixe a máscara para conversar com alguém."
    },
    {
      id: 3,
      texto: "Juntos venceremos o COVID-19"
    }
  ]

  function _renderItem({ item, index }) {
    return (
      <TouchableOpacity onLongPress={() => _removeList(item)} onPress={() => goToList(item)} style={{    marginTop: '60%',
      borderRadius: 20, backgroundColor: '#0B486B',
      height: '60%',
      width: '100%',
        backgroundColor: cores[item.id - 1]}}>
        <Image  style={{alignSelf:'center' ,height: 200, width: '100%', borderRadius: 10, opacity: 0.9}} source={images[item.id - 1]}/>
        <Text style={{marginLeft: '2%' , marginTop: '20%' , fontSize: 20, fontFamily:'Roboto',color: 'white' }}>
          {item.texto}
        </Text>
      </TouchableOpacity>
    );
  }
  
  return (
  
      <View style={styles.container} >
          <Carousel
            layout={"tinder"}
            ref={(ref) => (carousel = ref)}
            data={telas}
            sliderWidth={375}
            itemWidth={350}
            itemHeight={100}
            renderItem={_renderItem}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0194BE",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  containerr: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: '30%',
    justifyContent: 'center',
  },
  view : {
    marginTop: '10%',
    borderRadius: 20,
    // backgroundColor: cores[Math.floor(Math.random() * cores.length)],
    backgroundColor: '#0B486B',
    height: '100%',
    width: '100%'
    
  },
  fonte: {
    color:'white',
    fontSize: 30
  }
});
