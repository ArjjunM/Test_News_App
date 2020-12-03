import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import themes from '../constants/themes';

function HorizonatlScrollView({ datas, ...props }) {

    const [active, setActive] = useState(0);

    const fetchData = async (index, val) => {

        setActive(val);
        props.onPress(index)

    }

    return (
        <FlatList
            data={datas}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Button
                    mode={active === index ? "contained" : "outlined"}
                    onPress={() => fetchData(item.index, index)}
                    color={themes.secondary}
                    testID={item.title}
                    style={{ margin: 5 }}>
                    {item.title}
                </Button>
            )}
        />

    )
}

export default HorizonatlScrollView
