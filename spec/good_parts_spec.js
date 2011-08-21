describe("Object literal", function(){
	var obj;
	beforeEach(function(){
		obj = {className:'java.lang.Object',methods:['toString()','equals(Object o)','hashCode()','getClass()'],id:0,
				toString:function(){return id},
				getClass:{
					className:'java.lang.Class',
					instances:1
				}
			}	
	});
	
	it("tests the beforeEach",function(){
		expect(obj.getClass.className).toEqual('java.lang.Class');
	});

	it("should creates an empty object",function(){
		var empty_object = {};
		expect(empty_object).toEqual({});
	});
	
	it("should create an ordinary object using json",function(){
		var cpu = {
			brand: 'MOS',
			name: '6502',
			mgzh: 1.242,
			'comercial-use': 'Nintendo Enterteinment System'
		};
		expect(cpu.brand).toEqual('MOS');
		expect(cpu['name']).toEqual('6502');
		expect(cpu.speed).toEqual(undefined);
	});

	it("should creates a 'complex object' graph",function(){
		var tv = {
			brand:'any',
			screen: {size:50,brand:'any'},
			turnOn:function(){}
		};
		expect(tv.screen.size).toEqual(50);
	});

	it("should print 'non' if undefined value was found",function(){
		var joypad = {buttons:6,digital:1,analogic:2};
		expect('none').toEqual(joypad.triggers || 'none');
	});

	it("should avoid the TypeError",function(){
		var player = {name:'Mario',mainColor:'red',onJump:{}};
		expect(undefined).toEqual(player.energy && player.energy.points);
	});

});
