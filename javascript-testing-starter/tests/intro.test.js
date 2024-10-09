import { describe, test, it, expect } from "vitest";
import {calculateAverage, fizzBuzz, max, calculateFactorial} from "../src/intro";

describe('max', ()=>{
    it('should return the first argument if it is greater', ()=>{
        
        expect(max(2,1)).toBe(2);

    });

    it('should return the Second argument if it is greater', ()=>{
        expect(max(4,6)).toBe(6);
    })
})

describe('fizzBuzz', ()=>{
    it('should return FizzBuzz if arg is divisible by 3 and 5', ()=>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('it should return Fizz if arg is only divisible by 3', ()=>{
        expect(fizzBuzz(3)).toBe('Fizz');
    })

    it('it should return Buzz if arg is only divisible by 5', ()=>{
        expect(fizzBuzz(5)).toBe('Buzz');
    })
})


describe('calculateAverage', ()=>{
    it('should return NaN if given an empty array', ()=>{
        expect(calculateAverage([])).toBe(NaN);
    })

    it('should return 2 if given [1,2,3]]', ()=>{
        expect(calculateAverage([1,2,3])).toBe(2);
    })
})

describe('calculateFactorial', ()=>{
    it('should return 1 for input 0', ()=>{
        expect(calculateFactorial(0)).toBe(1);
    })

    it('should return 1 for input 1', ()=>{
        expect(calculateFactorial(1)).toBe(1);
    })

    it('should return 6 for input 3', ()=>{
        expect(calculateFactorial(3)).toBe(6);
    })

    it('should return 24 for input 4', ()=>{
        expect(calculateFactorial(4)).toBe(24);
    })
})