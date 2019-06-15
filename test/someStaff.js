/**
 * Here write your tests
 */
const doStaff = require('../dist/someStaff').doStaff;
const expect = require('chai').expect;

describe('doStaff', () => {
    it('should do staff', () => {
        const res  = doStaff({value: 5});
        expect(res).to.eql(25);
    })
});