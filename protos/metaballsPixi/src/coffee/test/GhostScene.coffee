class GhostScene extends Scene

	constructor:()->
		super()
		@sound = new Howl({
			urls: ['sfx/space_sounds_01.mp3'],
			autoplay: true,
			loop: true,
			volume: 1.0,
		});
		start = new PIXI.Point(window.innerWidth/2, window.innerHeight*.75)

		@timeWhisper = 0

		if !isMobile.any
			@pool = new ObjectPool(()=>
				return new Ghost(@,start)
			,10,40)
			@auto = true
			@time = 0
			@tick = 300
			start.x /= 2
			start.y /= 2

		else
			@pool = new ObjectPool(()=>
				return new Ghost(@,start)
			,1,5)
			@auto = false
			@time = 0
			@tick = 1000

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

		@ball = new PIXI.Graphics()
		@ball.beginFill(0xFFFFFF)
		@ball.drawCircle(0,0,25)
		@ball.endFill()
		@ball.x = start.x
		@ball.y = start.y
		# @container.addChild(@ball)

		@ghosts = [] 
		@ghosts2 = []

		blur = new PIXI.BlurFilter()
		blur.blurX = blur.blurY = 60
		metaball = new MetaballFilter()


		@displayFace = true
		@manualControl = true

		console.log ' B'
		gui = new dat.GUI()
		@mute = false
		gui.add(@,'mute').onChange(()=>
			if @mute
				Howler.mute()
			else
				Howler.unmute()

			return
		).name('mute sound')
		# gui.add(blur,'blurX',0,100)
		# gui.add(blur,'blurY',0,100)
		gui.add(@,'tick',50,500)
		gui.add(@,'displayFace').onChange(()=>
			for g in @ghosts2
				if @displayFace
					@addChild(g)
				else
					@removeChild(g)
			return
		)
		gui.add(@,'auto').onChange(()=>
			return
		).name('auto/manual')

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
			@backgroundFilter.uniforms.time.value=Math.random()

		@time += dt
		@timeWhisper += dt

		if !@auto
			@ball.scale.y += -@ball.scale.y*.03
			@ball.scale.x = @ball.scale.y
		else
			target = (Math.sin(@time/800)*10+25)*.05
			@ball.scale.y += (target-@ball.scale.y)*.05
			@ball.scale.x = @ball.scale.y

		# whisper sound
		if @timeWhisper > 3000
			n = Math.floor(Math.random()*9)+1
			@sound = new Howl({
				urls: ['sfx/ghost0'+n+'.mp3'],
				autoplay: true,
				loop: false,
				volume: .2,
			});
			@timeWhisper = 0

		if ((@auto && @time>=@tick) || (!@auto && @ghosts.length == 0))
			start = new PIXI.Point(window.innerWidth/2, window.innerHeight*.75)
			if(isMobile.any)
				start.x /= 2
				start.y /= 2
			@logBoo()
			@time = 0
			@ghost = @pool.checkOut()
			@ghost2 = @pool.checkOut()
			@ghost.init(start)
			@ghost.associate(@ghost2)
			@container.addChild(@ghost)
			
			if @displayFace
				@addChild(@ghost2)

			@ghosts.push(@ghost)
			@ghosts2.push(@ghost2)

		for i in [@ghosts.length-1..0] by -1
			@ghosts[i].update(dt)

		if(!@auto)
			@ghost.points[0].x = @mousePosition.x / @ghost.scale.x
			@ghost.points[0].y = @mousePosition.y / @ghost.scale.y

		
		return

	logBoo:()->
		s = ""
		x = Math.floor(Math.random()*3)
		for i in [0...x] by 1
			s+=" "
		r = Math.random()
		if r>.66
			s+="0"
		else if r>.33
			s+="o"
		else 
			s+="O"
		console.log(s)
		return

	resize:()->
		@bg.clear()
		@bg.beginFill(0x111111,1)
		@bg.drawRect(0,0,window.innerWidth,window.innerHeight)
		@bg.endFill()
		@bg.bounds = new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight)
		@hack.position.x = window.innerWidth
		@hack.position.y = window.innerHeight

		return

class Ghost extends PIXI.Rope

	constructor:(@ref,start,@points)->

		@init(start)
		texture = PIXI.Texture.fromImage("./img/ghost.png")
		super(texture, @points)
		@scale.y = @scale.x = .25+.35*Math.random()
		return

	init:(start)->
		@destroying = false
		@snakeFactor = .1+Math.random()*.9
		@time = Math.random()*5000
		@angle = 0
		@speed = (8+Math.random()*32)/24
		if Math.random()>.5
			@angleTarget = -Math.PI/2+0.5*Math.random()-0.25
		else
			@angleTarget = Math.PI*2-Math.PI/2+0.5*Math.random()-0.25
		@auto = true
		count = 40
		if(isMobile.any)
			count = 14

		scale = .25+.35*Math.random()

		@points = []
		for i in [0...count] by 1
			@points.push(new PIXI.Point(start.x / scale, start.y / scale))

		if(@scale) 
			@scale.y = @scale.x = scale
		return

	associate:(ghost)->
		@friend = ghost
		@friend.points = @points
		return

	update:(dt)->

		if @destroying == true
			return
		
		@time += dt

		if @auto
			@angle += (@angleTarget-@angle)*0.05
			angle = @angle+Math.cos(@time/300)*@snakeFactor
			@points[0].x += Math.cos(angle)*(@speed*dt)
			@points[0].y += Math.sin(angle)*(@speed*dt)

		if @friend
			@friend.scale.x = @scale.x
			@friend.scale.y = @scale.y
		

		for i in [1...@points.length] by 1
			current = @points[i]
			previous = @points[i-1]
			dx = current.x - previous.x
			dy = current.y - previous.y
			if((dx*dx+dy*dy)>250)
				current.x += (previous.x - current.x)*(.25+i*.005)
				current.y += (previous.y - current.y)*(.25+i*.005)

		if @points[@points.length-1].y < -10
			@destroying = true
			@ref.pool.checkIn(@)
			idx = @ref.ghosts.indexOf(@)
			if(idx != -1)
				@ref.ghosts.splice(idx,1)
				@ref.container.removeChild(@)
			else
				idx = @ref.ghosts2.indexOf(@)
				if(idx != -1)
					@ref.ghosts2.splice(idx,1)
					@ref.removeChild(@)

		return

