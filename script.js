// Source for starting template: https://www.w3schools.com/howto/howto_js_typewriter.asp

// fetched elements
const textField = document.getElementById("textField");
const typeBlock = document.getElementById("typeBlock");

let arrayOfMessagesA = [
    'Lorem ipsum dolor sit amet.',
    'The Dover Boys!',
    'Governments are run by people with agendas, and agendas change. The best hands are still our own.',
    'The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.'
];

function typeBlockBlink() {
    if (typeBlock.style.backgroundColor === 'transparent') {
        typeBlock.style.backgroundColor = 'orange';
    } else {
        typeBlock.style.backgroundColor = 'transparent';
    }
};

let blinkInterval = 500;

let IntervalA;

function startBlink() {
    IntervalA = setInterval(function () {
        typeBlockBlink()
    }
        , 500);
}

function endBlink() {
    clearInterval(IntervalA);
    typeBlock.style.backgroundColor = 'orange';
}

// text to enter in textField
let typeText = 'Lorem ipsum typing effect nvjfsjvbfrehjsbvhfbvh!';
// speed of typing in ms
let typeSpeed = 50;

// integer for characters in typeText
let i = 0;
// length of time to complete typing the full typeText string
let typeLength = 0;
//duration to complete on full typing function
let typingDuration = 0;


// interval to start typing
intervalTypeStartDelay = 2000;
// interval between initialization + completion of typing string, and then start untyping
intervalUnType = 0;

function init() {
    typeBlock.style.backgroundColor = 'orange';
    startBlink();
}

function typeWriter() {
    // recursive function that adds a letter, then starts the function again with 50ms interval
    if (i < typeText.length) {
        textField.innerHTML += typeText.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
    };

    if (i == typeText.length) {
    }
}

function unTypeWriter() {
    // recursive function that removes the end letter, then starts the function again with 50ms interval
    if (i > -1) {
        textField.innerHTML = textField.innerHTML.slice(0, -1);
        i--;
        setTimeout(unTypeWriter, typeSpeed);
    };

    if (i == 0) {
    }
}


function typeThis(text) {
    //change typeText to parameter
    typeText = text;
    typeLength = typeText.length * typeSpeed;
    intervalUnType = (intervalTypeStartDelay * 2) + typeLength;
    typingDuration = typeLength + intervalUnType;


    setTimeout(function () {
        typeWriter();
        endBlink();
        setTimeout(startBlink, typeLength);
    }, intervalTypeStartDelay);

    setTimeout(function () {
        unTypeWriter();
        endBlink();
        setTimeout(startBlink, typeLength);
    }, intervalUnType);

    // setTimeout( ,typingDuration);
};

const timer = document.getElementById('timer');

let secondsPassed = 0;
function SecondStamp() {
    secondsPassed++;
    timer.innerHTML = secondsPassed;
};


setInterval(SecondStamp, 1000);

let waitToTypeNext = 0;
let m = 0;


function beginAllTyping(arrayOfMessages) {
    if (m < arrayOfMessages.length) {
        typeThis(arrayOfMessages[m]);
        waitToTypeNext = typingDuration;    
        m++;
        setTimeout(function (){
            beginAllTyping(arrayOfMessages);
        }, waitToTypeNext);
    }

    // setTimeout(function () {
    //     typeThis('The Dover Boys!');
    //     waitToTypeNext = typingDuration;

    //     setTimeout(function () {
    //         typeThis(
    //             'Governments are run by people with agendas, and agendas change. The best hands are still our own.'
    //         );
    //         waitToTypeNext = typingDuration;

    //             setTimeout(function () {
    //                 typeThis(
    //                     'The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.'
    //                 );
    //         }, waitToTypeNext);
    //     }, waitToTypeNext);
    // }, waitToTypeNext);
};

init();
beginAllTyping(arrayOfMessagesA);





