import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { SDRClient } from 'react-native-sdr'


const Screenone = () => {
    const renderLoading = () => {
        return (
            <View hcenter vcenter style={{ height: 140, borderWidth: 1, marginTop: 50 }}>
                <ActivityIndicator size="small" />
            </View>
        )
    }
    const getNotification = () => {
        return {
            notification: {
                title: "Liked your post",
                type: "LIKE",
                userName: "John Doe",
                icon: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
                onPress: (name) => this.handleNotificationPress(name),
                buttonStyle: { backgroundColor: "green", borderRadius: 20, height: 30, justifyContent: "center", alignItems: "center" },
            },
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <SDRClient
                url="/sdr/notifications/preview/"
                renderLoading={renderLoading}
                {...getNotification()}
            />
        </View>
    )
}

export default Screenone