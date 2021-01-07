const regl = require('regl')();
const glslify  = require('glslify');
const bunny = require('bunny');
const createCamera = require('perspective-camera');
const angleNormals = require('angle-normals');
const mat4 = require('gl-mat4');

const bgCol = [Math.random(), Math.random(), Math.random(), Math.random()];
// const bgCol = [1.0, 0.0,0.0,1.0];

const camera = createCamera({
    fov: Math.PI/4,
    near: 0.01,
    far: 100,
    viewport: [0, 0, window.innerWidth, window.innerHeight]
})

camera.translate([0, 0, -12]);
camera.lookAt([0, 3, 0]);
camera.update();


const drawBunny = regl({
    frag: glslify('./frag.glsl'),
    vert: glslify('./vert.glsl'),

attributes: {
    position: bunny.positions,
    normal: angleNormals(bunny.cells, bunny.positions),
},

elements: bunny.cells,

uniforms: {
    projectionView: camera.projView,
    color: bgCol,
    model: ({time}) => mat4.rotateY([], mat4.identity([]), time),
},


});

regl.frame(() => {
    regl.clear({
        color: [0,0,0,1],
    })
    drawBunny();
})