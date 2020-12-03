import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import themes from '../constants/themes';
import languages from '../constants/languages';
import request from '../config/request';
import SpinnerComponent from '../components/SpinnerComponent';
import HeaderComponent from '../components/Header/HeaderMain';
import HorizonatlScrollView from '../components/HorizontalScrollView';
import NewsFeedView from '../components/NewsFeedView';
import { fetchAPIData } from '../utils';

function HomeScreen({ navigation }) {

    const [headingData, setHeadingData] = useState([]);
    const [newsFeed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setHeadingData(request);
        fetchArticles(request[0].endPoint);

    }, []);


    const fetchData = async (index) => {

        setError(false); setLoading(true);
        await fetchArticles(request[index].endPoint);

    }

    const fetchArticles = async (req) => {

        setFeed([]);
        await fetchAPIData(req)
            .then(async (response) => {

                await setLoading(false);
                await setFeed(response.data.articles);

            }).catch(async (error) => {
                await setLoading(false);
                await setError(true);

            })

    }


    return (

        <View style={styles.container}>
            <HeaderComponent title={languages.news} />

            {
                headingData.length > 0 &&

                <View style={{ flex: 0.1, justifyContent: 'center', marginBottom: 10 }}>
                    <HorizonatlScrollView datas={headingData} onPress={(index) => fetchData(index)} />
                </View>

            }

            {

                loading === true ?

                <View style={{ ...styles.feedContainer }}>
                    <SpinnerComponent />
                </View>

                :

                error === true ?

                <View style={{ ...styles.feedContainer }}>
                    <Text>News Feed Empty !!</Text>
                </View>

                :

                <View style={{ ...styles.newsFeed }}>
                    <NewsFeedView newsFeed={newsFeed} onPress={article => navigation.push('Details', { data: JSON.stringify(article)}) }/>
                </View>

            }


        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: themes.white, flex: 1
    },

    feedContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },

    newsFeed: {
        flex: 1, paddingHorizontal: 10
    }
})