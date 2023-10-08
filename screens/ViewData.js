import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';
// import { Svg, Circle } from 'react-native-svg'
// import progress from "react-native-svg"
  

const BatteryIndicator = ({route}) => {
    // function setValue(arg0: number): void {
    //     throw new Error('Function not implemented.');
    // }
    console.log(route)
    const voltage= route.params.voltage ?  route.params.voltage : 0;
     const current = route.params.current ? route.params.current : 0;
     const batteryCharge = route.params.battery ? route.params.battery : 0;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.indicator}>
          <Text style={styles.label}>Voltage</Text>
          <Text style={styles.value}>{voltage} V</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.label}>Current</Text>
          <Text style={styles.value}>{current} A</Text>
        </View>

      </View>
      <View style={styles.batteryChargeContainer}>
        <Text style={styles.label}>Battery Charge</Text>
        <View style={styles.batteryChargeIndicator}>
          <View
            style={{
              width: `${batteryCharge}%`,
              height: 40,
              backgroundColor: '#4CAF50', // Green color for the indicator
            }}
          />
        </View>
        <View style={styles.batteryChargeIndicator}>
          
        </View>
        <Text style={styles.value}>{batteryCharge}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
    width:300,
    // height:60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  batteryChargeContainer: {
    marginTop: 80,
    height:80,
    // height: 80,
    // width: 80,
  },
  batteryChargeIndicator: {
    height: 10,
    backgroundColor: '#E0E0E0', // Gray background for the indicator
    borderRadius: 5,
    overflow: 'hidden',
  },
 
});

export default BatteryIndicator;


