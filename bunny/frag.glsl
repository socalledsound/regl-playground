precision mediump float;
uniform vec4 color;
varying vec3 v_normal;
void main(){

    gl_FragColor = vec4(v_normal * 0.5 + 0.5, 1.0);
}