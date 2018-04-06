import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export default class Search extends Component {
  onSearch = (() => {
    let searchText = this.props.text || null;
    this.props.navigation.navigate('SearchResults', { searchTerm: searchText });
  });

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='Your search query'
          placeholderTextColor='gray'
          onChangeText={(text) => this.props.onSearchTextChange(text)}
          value={this.props.text}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Search'
            color='white'
            onPress={this.onSearch}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue'
  },
  textInput: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    textAlign: 'center'
  }
});