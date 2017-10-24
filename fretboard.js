scale = {'root': 'E', 'notes': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'], 'intervals': ['Second', 'Major Third', 'Fourth', 'Fifth', 'Sixth', 'Major Seventh'], 'interval_dict': {'E': 'Unison', 'F#': 'Second', 'G#': 'Major Third', 'A': 'Fourth', 'B': 'Fifth', 'C#': 'Sixth', 'D#': 'Major Seventh'}, 'triads': {'E': '[{"root": "E", "notes": ["E", "G#", "B"], "intervals": ["Major Third", "Fifth"], "interval_dict": {"G#": "Major Third", "B": "Fifth"}, "name": "E Major"}, {"root": "E", "notes": ["E", "F#", "B"], "intervals": ["Second", "Fifth"], "interval_dict": {"F#": "Second", "B": "Fifth"}, "name": "E Suspended Two"}, {"root": "E", "notes": ["E", "A", "B"], "intervals": ["Fourth", "Fifth"], "interval_dict": {"A": "Fourth", "B": "Fifth"}, "name": "E Suspended Four"}]', 'F#': '[{"root": "F#", "notes": ["F#", "A", "C#"], "intervals": ["Minor Third", "Fifth"], "interval_dict": {"A": "Minor Third", "C#": "Fifth"}, "name": "F# Minor"}, {"root": "F#", "notes": ["F#", "G#", "C#"], "intervals": ["Second", "Fifth"], "interval_dict": {"G#": "Second", "C#": "Fifth"}, "name": "F# Suspended Two"}, {"root": "F#", "notes": ["F#", "B", "C#"], "intervals": ["Fourth", "Fifth"], "interval_dict": {"B": "Fourth", "C#": "Fifth"}, "name": "F# Suspended Four"}]', 'G#': '[{"root": "G#", "notes": ["G#", "B", "D#"], "intervals": ["Minor Third", "Fifth"], "interval_dict": {"B": "Minor Third", "D#": "Fifth"}, "name": "G# Minor"}, {"root": "G#", "notes": ["G#", "C#", "D#"], "intervals": ["Fourth", "Fifth"], "interval_dict": {"C#": "Fourth", "D#": "Fifth"}, "name": "G# Suspended Four"}]', 'A': '[{"root": "A", "notes": ["A", "C#", "E"], "intervals": ["Major Third", "Fifth"], "interval_dict": {"C#": "Major Third", "E": "Fifth"}, "name": "A Major"}, {"root": "A", "notes": ["A", "B", "E"], "intervals": ["Second", "Fifth"], "interval_dict": {"B": "Second", "E": "Fifth"}, "name": "A Suspended Two"}, {"root": "A", "notes": ["A", "C#", "D#"], "intervals": ["Major Third", "Diminished Fifth"], "interval_dict": {"C#": "Major Third", "D#": "Diminished Fifth"}, "name": "A Flat Five"}]', 'B': '[{"root": "B", "notes": ["B", "D#", "F#"], "intervals": ["Major Third", "Fifth"], "interval_dict": {"D#": "Major Third", "F#": "Fifth"}, "name": "B Major"}, {"root": "B", "notes": ["B", "C#", "F#"], "intervals": ["Second", "Fifth"], "interval_dict": {"C#": "Second", "F#": "Fifth"}, "name": "B Suspended Two"}, {"root": "B", "notes": ["B", "E", "F#"], "intervals": ["Fourth", "Fifth"], "interval_dict": {"E": "Fourth", "F#": "Fifth"}, "name": "B Suspended Four"}]', 'C#': '[{"root": "C#", "notes": ["C#", "E", "G#"], "intervals": ["Minor Third", "Fifth"], "interval_dict": {"E": "Minor Third", "G#": "Fifth"}, "name": "C# Minor"}, {"root": "C#", "notes": ["C#", "D#", "G#"], "intervals": ["Second", "Fifth"], "interval_dict": {"D#": "Second", "G#": "Fifth"}, "name": "C# Suspended Two"}, {"root": "C#", "notes": ["C#", "F#", "G#"], "intervals": ["Fourth", "Fifth"], "interval_dict": {"F#": "Fourth", "G#": "Fifth"}, "name": "C# Suspended Four"}]', 'D#': '[{"root": "D#", "notes": ["D#", "F#", "A"], "intervals": ["Minor Third", "Diminished Fifth"], "interval_dict": {"F#": "Minor Third", "A": "Diminished Fifth"}, "name": "D# Diminished"}]'}};

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
        that.strings = [];
        
        var stringContainer = that.stringContainer;
        var strings = that.fretboard.strings.slice().reverse();
        
        for (var i = 0; i < strings.length; i++) {
            var child = addChild(stringContainer, "li", {"data-note": strings[i].openNote});
            
            /* create a new v_String object for v_fretboard */
            var string = {
                object: "visual_string",
                element: child,
                notes: []
            }
            
            that.strings.push(string);
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
    

    
    
    that.toggleNote = function (note) {
        console.log(that.noteElements);
        /* for each string */
        for (var i = 0; i < that.strings.length; i++) {
            var notes = that.strings[i].notes;
            
            /* for each note */
            for (var j = 0; j < notes.length; i++) {
                console.log(element);
                if (note === notes[j].textContent) {
                    notes[j].classList.toggle("invisible");
                }
            }
        }
        
        /*
        for (var i = 0; i < that.noteElements.length; i++) {
            var element = that.noteElements[i];
            console.log(element);
            if (note === element.textContent) {
                element.classList.toggle("invisible");
            }
        }*/
        
    };
    
    
    
    function enableClickToggle() {
        var listener = function(event) {
            //event.target.classList.toggle("invisible");
            console.log(that);
            var note = event.target.textContent;
            that.toggleNote(note);
        };

        var elems = that.noteContainers;
        for(var i = 0; i < elems.length; i++) {
            elems[i].addEventListener('click', listener);
        }
    }

    enableClickToggle();
    
    
    
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



    