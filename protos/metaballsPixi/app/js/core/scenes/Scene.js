var Scene,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Scene = (function(_super) {
  __extends(Scene, _super);

  function Scene() {
    Scene.__super__.constructor.call(this);
    return;
  }

  Scene.prototype.update = function(dt) {};

  Scene.prototype.resize = function() {};

  Scene.prototype.transitionIn = function() {};

  Scene.prototype.transitionOut = function() {
    this.onTransitionOutComplete();
  };

  Scene.prototype.onTransitionInComplete = function() {};

  Scene.prototype.onTransitionOutComplete = function() {
    SceneTraveler.onTransitionOutComplete();
  };

  Scene.prototype.dispose = function() {};

  return Scene;

})(PIXI.DisplayObjectContainer);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvc2NlbmVzL1NjZW5lLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFBLEtBQUE7RUFBQTtpU0FBQTs7QUFBQTtBQUVDLDBCQUFBLENBQUE7O0FBQVksRUFBQSxlQUFBLEdBQUE7QUFDWCxJQUFBLHFDQUFBLENBQUEsQ0FBQTtBQUNBLFVBQUEsQ0FGVztFQUFBLENBQVo7O0FBQUEsa0JBSUEsTUFBQSxHQUFPLFNBQUMsRUFBRCxHQUFBLENBSlAsQ0FBQTs7QUFBQSxrQkFPQSxNQUFBLEdBQU8sU0FBQSxHQUFBLENBUFAsQ0FBQTs7QUFBQSxrQkFVQSxZQUFBLEdBQWEsU0FBQSxHQUFBLENBVmIsQ0FBQTs7QUFBQSxrQkFhQSxhQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ2IsSUFBQSxJQUFDLENBQUEsdUJBQUQsQ0FBQSxDQUFBLENBRGE7RUFBQSxDQWJkLENBQUE7O0FBQUEsa0JBaUJBLHNCQUFBLEdBQXVCLFNBQUEsR0FBQSxDQWpCdkIsQ0FBQTs7QUFBQSxrQkFvQkEsdUJBQUEsR0FBd0IsU0FBQSxHQUFBO0FBQ3ZCLElBQUEsYUFBYSxDQUFDLHVCQUFkLENBQUEsQ0FBQSxDQUR1QjtFQUFBLENBcEJ4QixDQUFBOztBQUFBLGtCQXdCQSxPQUFBLEdBQVEsU0FBQSxHQUFBLENBeEJSLENBQUE7O2VBQUE7O0dBRm1CLElBQUksQ0FBQyx1QkFBekIsQ0FBQSIsImZpbGUiOiJjb3JlL3NjZW5lcy9TY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgXG4jIEFic3RyYWN0IFNjZW5lXG4jIFxuIyBAYXV0aG9yIERhdmlkIFJvbmFpIC8gTWFraW9wb2xpcy5jb20gLyBATWFraW82NCBcbiMgXG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgUElYSS5EaXNwbGF5T2JqZWN0Q29udGFpbmVyXG5cblx0Y29uc3RydWN0b3I6KCktPlxuXHRcdHN1cGVyKClcblx0XHRyZXR1cm5cblxuXHR1cGRhdGU6KGR0KS0+XG5cdFx0cmV0dXJuXG5cblx0cmVzaXplOigpLT5cblx0XHRyZXR1cm5cblxuXHR0cmFuc2l0aW9uSW46KCktPlxuXHRcdHJldHVyblxuXG5cdHRyYW5zaXRpb25PdXQ6KCktPlxuXHRcdEBvblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdFx0cmV0dXJuXG5cblx0b25UcmFuc2l0aW9uSW5Db21wbGV0ZTooKS0+XG5cdFx0cmV0dXJuXG5cblx0b25UcmFuc2l0aW9uT3V0Q29tcGxldGU6KCktPlxuXHRcdFNjZW5lVHJhdmVsZXIub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHRcdHJldHVyblxuXG5cdGRpc3Bvc2U6KCktPlxuXHRcdHJldHVybiJdfQ==