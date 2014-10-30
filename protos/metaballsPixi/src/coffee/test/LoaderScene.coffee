class LoaderScene extends Scene

	constructor:()->
		super()
		@onBasicLoaded()
		return

	onBasicLoaded:()->
		loader = new PIXI.AssetLoader(["./img/ghost.png"])
		loader.onComplete = @onFullLoaded
		loader.load()
		return

	onFullLoaded:()=>
		SceneTraveler.to( new GhostScene() )
		return