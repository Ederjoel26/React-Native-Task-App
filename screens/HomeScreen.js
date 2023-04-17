import React from "react";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";

const HomeScreen = ({route}) => {

    return (
        <Layout>
            <TaskList id={route.params.id ? route.params.id : -1} />
        </Layout>
    );
};

export default HomeScreen;