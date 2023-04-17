import React from "react";
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, FlatList, RefreshControl } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({id}) => {

    const [tasks, setTasks] = useState([
        { id: 1, name: "Hacer tarea" , description: "Tarea cliente servidor"},
        { id: 2, name: "Comprar fruta" , description: "Manzana, pera, naranja"},
        { id: 3, name: "Descongelar el pollo" , description: "Tengo 4 horas para poder descongelarlo"},
        { id: 4, name: "Hacer ejercicio" , description: "Hacer 30 minutos de cardio"},
        { id: 5, name: "Hacer la cama" , description: "Hacer la cama y poner la sabana"}
    ]);

    const [lastIndex , setLastIndex] = useState(0);

    const [refreshing, setRefreshing] = useState(false);

    const loadTask = async () => {
        const title = await  AsyncStorage.getItem("title");
        const description = await  AsyncStorage.getItem("description");
        
        if(title === null || description === null) return;
        
        const task = {
            id: lastIndex + 1,
            name: title,
            description: description
        };

        if(id === -1){
            console.log("entro");
            const newTasks = tasks.map(task => {
                if(task.id === id){
                    task.name = title;
                    task.description = description;
                }
                return task;
            })
            setTasks(newTasks);
            
        }else{
            setTasks([...tasks, task]);
            setLastIndex(lastIndex + 1);
        }
        await AsyncStorage.removeItem("title");
        await AsyncStorage.removeItem("description");
    };

    const handleDelete = async (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        await loadTask();
    };

    const renderItem = ({item}) => {
        return <TaskItem item={item} handleDelete={handleDelete}/>
    };

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await loadTask();
        setRefreshing(false);
    })

    const RectifyLastIndex = () => setLastIndex(tasks.length);

    useEffect(() => {
        RectifyLastIndex();
        loadTask();
    },[]);

    return(
        <FlatList
            style={{ width: "100%"}}
            data={tasks}
            keyExtractor={(task) => task.id.toString()}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    colors={["#78e08f"]}
                    refreshing={refreshing}
                    progressBackgroundColor="#0a3d62"
                    onRefresh={onRefresh}/>
            }
        />
    );
};

export default TaskList;