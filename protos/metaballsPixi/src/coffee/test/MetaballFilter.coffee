# /**
#  * @author David Ronai http://makiopolis.com/ @Makio64
#  */

# /**
#  * @class MetaballFilter
#  * @contructor
#  */
class MetaballFilter extends PIXI.AbstractFilter

    constructor:()->
        super() 
        this.passes = [this];

        this.uniforms = {
            min:        { type: "1f", value: 0.5 },
        };
           
        this.fragmentSrc = [
            'precision lowp float;',
            'varying vec2 vTextureCoord;',
            'uniform sampler2D uSampler;',
            'uniform float min;',

            'void main(void) {',
                'vec4 texture = texture2D( uSampler, vTextureCoord );',
                'vec4 color;',
                'if (texture.r > min){color = vec4(.95,.95,.95,.0);} else if (texture.r > min/2.){color = vec4(0.15,0.15,0.15,.7);} else{color = vec4(0.);}',
                'gl_FragColor =  color;',
            '}'
        ];