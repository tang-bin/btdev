/* @refresh reload */
import { render } from 'solid-js/web';

import './nibzilla.less';
import Main from './app/Main.component';

const root = document.getElementById('root');

if (!(root instanceof HTMLElement)) {
    throw new Error('Root element not found.');
}

render(() => <Main />, root);
