import { initGame } from './main';
import './style.css';

function setup(): void {
    const elem = document.createElement('div');
    elem.id = 'game';
    document.body.appendChild(elem);
}

window.onload = (): void => {
    setup();
    initGame();
};
