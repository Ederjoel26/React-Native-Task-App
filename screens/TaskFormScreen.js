import React, {useState, useEffect} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskFormScreen = ({navigation, route}) => {

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (name, value) => setTask({...task, [name]: value});
    
    const handleSubmit = async () => {
        if(!isEdit){
            await AsyncStorage.setItem("title", task.title);
            await AsyncStorage.setItem("description", task.description);
        }else{
            await AsyncStorage.setItem("title", task.title);
            await AsyncStorage.setItem("description", task.description);
        }
        const {id} = route.params;
        navigation.navigate("HomeScreen", { id: id});
    };

    useEffect(() => {
        if(route.params && route.params.id){
            navigation.setOptions({title: "Updating Task"});
        }
    },[]);

    return (
        <Layout>
            <TextInput
                placeholder="Write a title"
                style={styles.inputText}
                placeholderTextColor="#576554"
                onChangeText={(text) => handleChange("title", text)}
                value={task.title}/>
            <TextInput
                placeholder="Write a description"
                style={styles.inputText}
                placeholderTextColor="#576554"
                onChangeText={(text) => handleChange("description", text)}
                value={task.description}/>
            <TouchableOpacity 
                style={styles.botonSave}
                onPress={handleSubmit}>
                <Text 
                    style={styles.botonText}>Save Task</Text>
            </TouchableOpacity>
        </Layout>
    );
};

const styles = StyleSheet.create({
    inputText:{
        width: "90%",
        fontSize: 14,
        marginBottom: 7,
        borderWidth: 1,
        borderColor: "#10ac84",
        height: 35,
        color: "#ffffff",
        padding: 4,
        textAlign: "center",
        borderRadius: 5
    },
    botonSave:{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#10ac84",
        width: "90%",
    },
    botonText:{
        color: "#ffffff",
        textAlign: "center",
    }
});
export default TaskFormScreen;
