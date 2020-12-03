import React from 'react'
import themes from '../../constants/themes';
import { Appbar } from 'react-native-paper';

const HeaderComponenet = ({ title, ...props }) => {

    return (
        <Appbar.Header style={{ backgroundColor: themes.primary }}>
            <Appbar.Content title={title} titleStyle = {{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: themes.white }} />
        </Appbar.Header>
    );
}

export default HeaderComponenet;
