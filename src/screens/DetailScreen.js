import React from 'react'
import { View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import themes from '../constants/themes';
import languages from '../constants/languages';
import { Title, Subheading, Headline, Paragraph } from 'react-native-paper';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';

import HeaderComponent from '../components/Header/SubHeader';


function DetailScreen({ route, navigation }) {

    const article = JSON.parse(route.params.data);

    return (

        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={article.source.name} />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                {

                    article.urlToImage &&
                    <Image source={{ uri: article.urlToImage }} style={{ height: 200 }} resizeMode='cover' resizeMethod="resize" />

                }

                <View style={{ ...styles.innerContainer }}>
                    <Title style={{ fontSize: 16, textAlign: 'justify' }}>{article.title}</Title>
                    <Headline style={{ ...styles.header }}>{languages.author}</Headline>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Subheading style={{ ...styles.authorInfo, flex: 2, textAlign: 'left' }}>{article.author}</Subheading>
                        <Subheading style={{ ...styles.authorInfo, flex: 1, textAlign: 'right', color: themes.primary }}>{moment(article.publishedAt).startOf('hour').fromNow()}</Subheading>
                    </View>
                    <View style={{ ...styles.innerSpace }}>
                        <Headline style={{ ...styles.header }}>{languages.description}</Headline>
                        <Paragraph style={{ textAlign: 'justify', fontSize: 14 }}>{article.description}</Paragraph>
                    </View>
                    <View style={{ ...styles.innerSpace }}>
                        <Headline style={{ ...styles.header }}>{languages.content}</Headline>
                        <HTMLView
                            value={`<div>${article.content}</div>`}
                            stylesheet={styles}
                        />
                    </View>

                    {

                        article.url &&
                        <View style={{ ...styles.innerSpace, justifyContent: 'center', alignItems: 'center' }}>
                            <Headline onPress={() => Linking.openURL(article.url)} style={{ ...styles.header }}>{languages.more}</Headline>
                        </View>

                    }

                </View>
            </ScrollView>

        </View>

    )
}

export default DetailScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: themes.white, flex: 1
    },

    innerContainer: {
        marginHorizontal: 10, top: 5, marginBottom: 5
    },

    header: {
        fontSize: 16, textDecorationLine: 'underline', fontWeight: '600', color: themes.primary
    },

    authorInfo: {
        flexWrap: 'wrap', fontSize: 14
    },

    innerSpace: {
        marginTop: 10
    },

    div: {
        textAlign: 'justify',
        fontSize: 14,
        flexWrap: 'wrap',
        color: '#262626',
        lineHeight: 25
        
    }

})