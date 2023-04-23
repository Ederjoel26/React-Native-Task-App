import React, {useEffect} from "react";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {

    return (
        <Layout>
            <TaskList/>
        </Layout>
    );
};

export default HomeScreen;