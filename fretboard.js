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




/*      We can just reverse a copy of the strings.          */
/*      Note that the array's elements are still the same   */
/*      as they point to the same object references         */
strings = fretboard.strings.slice().reverse();
console.log(strings);


// expect "div"
// eg addChild(stringsContainer, "li", {"data-note": "Z"});
function addChild(parent, child, attributes) {
    child = document.createElement(child);
    if (attributes) {
        for (var attr in attributes) {
            child.setAttribute(attr, attributes[attr])
        }
    }
    parent.appendChild(child);
    return child;
}


/* Right now we are only set up for one fretboard per page      */
/* I definitely would not want to be limited to one ultimately  */
/* But this is a good place to start  */

/* Get Unordered List Element */
var stringsContainer= document.getElementById("strings");
console.dir(stringsContainer);

/* generates String list items */
function generateStrings () {
    var stringsContainer = document.getElementById("strings");
    
    for (var i = 0; i < strings.length; i++) {
        var string = strings[i];
        addChild(stringsContainer, "li", {"data-note": string.openNote})
    }
}
generateStrings();

/* Generate note container */
function generateNoteContainers () {
    var stringElements = stringsContainer.children;
    for (var i = 0; i < stringElements.length; i++) {
        var string = stringElements[i];
        // ".clear_div" firefox margin workaround
        addChild(string, "div", {"class": "clear_div"});
        addChild(string, "ul", {"class": "notes"});
    }  
}

generateNoteContainers();

/* The fun part: Generating notes on each string */
function note_generators() {
    // Closure that uses i from the for loop
    function generateNotes(container) {
        var string = strings[i];
        for (var j = 0; j < string.notes.length; j++) {
            var child = addChild(container, "li");
            child.textContent = string.notes[j];
        }
        
    }
    
    // note if we scale to multiple fretboards this will need to change
    var noteContainers = document.getElementsByClassName("notes");
    
    for (var i = 0; i < noteContainers.length; i++ ) {
        generateNotes(noteContainers[i]);
    }
}

note_generators();


/* update heights in CSS of elements according to num of strings */
function updateHeights() {
    
    var pixels = {
        "4": "166px",
        "5": "206px",
        "6": "246px",
        "7": "286px",
    };
    
    var num = strings.length;
    
    var neck = document.getElementsByClassName("neck");
    neck[0].style.height = pixels[num];
}

updateHeights();


