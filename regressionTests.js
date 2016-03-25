
/*****************
 * STEP 1 - PASS
 *****************/
[{
    code: "<style>.apples { color: red; } .bananas { color: yellow; }</style>",
    steps: ["pass"]
},

{
    code: "<style>.apples { background-color: red; } .bananas { background-color: yellow; }</style>",
    steps: ["pass"]
},

{
    code: "<style>.apples { background: red; } .bananas { background: yellow; }</style>",
    steps: ["pass"]
},

/*****************
 * STEP 1 - FAIL
 *****************/

{
    code: "<style>#apples { color: red; } #bananas { color: yellow; }</style>",
    steps: ["Does the text look colored? Think carefully about how to select elements based on class name and double-check your selectors."]
},

{
    code: "<style>#apples { color: red; } #bananas { color: yellow; }</style>",
    steps: ["Does the text look colored? Think carefully about how to select elements based on class name and double-check your selectors."]
},

{ 
    code: "<style>.class { color: red; }</style>",
    steps: ["You're using a `class` selector, which is correct. But check the name you're using. Does it match with the class names in the HTML?"]
},

{ 
    code: "<style>h1 { color: red; }</style>",
    steps: ["It looks like you are trying to use an `element` slector instead of a `class` selector."]
},



/*****************
 * STEP 2 - PASS
 *****************/
 
{
    code: "<style>.apples { color: red; } .bananas { color: yellow; }</style><h1><strong class='apples'>Apples</strong> and <strong class='bananas'>Bananas</strong></h1><p><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong></p>",
    steps: ["pass", "pass"]
},

/*****************
 * STEP 2 - FAIL
 *****************/
{
    code: "<style>.apples { color: red; } .bananas { color: yellow; }</style><h1><strong class='apples'>Apples</strong> and <strong class='bananas'>Bananas</strong></h1><p><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='bananas'>a</strong> and <strong class='apples'>b</strong></p>",
    steps: ["pass", "Hm, did you put the class names on the appropriate tags?"]
},
]





