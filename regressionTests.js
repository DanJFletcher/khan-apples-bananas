[{code: "<style>#apples { color: red; } #bananas { color: yellow; }</style>",
 steps: ["Does the text look colored? Think carefully about how to select elements based on class name and double-check your selectors."]
},
{code: "<style>.apples { color: red; } .bananas { color: yellow; }</style>",
 steps: ["pass"]
},
{code: "<style>.apples { color: red; } .bananas { color: yellow; }</style><h1><strong class='apples'>Apples</strong> and <strong class='bananas'>Bananas</strong></h1><p><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='bananas'>a</strong> and <strong class='apples'>b</strong></p>",
 steps: ["pass", "fail"]
 },
 {code: "<style>.apples { color: red; } .bananas { color: yellow; }</style><h1><strong class='apples'>Apples</strong> and <strong class='bananas'>Bananas</strong></h1><p><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong><strong class='apples'>a</strong> and <strong class='bananas'>b</strong></p>",
 steps: ["pass", "pass"]
 }
]