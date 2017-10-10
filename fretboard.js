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
    tuning: ["E", "A", "D", "G", "B", "E"],
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







var neckElem = document.getElementsByClassName("neck")[0];

var VisualFretboard = function (fretboard, element) {
    var that = this;
    
    this.fretboard = fretboard;
    this.tuning = fretboard.tuning;
    this.element = element;
    
    function findStringContainer () {
        var children = element.children;
        for (i = 0; i < children.length; i++) {
            var child = children[i];
            if(child.classList.contains("strings")) {
                that.stringContainer = child;
            }
        }
    }
    findStringContainer();
    
    function createStrings () {
        var stringContainer = that.stringContainer;
        var strings = this.fretboard.strings.slice().reverse();
        that.strings = strings;
        
        for (var i = 0; i < strings.length; i++) {
            var child = addChild(stringContainer, "li", {"data-note": strings[i].openNote});
            
        }
    }
    createStrings();
    
    
    function createNoteContainers () {
        var stringElements = that.stringContainer.children;
        that.noteContainers = [];
        for (var i = 0; i < stringElements.length; i++) {
            var string = stringElements[i];
            // ".clear_div" firefox margin workaround
            addChild(string, "div", {"class": "clear_div"});
            var child = addChild(string, "ul", {"class": "notes"});
            that.noteContainers.push(child);
        }
    }
    createNoteContainers();

    function createNotes(container, string) {
        for (var i = 0; i < string.notes.length; i++) {
            var child = addChild(container, "li");
            child.textContent = string.notes[i];
        }
    }
    
    /*
    function findNoteContainers () {
        var strings = that.stringContainer.children;
        var containers = [];
        console.log("t");
        console.log(strings);
        for (var i = 0; i < strings.length ; i++) {
            
            var ul = strings[i].children;
            console.log(ul);
            for (var j = 0; j < ul.length; j++) {
                    console.log(ul[j]);
                if (ul[j].classList.contains("notes") === true) {
                    containers.push(ul[j]);
                    console.log(ul[j]);
                }
            }
           //containers.push(strings[i]);
        }
        that.noteContainers = containers;
    }
    findNoteContainers();*/
    
    function generateNotesOnStrings () {
        var containers = that.noteContainers;
        console.log(containers);
        var strings = that.strings;
        for (var i = 0; i < containers.length; i++ ) {
            console.log(strings);
            console.log(i);
            createNotes(containers[i], strings[i] );
        }
    }
    generateNotesOnStrings();
    
    
    
    
    
}

vFretboard = new VisualFretboard(fretboard, neckElem);
console.log(vFretboard);


/* update heights in CSS of elements according to num of strings */
/* Change this to set CSS classes for each height */
/*    neck.height */
function updateHeights(vFretboard) {
    
    var pixels = {
        "4": "166px",
        "5": "206px",
        "6": "246px",
        "7": "286px",
    };
    
    var num = vFretboard.strings.length;
    
    //var neck = document.getElementsByClassName("neck");
    var neck = vFretboard.element;
    neck.style.height = pixels[num];
}

updateHeights(vFretboard);



