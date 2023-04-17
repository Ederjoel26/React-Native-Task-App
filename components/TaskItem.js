import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({item, handleDelete}) => {

    const navigation = useNavigation();

    return(
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen", {id: item.id})}>
                <Text style={styles.item}>{item.id}</Text>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    backgroundColor: "#ee5253", 
                    padding: 7, 
                    borderRadius: 5}}
                onPress={() => handleDelete(item.id)}>
                <Text style={{color:"#fff"}}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    item:{
        color: "#ffffff",
    }
});

export default TaskItem;