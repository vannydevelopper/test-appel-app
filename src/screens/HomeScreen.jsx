import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { notificationTokenSelector } from "../store/selectors/appSelectors";

export default function HomeScreen(){
        const token = useSelector(notificationTokenSelector)
        console.log(token)
        return(
                <View>
                        <Text>HomeScreen</Text>
                </View>
        )
}