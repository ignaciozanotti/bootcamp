describe("MathAPI", function()
{


	describe("when MathAPI is used to find round", function() {

		it("should be able to find round for both positive value and radix", function() {
			expect(MathAPI.round(3.5,3)).toEqual(3);
		});  

		it("shouldn't be able to find the round for radix zero", function() {
			expect( function(){MathAPI.round(3.5,0);}).toThrow(new Error('denominator can`t be zero'));
		});  

		it("should be able to find round for a positive value and negative radix", function() {
			expect(MathAPI.round(3.5,-2)).toEqual(4);
		});

		it("should be able to find round for a negative value and positive radix", function() {
			expect(MathAPI.round(-3.5,2)).toEqual(-4);
		});

		it("should be able to find round for a negative value and negative radix", function() {
			expect(MathAPI.round(-3.5,-2)).toEqual(-4);
		});
	
	}); 

	describe("when MathAPI is used to find ceil", function() {

		it("should be able to find ceil for both negative value and step", function() {
			expect(MathAPI.ceil(-3.5,-2)).toEqual(-2);
		});  

		it("shouldn't be able to find the ceil for step zero", function() {
			expect( function(){MathAPI.ceil(3.5,0);}).toThrow(new Error('denominator can`t be zero'));
		});  

	
	});  

	describe("when MathAPI is used to find clamp", function() {

		it("should be able to return value if value is within min and max values", function() {
			expect(MathAPI.clamp(2,1,3)).toEqual(2);
		}); 

		it("should be able to return value if value < min", function() {
			expect(MathAPI.clamp(-1,1,3)).toEqual(1);
		}); 

		it("should be able to return value if value > max", function() {
			expect(MathAPI.clamp(75.3,1,3)).toEqual(3);
		}); 

		it("should not be able to find clamp for min value bigger than max", function() {
			expect( function(){MathAPI.clamp(3,4,2);}).toThrow(new Error('min can`t be bigger than max'));
		});  

	
	});

	describe("when MathAPI is used to find lerp", function() {


		it("should work properly under reasonable parameters", function() {
			expect(MathAPI.lerp(4,1,3)).toEqual(9);
		}); 

		it("should not be able to find norm for min value bigger than max", function() {
			expect( function(){MathAPI.lerp(3,4,2);}).toThrow(new Error('start cant be bigger than end'));
		}); 


	
	});  

	describe("when MathAPI is used to find loop", function() {

		it("should be able to operate under normal conditions", function() {
			expect(MathAPI.loop(2,1,3)).toEqual(2);
		});

		it("should return max if val < min", function() {
			expect(MathAPI.loop(-1,1,3)).toEqual(3);
		});

		it("should return min if val > max", function() {
			expect(MathAPI.loop(7.45,1,3)).toEqual(1);
		}); 

		it("should not be able to find norm for min value bigger than max", function() {
			expect( function(){MathAPI.norm(3,4,2);}).toThrow(new Error('min can`t be bigger than max'));
		}); 


	
	});  


	describe("when MathAPI is used to find norm", function() {

		it("should be able to operate under normal conditions", function() {
			expect(MathAPI.norm(2,1,3)).toEqual(0.5);
		}); 

		it("should not be able to find norm for min value bigger than max", function() {
			expect( function(){MathAPI.norm(3,4,2);}).toThrow(new Error('min can`t be bigger than max'));
		}); 

		it("should not be able to find norm when min equals max", function() {
			expect( function(){MathAPI.norm(3,4,4);}).toThrow(new Error('denominator can`t be zero'));
		});  

	
	});  



 
});