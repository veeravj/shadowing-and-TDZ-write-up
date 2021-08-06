var a=99;
{
    var a=10;//This variable a shadows the variable a outside this scope
    let b=20;
    const c=30;
    console.log(a);//value is 10
    console.log(b);
    console.log(c);
}
console.log(a);//value is 10,because var declare in global memory so value 99 changed 


//<<<USING let>>>
var b=99;
{
    var a=10;
    let b=20;//in this variable b is shadow but functionality is different since it is let
    const c=30;
    console.log(a);
    console.log(b);//value 20
    console.log(c);
}
console.log(b);//value is 99
//the let inside the scope block is in block memory space whereAS the let outside the scope is in script memory space,so the values is not changed as in var declaration



//<<<Illegal shawdoing>>>
let a=10;
{
var a=20;
}//this is called illegal shadowing because the var cross the boundry since its var declaration try to shadows the let variable
//so Js throw an error.(Identifier a is already declared)
