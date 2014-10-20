# 
# Stageed for pixi.js with every basics you need
# @author David Ronai / Makiopolis.com / @Makio64 
# 
class Stage2d

	@stage 		: null
	@renderer	: null

	@init:(options)->
		view = options.view||null
		transparent = options.transparent||false
		antialias = options.antialias||false
		preserveDrawingBuffer = options.antialias||false
		if(isMobile.any)
			width = window.innerWidth/2
			height = window.innerHeight/2
		else
			width = window.innerWidth
			height = window.innerHeight
		@renderer = new PIXI.autoDetectRenderer(width, height,view,antialias,transparent,preserveDrawingBuffer)
		@stage = new PIXI.Stage()
		if isMobile.any
			@renderer.view.style.width = window.innerWidth+'px'
			@renderer.view.style.height = window.innerHeight+'px'
		document.body.appendChild( @renderer.view )
		return

	@addChild:(o)->
		@stage.addChild(o)
		return

	@render:()->
		@renderer.render ( @stage )
		return

	@resize:()->
		if(isMobile.any)
			width = window.innerWidth/2
			height = window.innerHeight/2
		else
			width = window.innerWidth
			height = window.innerHeight
		if @renderer
			@renderer.resize( width, height )
			if isMobile.any
				@renderer.view.style.width = window.innerWidth+'px'
				@renderer.view.style.height = window.innerHeight+'px'

		return