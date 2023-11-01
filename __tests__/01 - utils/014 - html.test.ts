import  { copyInput } from '../../src/utils/html';

describe( "HTML utils functions" , () => {
        it ( "It should copy an input value to clipboard" , async() => {
            const input = document.createElement( "input" );
            input.value =  "test" ;
            const result = await copyInput(input);
        })
    }
)