import React, { Component } from 'react';

import {
    Platform,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        let query = this.props.navigation.state.params.searchTerm;
        console.log(`Received query param: ${query}`)
        if (query)
            this.props.getCharacters(query);
        else
            this.props.getCharacters();
    }

    render() {
        let characters = ""
        if(this.props.characters){
            characters = this.props.characters.map((item, index)=>{
                let thumbnail = null;
                if (item.thumbnail)
                    thumbnail = item.thumbnail.path + '.' + item.thumbnail.extension;
                
                let textIndex = 'text-' + index;
                let imageIndex = 'image-' + index;

                let dimensions = Dimensions.get('window');
                let screenWidth = dimensions.width;
                return (
                    <View>
                        <Text key={textIndex}>{item.name}</Text>
                        <Image key={imageIndex} style={{width: screenWidth, height: screenWidth}} source={{ uri: thumbnail }} />
                    </View>
                );
            });
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>
                <ScrollView>
                    {characters}
                </ScrollView>
            </View>
        );
    }
            // characters = this.props.characters.map((item, index)=>{
            //     return (
            //     <View>
            //         <Text key={textIndex}>{item.name}</Text>
            //         <Image key={imageIndex} style={styles.image} source={{uri: thumbnail}}/>
            //     </View>);
            // });
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        fontWeight: "bold",
        marginBottom:20
    },
    image: {
        width: 400,
        height: 400
    }
})