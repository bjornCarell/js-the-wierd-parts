function a() {
    b()
    let c = "I'll wait for my turn";
    console.log(c);
}

function b() {
    let d = "I'm on top of the stack";
    console.log(d);
}

a();
let d; 