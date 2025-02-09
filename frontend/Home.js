import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


export default function HomeScreen() {
  const [chatInput, setChatInput] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MyUIC Home</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://catalog.uic.edu/ucat/course-descriptions/')}>
          <FontAwesome5 name="clipboard-list" size={40} color="#e60000" />
          <Text style={styles.label}>Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://apps.apple.com/us/app/uic-safe/id1454417093')}>
          <Entypo name="app-store" size={40} color="#e60000" />
          <Text style={styles.label}>UIC Apps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://today.uic.edu/events/')}>
          <MaterialIcons name="event" size={40} color="#e60000" />
          <Text style={styles.label}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://registrar.uic.edu/student-records/transcripts/')}>
          <Feather name="file-text" size={40} color="#e60000" />
          <Text style={styles.label}>Transcript / Grades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://fimweb.fim.uic.edu/Maps.aspx')}>
          <Ionicons name="map" size={40} color="#e60000" />
          <Text style={styles.label}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://uachieve.apps.uillinois.edu/uachieve_uic_shib/')}>
          <Feather name="check-square" size={40} color="#e60000" />
          <Text style={styles.label}>Audit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://my.uic.edu/uPortal/f/welcome/normal/render.uP?u_tenantId=9357#/p/uAchieve-app_launcher.u29l1n240/max/render.uP')}>
          <FontAwesome5 name="calendar-check" size={40} color="#e60000" />
          <Text style={styles.label}>Schedule Meetings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://login.uillinois.edu/auth/SystemLogin/sm_login.fcc?TYPE=33554433&REALMOID=06-e5b1520c-d10f-419a-bce9-a59c4292488e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-J9ldxGzDajRVOCvCtHkKc2Pex3VVR3ifECA%2b1KBtU5c%2fEIF8mWDOJjqUJhESA8EV&TARGET=-SM-HTTPS%3a%2f%2flogin%2euillinois%2eedu%2faffwebservices%2fafflogin%2fsdnp%2fredirect%2ejsp%3fSPID%3dhttps-%3A-%2F-%2Feis%2eapps%2euillinois%2eedu-%2Fbanner%26SAMLRequest%3djZFLa8MwEIT-%2FitA9fshO64jYITQEAimEPHropcjKOhHIkquV0v78uimmoZfmuOx-%2BzOzMdPbZanIBh8qakqZRQgkYaY-%2FKnEp62C9HBZ1VUxSt7vg8-%2BLPZwnsA9KTnDPLroqTBGW4FKuRGtIDcS76bP685ixLeOeuttJqSOSI43ws9WYOhBbcDd1ESDtt1Sc-%2Fed8jjGBRGouswCkprZWw-%2FwjHE0ratNaJ3QMmi11dG-%2BKvlgdP2pMwfSDTNB9T4o4JxF2qtZPztmSHa2W6zWpT-%2F6NbCGHCULK2TcA2gpI3QCJT0MH3Lk6Z5FI2cyIdJkTJgkEGdF2mWZVLkTdGf4UYgqgv8gogBVga9ML6kLGHjUcJGSbFPJzxnPB1H4yJ7peRlqKWPkQ4lXGF3f-%2FxiCJ1Wd706jW91qmG87b76Ag-%3D-%3D%26RelayState%3d776ad303--b16c--46ca--9085--b12e6711fd16%26SigAlg%3dhttp-%3A-%2F-%2Fwww%2ew3%2eorg-%2F2000-%2F09-%2Fxmldsig-%23rsa--sha1%26Signature%3dNFvlM5mbrZ7o-%2FiOXhzvbY4pz-%2FN1TKEwx3zL0CtysvT-%2BpN80IM0D6xbq1eAIzJzFcDEyKC9Q3IgeWXoJLNUQAecTjibWigzd3ZbJhXN-%2F9gd7GAaLlqXkVEdLyupHCfjtZoAYl-%2Bu2gUsySUHyZL0LUq0RhR0DBW0RvfNMU7SYQmvDerWTOYf4E666h5fs-%2BF7Jtkuf8zSAHpEEDBNJwXfUsJnav9VJKknJjxdlKahKp-%2F3wYWl8QlyJR2BqZwHZy8HkGoswMDDZtV1QkpEta7QYn5CliB1Uxp-%2FZThUhmlMaRmdM-%2B-%2FH4gCRSSrOd-%2BzGGznXBRl3mZ5Q49LukgjHpHCqhstQ-%3D-%3D%26SMPORTALURL%3dhttps-%3A-%2F-%2Flogin%2euillinois%2eedu-%2Faffwebservices-%2Fpublic-%2Fsaml2sso')}>
          <FontAwesome5 name="money-check-alt" size={40} color="#e60000" />
          <Text style={styles.label}>UI Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://uic.blackboard.com/?new_loc=%2Fultra%2Fcalendar')}>
          <FontAwesome5 name="chalkboard-teacher" size={40} color="#e60000" />
          <Text style={styles.label}>Blackboard</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding': 'height'}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} 
      >
        <View style={styles.chatContainer}>
          <TextInput
            style={styles.chatInput}
            placeholder="Input prompt here"
            value={chatInput}
            onChangeText={setChatInput}
            placeholderTextColor="grey"
          />
          
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '30%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  chatContainer: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginBottom: 20,
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});
