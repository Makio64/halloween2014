var Main, main,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

main = null;

Main = (function() {
  Main.prototype.dt = 0;

  Main.prototype.lastTime = 0;

  Main.prototype.pause = false;

  function Main() {
    this.resize = __bind(this.resize, this);
    this.update = __bind(this.update, this);
    main = this;
    this.pause = false;
    this.lastTime = Date.now();
    window.focus();
    PIXI.dontSayHello = true;
    console.log('Boooo by @Makio64');
    Stage2d.init({
      transparent: false,
      antialias: false,
      background: 0xFF0000
    });
    SceneTraveler.to(new LoaderScene());
    requestAnimationFrame(this.update);
    return;
  }

  Main.prototype.update = function() {
    var dt, t;
    t = Date.now();
    dt = t - this.lastTime;
    this.lastTime = t;
    if (this.pause) {
      return;
    }
    SceneTraveler.update(dt);
    Stage2d.render();
    requestAnimationFrame(this.update);
  };

  Main.prototype.resize = function() {
    var height, width;
    width = window.innerWidth;
    height = window.innerHeight;
    SceneTraveler.resize();
    Stage2d.resize();
  };

  return Main;

})();

document.addEventListener('DOMContentLoaded', function() {
  main = new Main();
  window.onblur = function(e) {
    main.pause = true;
    cancelAnimationFrame(main.update);
  };
  window.onfocus = function() {
    requestAnimationFrame(main.update);
    main.lastTime = Date.now();
    main.pause = false;
  };
  window.onresize = function() {
    main.resize();
  };
});

//# sourceMappingURL=data:application/json;base64,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LENBQUEsQ0FEaEIsQ0FBQTtBQUFBLElBRUEsSUFBSSxDQUFDLEtBQUwsR0FBYSxLQUZiLENBRGdCO0VBQUEsQ0FQakIsQ0FBQTtBQUFBLEVBYUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsU0FBQSxHQUFBO0FBQ2pCLElBQUEsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLENBRGlCO0VBQUEsQ0FibEIsQ0FENkM7QUFBQSxDQUE5QyxDQW5EQSxDQUFBIiwiZmlsZSI6Ik1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgdmFyXG5cbm1haW4gPSBudWxsXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENsYXNzIE1haW5cblxuY2xhc3MgTWFpblxuXG5cdGR0IFx0XHRcdFx0OiAwXG5cdGxhc3RUaW1lIFx0XHQ6IDBcblx0cGF1c2UgXHRcdFx0OiBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yOigpLT5cblx0XHRtYWluID0gQFxuXHRcdEBwYXVzZSA9IGZhbHNlXG5cdFx0QGxhc3RUaW1lID0gRGF0ZS5ub3coKVxuXHRcdHdpbmRvdy5mb2N1cygpXG5cblx0XHRQSVhJLmRvbnRTYXlIZWxsbyA9IHRydWU7XG5cdFx0Y29uc29sZS5sb2coJ0Jvb29vIGJ5IEBNYWtpbzY0Jylcblx0XHRTdGFnZTJkLmluaXQoe3RyYW5zcGFyZW50OmZhbHNlLGFudGlhbGlhczpmYWxzZSwgYmFja2dyb3VuZDoweEZGMDAwMH0pXG5cblx0XHRTY2VuZVRyYXZlbGVyLnRvKG5ldyBMb2FkZXJTY2VuZSgpKVxuXHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggQHVwZGF0ZSApXG5cdFx0cmV0dXJuXG5cblx0dXBkYXRlOigpPT5cblx0XHR0ID0gRGF0ZS5ub3coKVxuXHRcdGR0ID0gdCAtIEBsYXN0VGltZVxuXHRcdEBsYXN0VGltZSA9IHRcblxuXHRcdGlmIEBwYXVzZSB0aGVuIHJldHVyblxuXG5cdFx0IyB1cGRhdGUgbG9naWMgaGVyZVxuXHRcdFNjZW5lVHJhdmVsZXIudXBkYXRlKGR0KVxuXHRcdFxuXHRcdCMgcmVuZGVyIGZyYW1lXG5cdFx0U3RhZ2UyZC5yZW5kZXIoKVxuXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBAdXBkYXRlIClcblx0XHRyZXR1cm5cblxuXHRyZXNpemU6KCk9PlxuXHRcdHdpZHRoIFx0PSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGhlaWdodCBcdD0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0U2NlbmVUcmF2ZWxlci5yZXNpemUoKVxuXHRcdFN0YWdlMmQucmVzaXplKClcblx0XHRyZXR1cm5cblxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBvbiBEb2N1bWVudCBSZWFkeVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCktPlxuXHRtYWluID0gbmV3IE1haW4oKVxuXHRcblx0d2luZG93Lm9uYmx1ciA9IChlKS0+XG5cdFx0bWFpbi5wYXVzZSA9IHRydWVcblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShtYWluLnVwZGF0ZSlcblx0XHRyZXR1cm5cblxuXHR3aW5kb3cub25mb2N1cyA9ICgpLT5cblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbi51cGRhdGUpXG5cdFx0bWFpbi5sYXN0VGltZSA9IERhdGUubm93KClcblx0XHRtYWluLnBhdXNlID0gZmFsc2Vcblx0XHRyZXR1cm5cblxuXHR3aW5kb3cub25yZXNpemUgPSAoKS0+XG5cdFx0bWFpbi5yZXNpemUoKVxuXHRcdHJldHVyblxuXG5cdHJldHVyblxuKSJdfQ==