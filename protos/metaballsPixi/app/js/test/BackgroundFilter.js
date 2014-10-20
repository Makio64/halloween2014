var BackgroundFilter,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BackgroundFilter = (function(_super) {
  __extends(BackgroundFilter, _super);

  function BackgroundFilter() {
    BackgroundFilter.__super__.constructor.call(this);
    this.passes = [this];
    this.uniforms = {
      time: {
        type: "1f",
        value: 0.0
      }
    };
    this.fragmentSrc = ['precision lowp float;', 'varying vec2 vTextureCoord;', 'uniform float time;', 'float snoise(vec3 uv, float res)    // by trisomie21 & thx shadertoy', '{', 'const vec3 s = vec3(1e0, 1e2, 1e4);', 'uv *= res;', 'vec3 uv0 = floor(mod(uv, res))*s;', 'vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;', 'vec3 f = fract(uv); f = f*f*(3.0-2.0*f);', 'vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,', 'uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);', 'vec4 r = fract(sin(v*1e-3)*1e5);', 'float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);', 'r = fract(sin((v + uv1.z - uv0.z)*1e-3)*1e5);', 'float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);', 'return mix(r0, r1, f.z)*2.-1.;', '}', 'void main(void) {', '//bool isEqual = mod(floor(vTextureCoord.x*1025.),2.)==0.;', 'vec2 center = vec2(.5,.5);', 'float angle = atan(center.y-vTextureCoord.y,center.x-vTextureCoord.x)*3.14*4.+time;', 'float rand = snoise(vec3(angle,angle,0.),3.14*1. );', 'float dist = distance(vTextureCoord, center);', 'vec3 color = vec3(rand*.2*dist);', 'gl_FragColor =  vec4( color, 1. );', '}'];
  }

  return BackgroundFilter;

})(PIXI.AbstractFilter);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvQmFja2dyb3VuZEZpbHRlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsSUFBQSxnQkFBQTtFQUFBO2lTQUFBOztBQUFBO0FBRUkscUNBQUEsQ0FBQTs7QUFBWSxFQUFBLDBCQUFBLEdBQUE7QUFDUixJQUFBLGdEQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUFDLElBQUQsQ0FEZCxDQUFBO0FBQUEsSUFHQSxJQUFJLENBQUMsUUFBTCxHQUFnQjtBQUFBLE1BQ1osSUFBQSxFQUFhO0FBQUEsUUFBRSxJQUFBLEVBQU0sSUFBUjtBQUFBLFFBQWMsS0FBQSxFQUFPLEdBQXJCO09BREQ7S0FIaEIsQ0FBQTtBQUFBLElBT0EsSUFBSSxDQUFDLFdBQUwsR0FBbUIsQ0FFZix1QkFGZSxFQUdmLDZCQUhlLEVBSWYscUJBSmUsRUFNZixzRUFOZSxFQU9mLEdBUGUsRUFRWCxxQ0FSVyxFQVNYLFlBVFcsRUFVWCxtQ0FWVyxFQVdYLDRDQVhXLEVBWVgsMENBWlcsRUFhWCxxREFiVyxFQWNYLHdDQWRXLEVBZVgsa0NBZlcsRUFnQlgsOERBaEJXLEVBaUJYLCtDQWpCVyxFQWtCWCw4REFsQlcsRUFtQlgsZ0NBbkJXLEVBb0JmLEdBcEJlLEVBc0JmLG1CQXRCZSxFQXVCWCw0REF2QlcsRUF3QlgsNEJBeEJXLEVBeUJYLHFGQXpCVyxFQTBCWCxxREExQlcsRUEyQlgsK0NBM0JXLEVBNEJYLGtDQTVCVyxFQTZCWCxvQ0E3QlcsRUE4QmYsR0E5QmUsQ0FQbkIsQ0FEUTtFQUFBLENBQVo7OzBCQUFBOztHQUYyQixJQUFJLENBQUMsZUFBcEMsQ0FBQSIsImZpbGUiOiJ0ZXN0L0JhY2tncm91bmRGaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIC8qKlxuIyAgKiBAYXV0aG9yIERhdmlkIFJvbmFpIGh0dHA6Ly9tYWtpb3BvbGlzLmNvbS8gQE1ha2lvNjRcbiMgICovXG5cbiMgLyoqXG4jICAqIEBjbGFzcyBCYWNrZ3JvdW5kRmlsdGVyXG4jICAqIEBjb250cnVjdG9yXG4jICAqL1xuY2xhc3MgQmFja2dyb3VuZEZpbHRlciBleHRlbmRzIFBJWEkuQWJzdHJhY3RGaWx0ZXJcblxuICAgIGNvbnN0cnVjdG9yOigpLT5cbiAgICAgICAgc3VwZXIoKSBcbiAgICAgICAgdGhpcy5wYXNzZXMgPSBbdGhpc107XG5cbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgICAgICAgIHRpbWU6ICAgICAgICB7IHR5cGU6IFwiMWZcIiwgdmFsdWU6IDAuMCB9LFxuICAgICAgICB9O1xuICAgICAgICAgICBcbiAgICAgICAgdGhpcy5mcmFnbWVudFNyYyA9IFtcblxuICAgICAgICAgICAgJ3ByZWNpc2lvbiBsb3dwIGZsb2F0OycsXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIGZsb2F0IHRpbWU7JyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJ2Zsb2F0IHNub2lzZSh2ZWMzIHV2LCBmbG9hdCByZXMpICAgIC8vIGJ5IHRyaXNvbWllMjEgJiB0aHggc2hhZGVydG95J1xuICAgICAgICAgICAgJ3snLFxuICAgICAgICAgICAgICAgICdjb25zdCB2ZWMzIHMgPSB2ZWMzKDFlMCwgMWUyLCAxZTQpOycsXG4gICAgICAgICAgICAgICAgJ3V2ICo9IHJlczsnLFxuICAgICAgICAgICAgICAgICd2ZWMzIHV2MCA9IGZsb29yKG1vZCh1diwgcmVzKSkqczsnLFxuICAgICAgICAgICAgICAgICd2ZWMzIHV2MSA9IGZsb29yKG1vZCh1dit2ZWMzKDEuKSwgcmVzKSkqczsnLFxuICAgICAgICAgICAgICAgICd2ZWMzIGYgPSBmcmFjdCh1dik7IGYgPSBmKmYqKDMuMC0yLjAqZik7JyxcbiAgICAgICAgICAgICAgICAndmVjNCB2ID0gdmVjNCh1djAueCt1djAueSt1djAueiwgdXYxLngrdXYwLnkrdXYwLnosJyxcbiAgICAgICAgICAgICAgICAndXYwLngrdXYxLnkrdXYwLnosIHV2MS54K3V2MS55K3V2MC56KTsnLFxuICAgICAgICAgICAgICAgICd2ZWM0IHIgPSBmcmFjdChzaW4odioxZS0zKSoxZTUpOycsXG4gICAgICAgICAgICAgICAgJ2Zsb2F0IHIwID0gbWl4KG1peChyLngsIHIueSwgZi54KSwgbWl4KHIueiwgci53LCBmLngpLCBmLnkpOycsXG4gICAgICAgICAgICAgICAgJ3IgPSBmcmFjdChzaW4oKHYgKyB1djEueiAtIHV2MC56KSoxZS0zKSoxZTUpOycsXG4gICAgICAgICAgICAgICAgJ2Zsb2F0IHIxID0gbWl4KG1peChyLngsIHIueSwgZi54KSwgbWl4KHIueiwgci53LCBmLngpLCBmLnkpOycsXG4gICAgICAgICAgICAgICAgJ3JldHVybiBtaXgocjAsIHIxLCBmLnopKjIuLTEuOycsXG4gICAgICAgICAgICAnfScsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAgICAgICAgICAgJy8vYm9vbCBpc0VxdWFsID0gbW9kKGZsb29yKHZUZXh0dXJlQ29vcmQueCoxMDI1LiksMi4pPT0wLjsnLFxuICAgICAgICAgICAgICAgICd2ZWMyIGNlbnRlciA9IHZlYzIoLjUsLjUpOydcbiAgICAgICAgICAgICAgICAnZmxvYXQgYW5nbGUgPSBhdGFuKGNlbnRlci55LXZUZXh0dXJlQ29vcmQueSxjZW50ZXIueC12VGV4dHVyZUNvb3JkLngpKjMuMTQqNC4rdGltZTsnXG4gICAgICAgICAgICAgICAgJ2Zsb2F0IHJhbmQgPSBzbm9pc2UodmVjMyhhbmdsZSxhbmdsZSwwLiksMy4xNCoxLiApOydcbiAgICAgICAgICAgICAgICAnZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZUZXh0dXJlQ29vcmQsIGNlbnRlcik7J1xuICAgICAgICAgICAgICAgICd2ZWMzIGNvbG9yID0gdmVjMyhyYW5kKi4yKmRpc3QpOycsXG4gICAgICAgICAgICAgICAgJ2dsX0ZyYWdDb2xvciA9ICB2ZWM0KCBjb2xvciwgMS4gKTsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF07Il19