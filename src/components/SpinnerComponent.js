import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';

function SpinnerComponent() {
    return (

        <ActivityIndicator animating={true} color={Colors.red800} />
        
    )
}

export default SpinnerComponent
