const prompt = require("prompt-sync")();
const { assert } = require('chai');
var main = require('G:/JSProjects/Shifting_v2.0.0');
/*it('Testing main function',()=>{
    assert.equal(main([121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
    136, 137, 138, 139, 140]),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,132,
    140,136,128])
})*///for mocha
it('Testing main function',()=>{
    assert.deepEqual(main(),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,
        132,140,136,128]);
})