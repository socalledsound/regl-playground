precision mediump float;
attribute vec3 position, normal;
uniform mat4 projectionView, model;
varying vec3 v_normal;
void main(){
    v_normal = normal;
    gl_Position =  projectionView * model *  vec4(position, 1);
}