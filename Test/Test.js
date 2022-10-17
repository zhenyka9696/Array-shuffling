const prompt = require("prompt-sync")();
const { assert } = require('chai');
var main = require('G:/JSProjects/Shifting_v2.0.0');
/*it('Testing main function',()=>{
    assert.equal(main([121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
    136, 137, 138, 139, 140]),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,132,
    140,136,128])
})*///for mocha
it('Testing main function1',()=>{
    assert.deepEqual(main(),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,
        132,140,136,128]);
});
it('Testing main function2',()=>{
    assert.typeOf(main(),'array');
});
it('Testing main function2',()=>{
    assert.typeOf(main(),'array','main() should return array');
});
it('Testing main function3',()=>{
    assert.lengthOf(main(),20);
});
it('Testing main function4',()=>{
    assert.isNotNull(main(),'main() returns null');
});
it('Testing main function5',()=>{
    assert.isDefined(main(),'main() is undefined');
});
it('Testing main function6',()=>{
    assert.isOk(main(),'main() does not work');
});
