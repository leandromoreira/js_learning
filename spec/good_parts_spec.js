describe("Javascript e-learning",function(){

describe("Functions",function(){
	it("should create a simple function",function(){
		var add = function(a,b){
			return a + b;
		};
		expect('function').toEqual(typeof add);
	});
	it("should print the number of arguments",function(){
		var fun = function(a,b,c){
			return arguments.length;
		}
		var numberOfParameters = fun(1,2,3);
		expect(3).toEqual(numberOfParameters);
	});
});


describe("Objects", function(){
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

	it("shouldnt remove the property",function(){
		delete obj.toString;
		expect(typeof obj.toString).toEqual('function');
	});

	it("should remove the property",function(){
		delete obj.id;
		expect(obj.id).toBeUndefined();
	});

	it("should iterate by obj properties",function(){
		var propertyName;
		var propertyCount = 0;
		for (propertyName in obj){
			propertyCount++;
		}
		expect(5).toEqual(propertyCount);
	});

	it("should show the types based on properties",function(){
		expect('number').toEqual(typeof obj.id);
		expect('function').toEqual(typeof obj.toString);
	});

	it("should update value or augment if it not exists",function(){
		obj.id = 2;
		expect(obj.id).toEqual(2);
		obj.isRuby = true;
		expect(obj.isRuby).toBeTruthy();
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
		expect(cpu.speed).toBeUndefined();;
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

})
});
