// Dummy E Major Scale Object
var eMajorScale = {
    object: "scale",
    root: "E",
    notes: [
        "E",
        "F#",
        "G#",
        "A",
        "B",
        "C#",
        "D#"
    ]
};

// Dummy Fretboard Object of Tuning E,A,D,G,B,E
var fretboard = {
    object: "fretboard",
    strings: [
        {
            object: "guitar_string",
            openNote: "E",
            notes: [
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B",
                "C",
                "C#",
                "D",
                "D#",
                "E"
            ]
        },       
        {
            object: "guitar_string",
            openNote: "A",
            notes: [
                "A",
                "A#",
                "B",
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A"
            ]
        },
        {
            object: "guitar_string",
            openNote: "D",
            notes: [
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B",
                "C",
                "C#",
                "D",
            ]
        },
        {
            object: "guitar_string",
            openNote: "G",
            notes: [
                "G",
                "G#",
                "A",
                "A#",
                "B",
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G"
            ]
        },
        {
            object: "guitar_string",
            openNote: "B",
            notes: [
                "B",
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ]
        },
        {
            object: "guitar_string",
            openNote: "E",
            notes: [
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B",
                "C",
                "C#",
                "D",
                "D#",
                "E"
            ]
        }
    ]
};


// C
console.log(fretboard.strings[4].notes[1]);

var strings = document.querySelectorAll(".strings");
console.log(strings);
strings = strings[0];
console.log(strings);

//strings = strings.children;
//strings[0].className = "jump.hey";
console.log(strings);


console.log(fretboard.strings.length);
/* We need to iterate from end to start because DOM order matters */
last = fretboard.strings.length - 1;
for (var i = last; i >= 0; i--) {
    /* add each string */
    var element = document.createElement("li");
    strings.appendChild(element);
    
    /* notate the open string? */
    element.setAttribute("data-note",fretboard.strings[i].openNote);
}

/* Iterate through the string lists */
var strings = document.querySelectorAll(".strings");
strings = strings[0];

var i = (fretboard.strings.length - 1) + 6;
for (child in strings.children) {
    console.log("i below");
    console.log(i);
    var string = strings.children[child];
    console.log(string);
    console.log("test");
    if (fretboard.strings[i] === undefined) {
            i--;
            continue;
    }
    
    if (i < 0) {break;}
    if (string.nodeType !== 1) {continue;}
    
    console.log(fretboard.strings[i]);
    
        console.log("made it this far");
        console.log("note" + i);
        console.log(fretboard.strings[i].openNote);
        
        console.log(fretboard.strings[i].openNote + "" + string.getAttribute("data-note"));
        if (string.getAttribute("data-note") === fretboard.strings[i].openNote){
            /* temp check to make sure this one we add to */
            console.log((fretboard.strings.length - 1) + 7);
            console.log("testtestetsetst");
            if (i === (fretboard.strings.length - 1) + 7) {
                /* if the first go round the loop then add the clear div */
                console.log("what about this this this");
                var element = document.createElement("div");
                element.className = "clear_div";
                string.appendChild(element);
                
                var element = document.createElement("ul");
                element.className = "notes";
                string.appendChild(element);
            }
            
            /* otherwise just add the notes */
            var element = document.createElement("ul");
            element.className = "notes";
            string.appendChild(element);

        }
    i--;
}


console.log(strings);

