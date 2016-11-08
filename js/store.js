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
      const keys = await AsyncStorage.getAllKeys();
      const brews = await AsyncStorage.multiGet(keys);
      return brews.map(brew => JSON.parse(brew[1]));
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

  destroy = async (uid) => {
    try {
      await AsyncStorage.removeItem(uid)
      await this.emit('change')
    } catch (error) {
      console.log(error);
    }
  }
}

const store = new Store()

export default store;
