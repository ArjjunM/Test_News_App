import React from 'react'
import { View, FlatList } from 'react-native';
import { Card, Title, Subheading } from 'react-native-paper';
import moment from 'moment';

function NewsFeedView({ newsFeed, ...props }) {
    return (
        <FlatList
            data={newsFeed}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Card style={{ marginBottom: 10, elevation: 5, borderColor: '#D3D3D3', borderRightWidth: 0.5, borderLeftWidth: 0.5, marginTop: 5 }} onPress={() => props.onPress(item)}>
                    {
                        item.urlToImage &&

                        <Card.Cover source={{ uri: item.urlToImage }} style={{ height: 150 }} resizeMode="contain"/>

                    }
                    <Card.Content>
                        <Title numberOfLines={3} style={{ fontSize: 14, textAlign: 'justify' }}>{item.title}</Title>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Subheading style={{ flex: 2, flexWrap: 'wrap', fontSize: 12, textAlign: 'left' }}>{item.author}</Subheading>
                            <Subheading style={{ flex: 1, flexWrap: 'wrap', fontSize: 12, textAlign: 'right' }}>{moment(item.publishedAt).startOf('hour').fromNow()}</Subheading>
                        </View>
                    </Card.Content>
                </Card>
            )}
        />
    )
}

export default NewsFeedView
