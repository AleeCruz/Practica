import * as THREE from 'three';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,5)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// --- 1. CARGA DE TEXTURA CIRCULAR ---
// Esta textura hará que cada partícula sea un círculo suave en lugar de un cuadrado
const textureLoader = new THREE.TextureLoader();
const circleTexture = textureLoader.load('https://threejs.org/examples/textures/sprites/disc.png');

// --- 2. CONFIGURACIÓN DEL CAMPO DE ESTRELLAS ---
const particleCount = 5500; 
const starGeo = new THREE.BufferGeometry();
const starPos = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 20;     
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 20; 
    starPos[i * 3 + 2] = (Math.random() - 0.5) * 30; 
}

starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

const starMat = new THREE.PointsMaterial({ 
    color: 0x00d9ff, 
    size: 0.07,           // Aumenté un poco el tamaño para que se aprecie la forma
    map: circleTexture,   // ASIGNAMOS LA TEXTURA CIRCULAR AQUÍ
    transparent: true, 
    opacity: 0.8,
    alphaTest: 0.1,       // Ayuda a renderizar mejor los bordes transparentes
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true 
});

const starSystem = new THREE.Points(starGeo, starMat);
scene.add(starSystem);

// --- 3. MANEJO DE VENTANA ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- 4. BUCLE DE ANIMACIÓN ---
function animate() {
    requestAnimationFrame(animate);

    const positions = starSystem.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 2] += 0.01; // Velocidad un poco más rápida para notar el flujo

        if (positions[i * 3 + 2] > 5) {
            positions[i * 3 + 2] = -25; 
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        }
    }

    starSystem.geometry.attributes.position.needsUpdate = true;
    starSystem.rotation.z += 0.002;

    renderer.render(scene, camera);
}

animate();