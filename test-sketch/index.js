const regl = require('regl')();
const glslify  = require('glslify');

const bgCol = [Math.random(), Math.random(), Math.random(), Math.random()];
// const bgCol = [1.0, 0.0,0.0,1.0];

const drawBG = regl({
    frag: glslify('./frag.glsl'),
    vert: glslify('./vert.glsl'),

attributes: {
    position: [[-1,-1], [1, -1], [1, 1],[-1,1]]
},

uniforms: {

    color: bgCol,
},

count: 4,
primitive: "triangle fan",
});

regl.frame(() => {
    drawBG();
})