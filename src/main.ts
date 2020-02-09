import * as px from 'pixi.js';

export const init = (parent: HTMLElement) => {
    let type = 'canvas';
    if (px.utils.isWebGLSupported()) {
        type = 'WebGL';
    }
    px.utils.sayHello(type);

    const app = new px.Application({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    parent.appendChild(app.view);
};
