function conjugateErPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string +"emos\n";
    var tu = "Tu " + string + "es\n";
    var ud = "Usted " + string + "e\n";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

console.log(conjugateErPresentTense("vend"));
