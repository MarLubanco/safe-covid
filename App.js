import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Notifications } from 'expo';


export default function App() {

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
    time:  Date.now() + ((1000 * 60) * 60), // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
    repeat: 'hour'
  };
  Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);

  return (
    <View style={styles.container}>
      <View style={{height: 500, width: 300, backgroundColor: 'red',borderRadius:20}}>
        <View style={{marginTop: 20, height: 500, width: 300, backgroundColor: 'yellow',borderRadius:20}}>
          <View style={{marginTop: 20, height: 500, width: 300, backgroundColor: 'purple',borderRadius:20}}>
            <View style={{marginTop: 20, height: 500, width: 300, backgroundColor: 'white',borderRadius:20}}>
            <Text style={{alignSelf:'center', marginLeft: 20, fontSize: 20 ,marginTop: '20%'}}>Não se preocupe, nós estaremos te alertando sobre o momento que você deverá trocar
            de mascara!
          </Text>
          <Text style={{alignSelf:'center', color: 'grey',fontSize: 15 ,marginTop: '30%', fontWeight: 'bold'}}> Estaremos tentando te manter seguro</Text>
          <Text style={{alignSelf:'center', color: '#2066d6', fontWeight: 'bold', fontSize:32,marginTop: '40%'}}>#CHEGACOVID19</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2066d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerr: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: '30%',
    justifyContent: 'center',
  },
  fonte: {
    color:'white',
    fontSize: 30
  }
});
