// initialize jo
jo.load();

//*
var mainMenu = new joMenu([
						{ title: "Settings", id: "settings" },
						{ title: "More", id: "more" },
						{ title: "About", id: "about" }
				]);
//*/

// create our view card, notice we're nesting widgets inline
var card = new joCard([
    new joTitle("Thump N Snap"),
		new joExpando([
				new joExpandoTitle("Menu"),
				new joExpandoContent(mainMenu)
		]),
		new joDivider(),
		new joHTML('<div style="float: center; width: 100%;"><div id="thumpy" style="float: left; width: 50%;"><img id="thumpy_img" src="thumpy.png" width="50%" height="203" stylet="float: right;"/></div><div id="snappy" style="float: right; width: 150px;"><img id="snappy_img" src="snappy.png" width="150" height="203"/></div></div>')
]);

// setup our stack and screen
var stack = new joStack();
var screen = new joScreen(stack);

// put the card on our view stack
stack.push(card);




