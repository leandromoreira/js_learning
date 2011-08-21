describe("Object literal", function(){
	it("create an empty object",function(){
		var empty_object = {};
		expect(empty_object).toEqual({});
	});
	
	it("create an ordinary object using json",function(){
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
	
	it("creates a 'complex object' graph",function(){
		var tv = {
			brand:'any',
			screen: {size:50,brand:'any'},
			turnOn:function(){}
		};
		expect(tv.screen.size).toEqual(50);
	});
});
