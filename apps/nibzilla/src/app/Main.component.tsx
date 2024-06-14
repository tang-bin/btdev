import { createEffect, createMemo, onMount, type Component } from 'solid-js';

import style from './Main.module.less';
import Sidebar from './layout/Sidebar.component';
import Stage from './layout/Stage.component';

const Main: Component = () => {
    // onMount(() => {});

    // createEffect(() => {});

    return (
        <>
            <Sidebar />
            <Stage />
        </>
    );
};

export default Main;
