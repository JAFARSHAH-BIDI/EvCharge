import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ToDoList from "./screens/ToDoList";
import EditList from "./screens/EditList";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import Colors from "./constants/Colors";
import firebase from "firebase/app";
import "firebase/firestore";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
};
const Screens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChargeEv" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen
                name="ToDoList"
                component={ToDoList}
                options={({ route }) => {
                    return {
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: route.params.color,
                        },
                        headerTintColor: "white",
                    };
                }}
            />
            <Stack.Screen
                name="Edit"
                component={EditList}
                options={({ route }) => {
                    return {
                        // title: "Add New Vehicle",
                        title: route.params.title
                            ? `Edit ${route.params.title} Vehicle Detail`
                            : "Add New Vehicle",
                        headerStyle: {
                            backgroundColor: route.params.color || Colors.blue,
                        },
                        headerTintColor: "white",
                    };
                }}
            />
        </Stack.Navigator>
    );
};
export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if (firebase.auth().currentUser) {
            setIsAuthenticated(true);
        }
        firebase.auth().onAuthStateChanged((user) => {
            console.log("Checking auth state...");
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
    }, []);

    return (
        <NavigationContainer>
            {isAuthenticated ? <Screens /> : <AuthScreens />}
        </NavigationContainer>
    );
}

//const firebaseConfig = YOUR_FIREBASE_CONFIG;
const firebaseConfig = {
    apiKey: 'AIzaSyACr-VK0vW_H2VFQdIs0zcUBpMNJZt0Kpc',
    authDomain: 'charge-ev-301ea.firebaseapp.com',
    projectId: 'charge-ev-301ea',
    storageBucket: 'charge-ev-301ea.appspot.com',
    messagingSenderId: '573247426097',
    appId: '1:573247426097:android:7d31ff683332e170a74f10',
    databaseURL: 'https://charge-ev-301ea-default-rtdb.asia-southeast1.firebasedatabase.app/'
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
