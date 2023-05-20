import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash';

export default function Stats({ stats }) {
  const barStyle = (num) => {
    let color= 'gray'
    if (num > 80) {
      color = '#2BBD0E';
    } else if (num > 60 && num <= 80) {
      color = '#9DDA11';
    } else if (num > 40 && num <= 60) {
      color = '#DA9D11'
    }
    if (num > 20 && num <= 40) {
      color = '#DA3211'
    }
    return {
        backgroundColor: color,
        width: `${num}%`
      }
  }
  return (
    <View style={StyleSheet.content}>
      <Text style={styles.title}>Base Stats</Text>
      {
        map(stats, (item, index) => (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName }>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyle(item.base_stat)]} />
            </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}


const styles = StyleSheet.create({
  contene: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20
  },
  block: {
    flexDirection: 'row',
    paddingVertical:5
  },
  blockTitle: {
    width: '30%',
    marginLeft: 20
  },
  statName: {
    fontSize: 12,
    color:'#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width:'12%',
    fontSize: 12,
  },
  bgBar: {
    width: '80%',
    height: 5,
    right:10,
    backgroundColor: '#dedede',
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20
  }
})
