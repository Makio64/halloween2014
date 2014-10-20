# /**
#  * @author David Ronai http://makiopolis.com/ @Makio64
#  */

# /**
#  * @class BackgroundFilter
#  * @contructor
#  */
class BackgroundFilter extends PIXI.AbstractFilter

    constructor:()->
        super() 
        this.passes = [this];

        this.uniforms = {
            time:        { type: "1f", value: 0.0 },
        };
           
        this.fragmentSrc = [

            'precision lowp float;',
            'varying vec2 vTextureCoord;',
            'uniform float time;',
            
            'float snoise(vec3 uv, float res)    // by trisomie21 & thx shadertoy'
            '{',
                'const vec3 s = vec3(1e0, 1e2, 1e4);',
                'uv *= res;',
                'vec3 uv0 = floor(mod(uv, res))*s;',
                'vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;',
                'vec3 f = fract(uv); f = f*f*(3.0-2.0*f);',
                'vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,',
                'uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);',
                'vec4 r = fract(sin(v*1e-3)*1e5);',
                'float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);',
                'r = fract(sin((v + uv1.z - uv0.z)*1e-3)*1e5);',
                'float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);',
                'return mix(r0, r1, f.z)*2.-1.;',
            '}',

            'void main(void) {',
                '//bool isEqual = mod(floor(vTextureCoord.x*1025.),2.)==0.;',
                'vec2 center = vec2(.5,.5);'
                'float angle = atan(center.y-vTextureCoord.y,center.x-vTextureCoord.x)*3.14*4.+time;'
                'float rand = snoise(vec3(angle,angle,0.),3.14*1. );'
                'float dist = distance(vTextureCoord, center);'
                'vec3 color = vec3(rand*.2*dist);',
                'gl_FragColor =  vec4( color, 1. );',
            '}'
        ];