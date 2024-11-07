import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import icon from "../../constants/icon";
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerTitleAlign: "center",
                headerTitle: () => (
                    <Image source={icon.logo} style={{ width: 125, height: 29 }} />
                ),
                tabBarStyle: {
                    
                    position: 'absolute',
                    /* bottom: 20, */
                    left: 20,
                    right: 20,
                    height: 60,
                    borderRadius: 15,
                    backgroundColor: 'transparent',
                },
            }} >
        
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icon.home}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? 0.5 : 1,
                            }}
                        />
                    ),
                    tabBarBackground: () => (
                        <BlurView
                            intensity={50} // Define a intensidade do desfoque
                            tint="light"   // Define o estilo do desfoque (light ou dark)
                            style={StyleSheet.absoluteFill}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icon.calendar}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? 0.5 : 1,
                            }}
                        />
                    ),
                    unmountOnBlur: true,
                    tabBarBackground: () => (
                        <BlurView
                            intensity={50}
                            tint="light"
                            style={StyleSheet.absoluteFill}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icon.profile}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? 0.5 : 1,
                            }}
                        />
                    ),
                    unmountOnBlur: true,
                    tabBarBackground: () => (
                        <BlurView
                            intensity={50}
                            tint="light"
                            style={StyleSheet.absoluteFill}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Main;
