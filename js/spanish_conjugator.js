//functions for all regular verb endings and tenses
function conjugateErPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string +"emos\n";
    var tu = "Tu " + string + "es\n";
    var ud = "Usted " + string + "e\n";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateErPastTense (string) {
    var yo = "Yo " + string + "i\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tu " + string + "iste\n";
    var ud = "Usted " + string + "io\n";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateErFutureTense (string) {
    var yo = "Yo " + string + "ere\n";
    var nos = "Nosotros " + string + "eremos\n";
    var tu = "Tu " + string + "eras\n";
    var ud = "Usted " + string + "era\n";
    var uds = "Ustedes " + string + "eran";
    return yo + nos + tu + ud + uds;
}

function conjugateArPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string + "amos\n";
    var tu = "Tu " + string + "as\n";
    var ud = "Usted " + string + "a\n";
    var uds = "Ustedes " + string + "an";
    return yo + nos + tu + ud + uds;
}

function conjugateArPastTense (string) {
    var yo = "Yo " + string + "e\n";
    var nos = "Nosotros " + string + "amos\n";
    var tu = "Tu " + string + "aste\n";
    var ud = "Usted " + string + "o\n";
    var uds = "Ustedes " + string + "aron";
    return yo + nos + tu + ud + uds;
}

function conjugateArFutureTense (string) {
    var yo = "Yo " + string + "are\n";
    var nos = "Nosotros " + string + "aremos\n";
    var tu = "Tu " + string + "aras\n";
    var ud = "Usted " + string + "ara\n";
    var uds = "Ustedes " + string + "aran";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tu " + string + "es\n";
    var ud = "Usted " + string + "e\n";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPastTense (string) {
    var yo = "Yo " + string + "i\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tu " + string + "iste\n";
    var ud = "Usted " + string + "io\n";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateIrFutureTense (string) {
    var yo = "Yo " + string + "ire\n";
    var nos = "Nosotros " + string + "iremos\n";
    var tu = "Tu " + string + "iras\n";
    var ud = "Usted " + string + "ira\n";
    var uds = "Ustedes " + string + "iran";
    return yo + nos + tu + ud + uds;
}

//functions testing for verb endings
function verbErTest (string) {
    return string.endsWith("er");
}

function verbIrTest(string) {
    return string.endsWith("ir");
}

function verbArTest(string) {
    return string.endsWith("ar");
}

//prompting user for verb and tense
var verb = prompt("Enter a Spanish verb to be conjugated.");
var tense = prompt("Would you like past, present, or future tense?");
verb = verb.toLowerCase();
tense = tense.toLowerCase();


//tests to see which verb ending & tense is needed
if (verbErTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateErPastTense(verb));
}
else if (verbErTest(verb) && (tense =="present")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateErPresentTense(verb));
}
else if (verbErTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateErFutureTense(verb));
}
else if (verbIrTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateIrPastTense(verb));
}
else if (verbIrTest(verb) && (tense == "present")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateIrPresentTense(verb));
}
else if (verbIrTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateIrFutureTense(verb));
}
else if (verbArTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateArPastTense(verb));
}
else if (verbArTest(verb) && (tense == "present")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateArPresentTense(verb));
}
else if (verbArTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
    alert(conjugateArFutureTense(verb));
}
else {
    alert("This is not valid.");
}