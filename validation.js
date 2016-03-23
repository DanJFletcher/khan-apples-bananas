/**************************
 * Regex Checks
 * ************************/
 regex = {
     // matches for id selectors
     hasID: /(\#[a-z]*)\s*\{/i
 }

var headCode = $doc.context.head.innerHTML;
 
staticTest($._("Color those classes"), function() {
    var result = null;
    var descrip = $._("This webpage displays the lyrics for a song about apples and bananas. There are already classes on most of the words about apples and bananas, but there is no style for those classes yet. Add two style rules, one that sets a color for the 'apples' class and another that sets a color for the 'bananas' class.");
    
    var displayP = " _ {\n   _: _;\n }"; 
    
    var applesColorP = ".apples { color: $color; }";
    var applesBackgroundColorP = ".apples { background-color: $color; }";
    var applesBackgroundP = ".apples { background: $color; }";
    var bananasColorP = ".bananas { color: $color; }";
    var bananasBackgroundColorP = ".bananas { background-color: $color; }";
    var bananasBackgroundP = ".bananas { background: $color; }";
    
    
    result = allPass(
        
        anyPass(cssMatch(applesColorP, isValidColor("$color")),
                cssMatch(applesBackgroundColorP, isValidColor("$color")),
                cssMatch(applesBackgroundP, isValidColor("$color"))),
                
        anyPass(cssMatch(bananasColorP, isValidColor("$color")),
                cssMatch(bananasBackgroundColorP, isValidColor("$color")),
                cssMatch(bananasBackgroundP, isValidColor("$color")))
            );
    
    var applesIdP = "#apples { }";
    var bananasIdP = "#bananas { }";
    console.log(headCode.charCodeAt(35));
    if (fails(result)) {
        if (cssMatches(applesIdP) || cssMatches(bananasIdP)) {
            result = fail($._("Does the text look colored? Think carefully about how to select elements based on class name and double-check your selectors."));
        } else if (regex.hasID.test(headCode)) {
            result = fail($._("It looks like you are trying to use an `ID` selector instead of a `class` selector."));
        }
    }
    assertMatch(result, descrip, displayP);
});

staticTest($._("Add more classes"), function() {
    var result = null;
    var descrip = $._("The final line of the song has no classes! Add the 'apples' class to the first `<*strong*>` in it, and the 'bananas' class to the second `<*strong*>` in it.");
    var displayP = "<strong _=\"...\"></strong>"; 
    
    result = allPass(
        htmlMatch({"p strong.apples:not(:empty)": 13}),
        htmlMatch({"p strong.bananas:not(:empty)": 13}));
    
    if (passes(result)) {
        if (!htmlMatches({"strong.apples + strong.bananas": 14})) {
            result = fail($._("Hm, did you put the class names on the appropriate tags?"));
        }
    }
    assertMatch(result, descrip, displayP);
});