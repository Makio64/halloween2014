var MetaballFilter,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MetaballFilter = (function(_super) {
  __extends(MetaballFilter, _super);

  function MetaballFilter() {
    MetaballFilter.__super__.constructor.call(this);
    this.passes = [this];
    this.uniforms = {
      min: {
        type: "1f",
        value: 0.5
      }
    };
    this.fragmentSrc = ['precision lowp float;', 'varying vec2 vTextureCoord;', 'uniform sampler2D uSampler;', 'uniform float min;', 'void main(void) {', 'vec4 texture = texture2D( uSampler, vTextureCoord );', 'vec4 color;', 'if (texture.r > min){color = vec4(.95,.95,.95,.0);} else if (texture.r > min/2.){color = vec4(0.15,0.15,0.15,.7);} else{color = vec4(0.);}', 'gl_FragColor =  color;', '}'];
  }

  return MetaballFilter;

})(PIXI.AbstractFilter);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvTWV0YWJhbGxGaWx0ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLElBQUEsY0FBQTtFQUFBO2lTQUFBOztBQUFBO0FBRUksbUNBQUEsQ0FBQTs7QUFBWSxFQUFBLHdCQUFBLEdBQUE7QUFDUixJQUFBLDhDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUFDLElBQUQsQ0FEZCxDQUFBO0FBQUEsSUFHQSxJQUFJLENBQUMsUUFBTCxHQUFnQjtBQUFBLE1BQ1osR0FBQSxFQUFZO0FBQUEsUUFBRSxJQUFBLEVBQU0sSUFBUjtBQUFBLFFBQWMsS0FBQSxFQUFPLEdBQXJCO09BREE7S0FIaEIsQ0FBQTtBQUFBLElBT0EsSUFBSSxDQUFDLFdBQUwsR0FBbUIsQ0FDZix1QkFEZSxFQUVmLDZCQUZlLEVBR2YsNkJBSGUsRUFJZixvQkFKZSxFQU1mLG1CQU5lLEVBT1gsc0RBUFcsRUFRWCxhQVJXLEVBU1gsNElBVFcsRUFVWCx3QkFWVyxFQVdmLEdBWGUsQ0FQbkIsQ0FEUTtFQUFBLENBQVo7O3dCQUFBOztHQUZ5QixJQUFJLENBQUMsZUFBbEMsQ0FBQSIsImZpbGUiOiJ0ZXN0L01ldGFiYWxsRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyAvKipcbiMgICogQGF1dGhvciBEYXZpZCBSb25haSBodHRwOi8vbWFraW9wb2xpcy5jb20vIEBNYWtpbzY0XG4jICAqL1xuXG4jIC8qKlxuIyAgKiBAY2xhc3MgTWV0YWJhbGxGaWx0ZXJcbiMgICogQGNvbnRydWN0b3JcbiMgICovXG5jbGFzcyBNZXRhYmFsbEZpbHRlciBleHRlbmRzIFBJWEkuQWJzdHJhY3RGaWx0ZXJcblxuICAgIGNvbnN0cnVjdG9yOigpLT5cbiAgICAgICAgc3VwZXIoKSBcbiAgICAgICAgdGhpcy5wYXNzZXMgPSBbdGhpc107XG5cbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgICAgICAgIG1pbjogICAgICAgIHsgdHlwZTogXCIxZlwiLCB2YWx1ZTogMC41IH0sXG4gICAgICAgIH07XG4gICAgICAgICAgIFxuICAgICAgICB0aGlzLmZyYWdtZW50U3JjID0gW1xuICAgICAgICAgICAgJ3ByZWNpc2lvbiBsb3dwIGZsb2F0OycsXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gZmxvYXQgbWluOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAgICAgICAgICAgJ3ZlYzQgdGV4dHVyZSA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQgKTsnLFxuICAgICAgICAgICAgICAgICd2ZWM0IGNvbG9yOycsXG4gICAgICAgICAgICAgICAgJ2lmICh0ZXh0dXJlLnIgPiBtaW4pe2NvbG9yID0gdmVjNCguOTUsLjk1LC45NSwuMCk7fSBlbHNlIGlmICh0ZXh0dXJlLnIgPiBtaW4vMi4pe2NvbG9yID0gdmVjNCgwLjE1LDAuMTUsMC4xNSwuNyk7fSBlbHNle2NvbG9yID0gdmVjNCgwLik7fScsXG4gICAgICAgICAgICAgICAgJ2dsX0ZyYWdDb2xvciA9ICBjb2xvcjsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF07Il19