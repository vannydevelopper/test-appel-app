import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch } from "react-redux";
import registerPushNotification from "../helpers/registerPushNotification";
import * as Notifications from 'expo-notifications';
import { setNotificationTokenAction } from "./store/actions/appActions";

const Stack = createStackNavigator()

export default function AppContainer() {
        const dispatch = useDispatch()
        const setToken = async () => {
                const token = await registerPushNotification();
                dispatch(setNotificationTokenAction(token.data));
        }

        useEffect(() => {
                Notifications.setNotificationHandler({
                        handleNotification: async () => ({
                                shouldShowAlert: true,
                                shouldPlaySound: true,
                                shouldSetBadge: true,
                        }),
                });
                (async function () {
                        setToken()
                })()
        }, [dispatch])
        return (
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        </Stack.Navigator>
                </NavigationContainer>
        )
}