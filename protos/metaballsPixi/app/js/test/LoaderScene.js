var LoaderScene,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LoaderScene = (function(_super) {
  __extends(LoaderScene, _super);

  function LoaderScene() {
    this.onFullLoaded = __bind(this.onFullLoaded, this);
    LoaderScene.__super__.constructor.call(this);
    this.onBasicLoaded();
    return;
  }

  LoaderScene.prototype.onBasicLoaded = function() {
    var loader;
    loader = new PIXI.AssetLoader(["./img/ghost.png"]);
    loader.onComplete = this.onFullLoaded;
    loader.load();
  };

  LoaderScene.prototype.onFullLoaded = function() {
    SceneTraveler.to(new GhostScene());
  };

  return LoaderScene;

})(Scene);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvTG9hZGVyU2NlbmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsV0FBQTtFQUFBOztpU0FBQTs7QUFBQTtBQUVDLGdDQUFBLENBQUE7O0FBQVksRUFBQSxxQkFBQSxHQUFBO0FBQ1gsdURBQUEsQ0FBQTtBQUFBLElBQUEsMkNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsYUFBRCxDQUFBLENBREEsQ0FBQTtBQUVBLFVBQUEsQ0FIVztFQUFBLENBQVo7O0FBQUEsd0JBS0EsYUFBQSxHQUFjLFNBQUEsR0FBQTtBQUNiLFFBQUEsTUFBQTtBQUFBLElBQUEsTUFBQSxHQUFhLElBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsQ0FBQyxpQkFBRCxDQUFqQixDQUFiLENBQUE7QUFBQSxJQUNBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLElBQUMsQ0FBQSxZQURyQixDQUFBO0FBQUEsSUFFQSxNQUFNLENBQUMsSUFBUCxDQUFBLENBRkEsQ0FEYTtFQUFBLENBTGQsQ0FBQTs7QUFBQSx3QkFXQSxZQUFBLEdBQWEsU0FBQSxHQUFBO0FBQ1osSUFBQSxhQUFhLENBQUMsRUFBZCxDQUFzQixJQUFBLFVBQUEsQ0FBQSxDQUF0QixDQUFBLENBRFk7RUFBQSxDQVhiLENBQUE7O3FCQUFBOztHQUZ5QixNQUExQixDQUFBIiwiZmlsZSI6InRlc3QvTG9hZGVyU2NlbmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2FkZXJTY2VuZSBleHRlbmRzIFNjZW5lXG5cblx0Y29uc3RydWN0b3I6KCktPlxuXHRcdHN1cGVyKClcblx0XHRAb25CYXNpY0xvYWRlZCgpXG5cdFx0cmV0dXJuXG5cblx0b25CYXNpY0xvYWRlZDooKS0+XG5cdFx0bG9hZGVyID0gbmV3IFBJWEkuQXNzZXRMb2FkZXIoW1wiLi9pbWcvZ2hvc3QucG5nXCJdKVxuXHRcdGxvYWRlci5vbkNvbXBsZXRlID0gQG9uRnVsbExvYWRlZFxuXHRcdGxvYWRlci5sb2FkKClcblx0XHRyZXR1cm5cblxuXHRvbkZ1bGxMb2FkZWQ6KCk9PlxuXHRcdFNjZW5lVHJhdmVsZXIudG8oIG5ldyBHaG9zdFNjZW5lKCkgKVxuXHRcdHJldHVybiJdfQ==