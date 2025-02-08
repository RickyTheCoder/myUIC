import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MyUIC Home</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://registration.uic.edu')}>
          <FontAwesome5 name="clipboard-list" size={40} color="#e60000" />
          <Text style={styles.label}>Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://apps.uic.edu')}>
          <Entypo name="app-store" size={40} color="#e60000" />
          <Text style={styles.label}>UIC Apps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://campusgroups.uic.edu')}>
          <MaterialIcons name="event" size={40} color="#e60000" />
          <Text style={styles.label}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://transcripts.uic.edu')}>
          <Feather name="file-text" size={40} color="#e60000" />
          <Text style={styles.label}>Transcript / Grades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://maps.uic.edu')}>
          <Ionicons name="map" size={40} color="#e60000" />
          <Text style={styles.label}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://audit.uic.edu')}>
          <Feather name="check-square" size={40} color="#e60000" />
          <Text style={styles.label}>Audit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://schedule.uic.edu')}>
          <FontAwesome5 name="calendar-check" size={40} color="#e60000" />
          <Text style={styles.label}>Schedule Meetings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://uipay.uic.edu')}>
          <FontAwesome5 name="money-check-alt" size={40} color="#e60000" />
          <Text style={styles.label}>UI Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://uic.blackboard.com/?new_loc=%2Fultra%2Fcalendar')}>
          <FontAwesome5 name="chalkboard-teacher" size={40} color="#e60000" />
          <Text style={styles.label}>Blackboard</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
});
