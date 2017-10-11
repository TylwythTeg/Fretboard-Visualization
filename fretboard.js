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





// addChild(container, "li", {"class": "child"});
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
    this.stringContainer = findStringContainer();
    
    createStrings();
    createNoteContainers();
    generateNotesOnStrings();
    
    /* method definitions */
    function findStringContainer () {
        var children = element.children;
        var container = [];
        for (i = 0; i < children.length; i++) {
            var child = children[i];
            if(child.classList.contains("strings")) {
                container = child;
            }
        }
        return container;
    }
    
    function createStrings () {
        var stringContainer = that.stringContainer;
        var strings = that.fretboard.strings.slice().reverse();
        
        for (var i = 0; i < strings.length; i++) {
            var child = addChild(stringContainer, "li", {"data-note": strings[i].openNote});
            
        }
    }
    
    
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
    
    /*
    function setVisibility(child) {
        var note = child.textContent;
        if (!(eMajorScale.notes.includes(string.notes[i])) ) {
                child.classList.toggle("invisible");
        }
    }*/
    

    function createNotes(container, string) {
        for (var i = 0; i < string.notes.length; i++) {
            var child = addChild(container, "li");
            child.textContent = string.notes[i];
            
            console.log("tes");
            console.log(eMajorScale);
            console.log(string.notes[i]);
            console.log(string.notes[i] in eMajorScale.notes);
            
            //setVisibility(child);
            
            if (!(eMajorScale.notes.includes(string.notes[i])) ) {
                child.classList.toggle("invisible");
            }
        }
    }
    
    function generateNotesOnStrings () {
        var containers = that.noteContainers;
        var strings = that.fretboard.strings.slice().reverse();
        for (var i = 0; i < containers.length; i++ ) {
            createNotes(containers[i], strings[i] );
        }
    }
    
    
    
    
    
    
}

vf = new VisualFretboard(fretboard, neckElem);
console.log(vf);


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
    
    var num = vf.fretboard.strings.length;
    
    //var neck = document.getElementsByClassName("neck");
    var neck = vFretboard.element;
    neck.style.height = pixels[num];
}

updateHeights(vf);



