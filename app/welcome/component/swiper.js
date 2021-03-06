import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet } from 'react-native';

export default class Slider extends Component {

    state = {
        content: [
            { title: 'Welcome', desc: 'Sign up for free music on your phone, tablet and computer.' },
            { title: 'Browse', desc: 'Explore top tracks, new relases and the right playlist for every moment.' },
            { title: 'Search', desc: 'Looking for that special album or artist? Just search and hit play.' },
            { title: 'Your Library', desc: 'Save any song, album or artist to your own music collection.' }
        ]
    }

    render() {
        return (
            <View style={{ flex: 0.5 }} >
                <Swiper
                    autoplay
                    dotColor={'rgba(255,255,255, 0.4)'}
                    activeDotStyle={{ width: 10, height: 10 }}
                    activeDotColor={'white'}
                    dotStyle={{ width: 10, height: 10 }}
                    paginationStyle={{ bottom: '1%', marginHorizontal: 10, }}
                    style={styles.wrapper}
                >
                    {this.state.content.map((element, index) =>
                        <View key={index} style={styles.wrapper} >
                            <Text style={styles.title} >{element.title}</Text>
                            <Text style={styles.desc} >{element.desc}</Text>
                        </View>
                    )}
                </Swiper>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: '100%',
        alignSelf: 'center',
        top: '8%'
    },
    title: {
        marginHorizontal: 15,
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    desc: {
        marginHorizontal: 15,
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        width: '80%',
        alignSelf: 'center'
    }
})