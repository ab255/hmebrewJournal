import React, { Component } from 'react';
import eventEmitter from 'EventEmitter';
import { AsyncStorage } from 'react-native';

class Store extends eventEmitter {

  add = async (uid, brew) => {
    try{
      await AsyncStorage.setItem(uid, brew)
      await this.emit('change')
    } catch (error) {
      console.log(error);
    }
  }

  all = async () => {
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          let brews = stores.map(result => JSON.parse(result[1]));
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  edit = async (uid, brew) => {
    try {
      await AsyncStorage.mergeItem(uid, brew)
      await this.emit('change')
    } catch (error) {
      console.log(error);
    }
  }
}

const store = new Store()

export default store;
