import {performAction} from '../app.js';

describe("testing if function is valid",()=>{
    test("should return function to be TRUE ", () => {
        expect(typeof performAction).toBe("function");
    });
})







