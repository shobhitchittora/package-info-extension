import './package-info-card.css';
import * as card from './package-info-card.js';

export default { title: 'info-card' };

export const onTop = () => card.renderToString();
export const onRight = () => card.renderToString();
export const onLeft = () => card.renderToString();
export const onBottom = () => card.renderToString();
