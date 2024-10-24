import * as THREE from 'three';

export class ThreeBasics extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      #three-canvas {
        width: ${this.getAttribute('width')}px;
        height: ${this.getAttribute('height')}px;
        background-color: #000;
      }
    </style>
    <canvas id="three-canvas"></canvas>
      `;

    const canvas = this.querySelector('#three-canvas') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    const { width, height } = canvas.getBoundingClientRect();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 1;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);

    camera.zoom = 1.5;
    camera.updateProjectionMatrix();

    scene.add(camera);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    renderer.render(scene, camera);
  }
}

customElements.define('three-basics', ThreeBasics);
