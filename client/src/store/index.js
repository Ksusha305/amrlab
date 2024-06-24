import { proxy } from 'valtio';

const state = proxy({
   intro: true,
   color: "#a34fe3",
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './threejs.png',
   fullDecal: './threejs.png',
});

export default state;