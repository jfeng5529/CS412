let {describe} = require('mocha')
const {explain, expect} = require("chai");
const {output} = require('../PS1.P1.js');
const {func} = require('../PS1.P3.js');
const {evaluate} = require('../PS1.P2.js');

describe("Reverse order test", ()=>{
    it("should return the reverse order of the string of abcdefg", ()=>{
        let ans = output("abcdefg");
        expect(ans).to.be.equal("gfedcba");
    });
    it("should return the reverse order of the string of supercalifragilisticexpialidocious", () => {
        let ans = output("supercalifragilisticexpialidocious");
        console.log(ans);
        expect(ans).to.be.equal("xuutsssrrppoollliiiiiiigfeedcccaaa");
    });
});

describe("operation tests", () => {
    it("should return the ans of 4+2", () => {
        const expression = '4+2';
        let operator = evaluate(expression); 
        expect(operator(expression)).to.be.equal(6);
    });
    it("should return the ans of 5*7", () => {
        const expression = '5*7';
        let operator = evaluate(expression);
        expect(operator(expression)).to.be.equal(35);
    });
    it("should return the ans of 6-1", () => {
        const expression = '6-1';
        let operator = evaluate(expression);
        expect(operator(expression)).to.be.equal(5);
    });
    it("should return the ans of 9/2", () => {
        const expression = '9/2';
        let operator = evaluate(expression);
        expect(operator(expression)).to.be.equal(4.5);
    });
    it("should return the ans of 2^8", () => {
        const expression = '2^8';
        let operator = evaluate(expression);
        expect(operator(expression)).to.be.equal(256);
    });
});

describe("string modifaction test(P3)", () => {
    it("should return the array of strings", () => {
        const experssion1 = func("supercalifragilisticexpialidocious", (str1) => { return str1.toLowerCase().split(/(?=c)/g) })
        expect(experssion1).to.eql(['super', 'califragilisti', 'cexpialido', 'cious']);
    });
    it("should return an object", () => {
        const experssion2 = func("supercalifragilisticexpialidocious", (str1) => {
            const newStr = str1.replace(/a/g, "A");
            count = 0;
            for (let i = 0; i < str1.length; i++) {
                if (str1[i] === 'a') {
                    count++;
                }
            }
            return { originalString: str1, modifiedString: newStr, numberReplaced: count, length: newStr.length };
        })
        expect(experssion2).to.eql({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        });
    });
   
});

