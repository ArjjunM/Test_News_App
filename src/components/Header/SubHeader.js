import React from 'react'
import themes from '../../constants/themes';
import { Appbar } from 'react-native-paper';

const SubHeaderComponenet = ({ title, ...props }) => {

    return (
        <Appbar.Header style={{ backgroundColor: themes.primary }}>
            <Appbar.BackAction onPress={() => { props.navigation.pop() }} />
            <Appbar.Content title={title} titleStyle={{ fontSize: 18, fontWeight: 'bold', color: themes.white, flexWrap: 'wrap' }} />
        </Appbar.Header>
    );
}

export default SubHeaderComponenet;
