// Source for starting template: https://www.w3schools.com/howto/howto_js_typewriter.asp

// fetched elements
const textField = document.getElementById("textField");
const typeBlock = document.getElementById("typeBlock");

//array of messages
let arrayOfMessagesA = [
    'Lorem ipsum dolor sit amet.',
    'The Dover Boys!',
    'My name Jeff.',
    'Governments are run by people with agendas, and agendas change. The best hands are still our own.',
    'The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.'
];

// type cursor blinking animation
function typeBlockBlink() {
    if (typeBlock.style.backgroundColor === 'transparent') {
        typeBlock.style.backgroundColor = 'orange';
    } else {
        typeBlock.style.backgroundColor = 'transparent';
    }
};

// declare interval for blinking animation
let IntervalA;

// start type cursor blinking animation
function startBlink() {
    IntervalA = setInterval(function () {
        typeBlockBlink()
    }
        , 500);
}

// end type cursor blinking animation
function endBlink() {
    clearInterval(IntervalA);
    typeBlock.style.backgroundColor = 'orange';
}

// declare text to enter in textField
let typeText = '';
// declare speed of typing in ms
let typeSpeed = 50;
// declare integer for characters in typeText
let i = 0;
// declare length of time to complete typing the full typeText string
let typeLength = 0;
// declare duration to complete on full typing function
let typingDuration = 0;


// interval to start typing
intervalTypeStartDelay = 2000;
// interval between initialization + completion of typing string, and then start untyping
intervalUnType = 0;

// set type cursor to orange and start blinking animation
function init() {
    typeBlock.style.backgroundColor = 'orange';
    startBlink();
}

// recursive function that adds a letter, then starts the function again with 50ms interval
function typeWriter() {
    if (i < typeText.length) {
        textField.innerHTML += typeText.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
    };
}

// recursive function that removes the end letter, then starts the function again with 50ms interval
function unTypeWriter() {
    if (i > -1) {
        textField.innerHTML = textField.innerHTML.slice(0, -1);
        i--;
        setTimeout(unTypeWriter, typeSpeed);
    };
}

// types, then untypes a message; pauses cursor blinking during typing
function typeThis(text) {
    //change typeText to parameter
    typeText = text;
    typeLength = typeText.length * typeSpeed;
    intervalUnType = (intervalTypeStartDelay * 2) + typeLength;
    typingDuration = typeLength + intervalUnType;

    // types message, pauses cursor blinking
    setTimeout(function () {
        typeWriter();
        endBlink();
        setTimeout(startBlink, typeLength);
    }, intervalTypeStartDelay);

    // untypes message, pauses cursor blinking
    setTimeout(function () {
        unTypeWriter();
        endBlink();
        setTimeout(startBlink, typeLength);
    }, intervalUnType);
};

// declare time to wait before starting next message
let waitToTypeNext = 0;
// declare integer for array of messages
let m = 0;

// recursive function that types through all messages in the array
function beginAllTyping(arrayOfMessages) {
    if (m < arrayOfMessages.length) {
        typeThis(arrayOfMessages[m]);
        waitToTypeNext = typingDuration;    
        m++;
        // recurse this function
        setTimeout(function (){
            beginAllTyping(arrayOfMessages);
        }, waitToTypeNext);
    }
};

init();
beginAllTyping(arrayOfMessagesA);