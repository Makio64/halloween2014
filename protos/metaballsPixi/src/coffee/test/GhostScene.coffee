class GhostScene extends Scene

	constructor:()->
		super()
		@mousePosition = new PIXI.Point()

		@bg = new PIXI.Graphics()
		@bg.beginFill(0x111111,1)
		@bg.drawRect(0,0,window.innerWidth,window.innerHeight)
		@bg.endFill()
		if !isMobile.any
			@backgroundFilter = new BackgroundFilter()
			@bg.filters = [@backgroundFilter]
		@bg.bounds = new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight)
		Stage2d.addChild(@bg)

		@container = new PIXI.DisplayObjectContainer()
		@addChild(@container)

		@hack = new PIXI.Graphics()
		@hack.beginFill(0xFF0000,1)
		@hack.drawRect(0,0,0,0)
		@hack.position.x = window.innerWidth
		@hack.position.y = window.innerHeight
		@hack.endFill()
		@container.addChild(@hack)

		@ghost = new Ghost()
		@ghost2 = new Ghost(@ghost.points)
		# console.log PIXI.blendModes
		# @ghost2.blendMode = PIXI.blendModes.MULTIPLY

		# @ghost2
		setTimeout ()=>
			@container.addChild(@ghost)
			@addChild(@ghost2)
			return
		,1000

		blur = new PIXI.BlurFilter()
		blur.blurX = blur.blurY = 30
		metaball = new MetaballFilter()

		gui = new dat.GUI()
		gui.add(blur,'blurX',0,100)
		gui.add(blur,'blurY',0,100)
		gui.add(metaball.uniforms.min,'value',0,1)
		gui.add(@ghost.scale,'x',0,1)
		gui.add(@ghost.scale,'y',0,1)
		gui.close()

		@container.filters = [blur, metaball]
		return

	transitionIn:()->
		window.addEventListener('mousemove',@onMouseMove)
		window.addEventListener('touchmove',@onTouchMove)
		super()
		return

	onTouchMove:(e)=>
		@mousePosition.x = e.touches[0].pageX/2
		@mousePosition.y = e.touches[0].pageY/2
		return

	onMouseMove:(e)=>
		@mousePosition.x = e.pageX
		@mousePosition.y = e.pageY
		return

	update:(dt)->
		if @backgroundFilter
			@backgroundFilter.uniforms.time.value=Math.random()#dt*0.001
		@ghost.points[0].x = @mousePosition.x/@ghost.scale.x
		@ghost.points[0].y = @mousePosition.y/@ghost.scale.y
		@ghost.update()
		@ghost2.scale.x = @ghost.scale.x
		@ghost2.scale.y = @ghost.scale.y
		# @ghost2.update()
		return

	resize:()->
		@bg.clear()
		@bg.beginFill(0xFF0000,1)
		@bg.drawRect(0,0,window.innerWidth,window.innerHeight)
		@bg.endFill()
		@bg.bounds = new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight)
		@hack.position.x = window.innerWidth
		@hack.position.y = window.innerHeight

		return

class Ghost extends PIXI.Rope

	constructor:(points)->
		count = 40
		if(isMobile.any)
			count = 20
		length = 400 / count
		if(points==undefined)
			points = []
			for i in [0...count] by 1
				points.push(new PIXI.Point(i * length, Math.random()*30))

		texture = PIXI.Texture.fromImage("img/ghost.png")
		super(texture, points)
		@scale.x = .5
		@scale.y = .5
		# @x = -400/2;


		# @alpha = .1
		return

	update:()->

		# @points[0].x += Math.cos(@angle)
		# @points[0].y -= 1#Math.sin(@angle)

		for i in [1...@points.length] by 1
			current = @points[i]
			previous = @points[i-1]
			dx = current.x - previous.x
			dy = current.y - previous.y
			if((dx*dx+dy*dy)>250)
				current.x += (previous.x - current.x)*(.25+i*.005)
				current.y += (previous.y - current.y)*(.25+i*.005)