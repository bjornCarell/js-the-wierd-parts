function waitThreeSeconds() {
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms){};
    console.log('finnished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finnished execution');

/* 
    open console, refresh browser, click along
    in the document while the function is runnin, 
    and you will see the JS engine handling of 
    the Event Queue in action. 

    In what order till the console.log msg's be displayed?
    Hint: When will the JS engine look at the Event Queue? 

    Answer: 
    1.
    2.
    3.
*/