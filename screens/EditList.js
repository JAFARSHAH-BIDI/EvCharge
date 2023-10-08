import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import ColorSelector from "../components/ColorSelector";
import Button from "../components/Button";

// const colorList = [
//     "blue",
//     "teal",
//     "green",
//     "olive",
//     "yellow",
//     "orange",
//     "red",
//     "pink",
//     "purple",
//     "blueGray",
// ];

export default ({ navigation, route }) => {
    const [title, setTitle] = useState(route.params.title || "");
    // const [color, setColor] = useState(route.params.color || Colors.blue);
    const [isValid, setValidity] = useState(true);
    const [name, setName] = useState(route.params.name || "");
    const totalPowerConsumption = "";
    const voltage = "";
    const current = "";
    const battery ="";
    const totalCharges = "";
    const chargeDuration = "";
    const totalEnergy = "";
     

    return (
        <View style={styles.container}>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.label}>Vehical Number</Text>
                    {!isValid && (
                        <Text
                            style={{
                                marginLeft: 4,
                                color: Colors.red,
                                fontSize: 12,
                            }}
                        >
                            * Vehicle Number cannot be empty
                        </Text>
                    )}
                </View>
                <TextInput
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={title}
                    onChangeText={(text) => {
                        setTitle(text);
                        setValidity(true);
                    }}
                    placeholder={"New Vehicle Number"}
                    maxLength={30}
                    style={[styles.input, { outline: "none" }]}
                />

                <br/>
                <Text style={styles.label}>Vehicle Owner Name</Text>
                <TextInput
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                        setValidity(true);
                    }}
                    placeholder={"Vehicle Owner Name"}
                    maxLength={30}
                    style={[styles.input, { outline: "none" }]}
                />
                {/* <TextInput
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={title}
                    onChangeText={(text) => {
                        setTitle(text);
                        setValidity(true);
                    }}
                    placeholder={"New List Name"}
                    maxLength={30}
                    style={[styles.input, { outline: "none" }]}
                /> */}
                {/* <Text style={styles.label}>Choose Color</Text>
                <ColorSelector
                    onSelect={(color) => {
                        setColor(color);
                        navigation.dispatch(CommonActions.setParams({ color }));
                    }}
                    selectedColor={color}
                    colorOptions={colorList}
                /> */}
            </View>
            <Button
                text="Save"
                onPress={() => {
                    if (title.length > 1) {
                        route.params.saveChanges({ title, name });
                        navigation.dispatch(CommonActions.goBack());
                    } else {
                        setValidity(false);
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        justifyContent: "space-between",
    },
    input: {
        color: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 30,
        fontSize: 24,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: Colors.darkGray,
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
});
