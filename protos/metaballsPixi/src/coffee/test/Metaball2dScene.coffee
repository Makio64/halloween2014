class Metaball2dScene extends Scene

	constructor:()->
		super()
		@mousePosition = new PIXI.Point()

		@bg = new PIXI.Graphics()
		@bg.beginFill(0x111111,1)
		@bg.drawRect(0,0,window.innerWidth,window.innerHeight)
		@bg.endFill()
		@addChild(@bg)

		@bg = new PIXI.Graphics()
		@bg.beginFill(0xFF0000,1)
		@bg.drawRect(0,0,0,0)
		@bg.position.x = window.innerWidth
		@bg.position.y = window.innerHeight
		@bg.endFill()
		@addChild(@bg)

		@balls = []
		for i in [0...200] by 1
			ball = new Ball()
			ball.position.x = window.innerWidth*(Math.random()*0.8+0.1);
			ball.position.y = window.innerHeight*(Math.random()*0.8+0.1);
			@balls.push(ball)
			@addChild(ball)

		blur = new PIXI.BlurFilter()
		blur.blurX = blur.blurY = 30
		gui = new dat.GUI()
		gui.add(blur,'blurX',0,100)
		gui.add(blur,'blurY',0,100)
		metaball = new MetaballFilter()
		gui.add(metaball.uniforms.min,'value',0,1)

		@filters = [blur, metaball]
		return

	transitionIn:()->
		window.addEventListener('mousemove',@onMouseMove)
		super()
		return

	onMouseMove:(e)=>
		@mousePosition.x = e.x
		@mousePosition.y = e.y
		return

	update:()->
		for i in [1...@balls.length] by 1
			@balls[i].update()
		
		ball = @balls[0]
		ball.position.x = @mousePosition.x
		ball.position.y = @mousePosition.y
		return

class Ball extends PIXI.Graphics

	constructor:()->

		super()
		@beginFill(0xFFFFFF,1)
		@radius = 40*Math.random()+10
		@angle = Math.random()*Math.PI*2
		@drawCircle(0,0,@radius)
		@endFill()
		
		return

	update:()->
		@position.x += Math.cos(@angle)
		@position.y += Math.sin(@angle)

		if(@position.x>window.innerWidth+100)
			@position.x = -90
		else if @position.x < -100
			@position.x = window.innerWidth+90
		if(@position.y>window.innerHeight+100)
			@position.y = -90
		else if @position.y < -100
			@position.y = window.innerHeight+90
		
		@position.y += Math.sin(@angle)*2
		return
