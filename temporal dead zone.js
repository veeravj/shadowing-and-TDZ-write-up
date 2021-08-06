
//there is no TDZ for var declaration because its in global memory space so it intialize from the line 1 as "undefined"as far it gets the value in the code
console.log(a);
{



    var a=10
}
//IN Case of let and const the story is different,for example
{
//If we try to access the variable a before its declaration0 JS throws a error as not initialize    
//this is because   let type is in script memory location so we cant access it
//  so this space are calles temporal dead zone .
//   << this is TDZ for the variable a>>
//   << this is TDZ for the variable a>>
    let a=10
}
//this is the same case for const