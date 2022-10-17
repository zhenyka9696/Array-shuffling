const prompt = require("prompt-sync")();
const { assert } = require('chai');
var main = require('G:/JSProjects/Shifting_v2.0.0');
/*it('Testing main function',()=>{
    assert.equal(main([121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
    136, 137, 138, 139, 140]),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,132,
    140,136,128])
})*///for mocha
it('Testing main function0',()=>{
    assert.deepEqual(main(),[121,123,125,127,129,131,133,135,137,139,122,126,130,134,138,124,
        132,140,136,128]);
});
it('Testing main function1',()=>{
    assert.typeOf(main(),'array');
});
it('Testing main function1',()=>{
    assert.typeOf(main(),'array','main() should return array');
});
it('Testing main function2',()=>{
    assert.lengthOf(main(),20);
});
it('Testing main function3',()=>{
    assert.isNotNull(main(),'main() returns null');
});
it('Testing main function4',()=>{
    assert.isDefined(main(),'main() is undefined');
});
it('Testing main function5',()=>{
    assert.isOk(main(),'main() does not work');
});
it('Testing main function6',()=>{
    assert.notStrictEqual(main(),'exit','main() strict equal the word exit');
});
it('Testing main function6',()=>{
    assert.notStrictEqual(main(),'','main() strict equal the empty string');
});
it('Testing main function7',()=>{
    assert.isArray(main(),'main() is not array');
});
it('Testing main function8',()=>{
    assert.include(main(),121, 'main() is does not include 121');
});
it('Testing main function8',()=>{
    assert.include(main(),140, 'main() is does not include 140');
});
it('Testing main function8',()=>{
    assert.include(main(),130, 'main() is does not include 130');
});
it('Testing main function8',()=>{
    assert.include(main(),125, 'main() is does not include 125');
});
it('Testing main function8',()=>{
    assert.include(main(),135, 'main() is does not include 135');
});
