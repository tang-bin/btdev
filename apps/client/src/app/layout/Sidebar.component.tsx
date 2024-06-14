import { Component, onMount } from "solid-js";

import style from "./Sidebar.module.less";

const Sidebar: Component = () => {
    onMount(() => {
        // # load the list of collections, it should be a tree.
    });

    return <div class={style.sidebar}>sidebar</div>;
};

export default Sidebar;
