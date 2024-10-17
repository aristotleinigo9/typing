//	HYPE.documents["index"]

(function() {
    (function m() {
        function k(a, b, c, d) {
            var e = !1;
            null == window[a] && (null == window[b] ? (window[b] = [],
            window[b].push(m),
            a = document.getElementsByTagName("head")[0],
            b = document.createElement("script"),
            e = l,
            false == !0 && (e = ""),
            b.type = "text/javascript",
            "" != d && (b.integrity = d,
            b.setAttribute("crossorigin", "anonymous")),
            b.src = e + "/" + c,
            a.appendChild(b)) : window[b].push(m),
            e = !0);
            return e
        }
        var l = "index.hyperesources"
          , f = "index"
          , g = "index_hype_container";
        if (false == !1)
            try {
                for (var c = document.getElementsByTagName("script"), a = 0; a < c.length; a++) {
                    var d = c[a].src
                      , b = null != d ? d.indexOf("/index_hype_generated_script.js") : -1;
                    if (-1 != b) {
                        l = d.substr(0, b);
                        break
                    }
                }
            } catch (p) {}
        c = navigator.userAgent.match(/MSIE (\d+\.\d+)/);
        c = parseFloat(c && c[1]) || null;
        d = !0 == (null != window.HYPE_674F || null != window.HYPE_dtl_674F) || false == !0 || null != c && 10 > c;
        a = !0 == d ? "HYPE-674.full.min.js" : "HYPE-674.thin.min.js";
        c = !0 == d ? "F" : "T";
        d = d ? "" : "";
        if (false == !1 && (a = k("HYPE_674" + c, "HYPE_dtl_674" + c, a, d),
        true == !0 && (a = a || k("HYPE_w_674", "HYPE_wdtl_674", "HYPE-674.waypoints.min.js", "")),
        false == !0 && (a = a || k("Matter", "HYPE_pdtl_674", "HYPE-674.physics.min.js", "")),
        a))
            return;
        d = window.HYPE.documents;
        if (null != d[f]) {
            b = 1;
            a = f;
            do
                f = "" + a + "-" + b++;
            while (null != d[f]);
            for (var e = document.getElementsByTagName("div"), b = !1, a = 0; a < e.length; a++)
                if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) {
                    var b = 1
                      , h = g;
                    do
                        g = "" + h + "-" + b++;
                    while (null != document.getElementById(g));
                    e[a].id = g;
                    b = !0;
                    break
                }
            if (!1 == b)
                return
        }
        b = [];
        b = [{
            name: "backToMain",
            source: "function(hypeDocument, element, event) {\n\t\n\tsessionStorage.clear(); //new 63020\n\t\n\tif (!($(\"#timer\").hasClass(\"ready\"))) { //only destroy timer is it has this class i.e. keypress not started  \n\t\t $(\"#timer\").countdowntimer(\"pause\",\"pause\");\n        $(\"#timer\").countdowntimer(\"destroy\");\n    }\n      \thypeDocument.showSceneNamed('getReadyTest');\n\t}",
            identifier: "229"
        }, {
            name: "ensureIDandEKprogramSelected",
            source: "function(hypeDocument, element, event) {\n\twindow.scrollTo(0, 0);\n\tvar checkTheInp = \"\";\n\tvar testType = \"\";\n\tvar testTime = \"\";\n\tvar div = document.getElementById(\"pasErrMes\");\n\tdiv.textContent = \"\";\n\t$('#warningbox').hide();\n\t\n\t\n\t \t//When you hit change a dropdown selection \n\t$('#selectTestType').on('change', function () {\n   \t\tvar abbrevSelected = $(this).find(':selected').data('name')\n   \t\t\tif (abbrevSelected) {\n\t\t\t\t\ttestType = abbrevSelected;\n\t\t\t}\n\t\t\tvar div = document.getElementById(\"pasErrMes\");\n\t\t\tdiv.textContent = \"\";\n\t});\n\t \t//When you hit change a dropdown selection \n\t$('#selectTestTime').on('change', function () {\n   \t\tvar abbrevSelected = $(this).find(':selected').data('name')\n   \t\t\tif (abbrevSelected) {\n\t\t\t\t\ttestTime = abbrevSelected;\n\t\t\t}\n\t\t\tvar div = document.getElementById(\"pasErrMes\");\n\t\t\tdiv.textContent = \"\";\n\t});\t\n\t\n\n$(\"#candRef\").on(\"change input keyup\", function () {\n\t    checkTheInp = this.value.toString().length;\n      \tvar div = document.getElementById(\"pasErrMes\");\n\t\tdiv.textContent = \"\";\n});\n\n$(\"#dataEntered\").on(\"click\", function() {\n\n\t\t\tvar div = document.getElementById(\"pasErrMes\");\n\t\t\tdiv.textContent = \"\";\n\t\t\t\n\t\t\tif (testType <= 0) {\n\t\t\t\tdiv.textContent = \"You must select a test type.\";\n\t\t\t} else if (testTime <= 0) {\n\t\t\t\tdiv.textContent = \"You must select a test time.\";\n\t\t\t} else if (checkTheInp <= 0) {\n\t\t\t\tdiv.textContent = \"You must enter a candidate reference.\";\n\t\t\t}\n\n\t if (testType && testTime && checkTheInp>0) {\n\t \t\t\t$('#warningbox').show();\n\t \t\t\t$('#candRef').prop('disabled', true);\n\t \t\t\t$('#selectTestType').children().prop('disabled', true);\n\t \t\t\t$('#selectTestTime').children().prop('disabled', true);\n\t }\n\n});\n\n\n\n$('#candRef').keypress(function(e){\n        if(e.which == 13){//Enter key pressed\n            $('#dataEntered').click();\n        }\n});\n\n\n$(\"#cancelCorrect\").on(\"click\", function() {\n\t \t\t\t$('#warningbox').hide();\n\t \t\t\t$('#candRef').prop('disabled', false);\n\t \t\t\t$('#selectCourseTest').children().prop('disabled', false);\n\n});\n\n$(\"#confirmCorrect\").on(\"click\", function() {\n\n\twindow.ebn = $(\"#candRef\").val();\n\t$(this).prop(\"data-name\",testType);\n\n\tvar loaded = false;\n\t\t\twindow.onload = function() {\n     \t\t\tloaded = true;\n \t\t\t};\n\t\t\t\tsetTimeout(function() {\n     \t\t\t\tif(!loaded) {\n\n     \t\t\t\thypeDocument.showSceneNamed('testPage');\n     \t\t\t\t//monitor the following which forces focus to the typinginput\n     \t\t\t\tvar htmlElement = document.querySelector(\"html\");\n\t\t\t\t\thtmlElement.addEventListener('click', function() { \n\t\t\t\t\t\t\tdocument.getElementById(\"typingInput\").focus();\n\t\t\t\t\t}, false);\n\n\t\t\t\t\t\t//$(\"#timer\").countdowntimer(\"destroy\");\n         \t\t\t\ttyping(testType,testTime, window.ebn); \n         \t\t\t\t\n     \t\t\t\t}\n\t\t\t\t}, 100);\n\t\n});\n\n\t\n}",
            identifier: "257"
        }, {
            name: "scrollTop",
            source: "function(hypeDocument, element, event) {\nwindow.scrollTo(0, 0);\n\t\n}",
            identifier: "329"
        }];
        e = {};
        h = {};
        for (a = 0; a < b.length; a++)
            try {
                h[b[a].identifier] = b[a].name,
                e[b[a].name] = eval("(function(){return " + b[a].source + "})();")
            } catch (n) {
                window.console && window.console.log(n),
                e[b[a].name] = function() {}
            }
        c = new window["HYPE_674" + c](f,g,{
            "-2": {
                n: "blank.gif"
            },
            "25": {
                p: 1,
                n: "imgnew_2x.jpg",
                g: "728",
                o: true,
                t: "@2x"
            },
            "18": {
                p: 1,
                n: "shutterstock_297853160_2x.png",
                g: "660",
                o: true,
                t: "@2x"
            },
            "10": {
                n: "pt-mono-v7-latin-regular.woff"
            },
            "19": {
                p: 1,
                n: "covermin.jpg",
                g: "668",
                o: true,
                t: "@1x"
            },
            "11": {
                n: "pt-mono-v7-latin-regular.woff2"
            },
            "0": {
                n: "jquery-3.4.1.min.js"
            },
            "12": {
                n: "source-code-pro-v11-latin-regular.woff2"
            },
            "1": {
                n: "jquery-ui.min.js"
            },
            "20": {
                p: 1,
                n: "right.jpg",
                g: "697",
                o: true,
                t: "@1x"
            },
            "2": {
                n: "normalize.css"
            },
            "13": {
                n: "source-code-pro-v11-latin-regular.woff"
            },
            "3": {
                n: "droidsansmono-webfont.woff2"
            },
            "21": {
                p: 1,
                n: "right_2x.jpg",
                g: "697",
                o: true,
                t: "@2x"
            },
            "14": {
                n: "jQuery.countdownTimer.min.js"
            },
            "4": {
                n: "droidsansmono-webfont.woff"
            },
            "5": {
                n: "bulma.min.css"
            },
            "15": {
                n: "chance.min.js"
            },
            "22": {
                n: "styles.css"
            },
            "6": {
                n: "courier-prime-v1-latin-regular.woff"
            },
            "23": {
                n: "typing.min.js"
            },
            "16": {
                p: 1,
                n: "Asset%201.svg",
                g: "651",
                t: "image/svg+xml"
            },
            "7": {
                n: "courier-prime-v1-latin-regular.woff2"
            },
            "-1": {
                n: "PIE.htc"
            },
            "8": {
                n: "ubuntu-mono-v9-latin-regular.woff"
            },
            "24": {
                p: 1,
                n: "imgnew.jpg",
                g: "728",
                o: true,
                t: "@1x"
            },
            "17": {
                p: 1,
                n: "shutterstock_297853160.png",
                g: "660",
                o: true,
                t: "@1x"
            },
            "9": {
                n: "ubuntu-mono-v9-latin-regular.woff2"
            }
        },l,["<style>@font-face {\n    font-family: 'droid_sans_monoregular';\n    src: url('index.hyperesources/droidsansmono-webfont.woff2') format('woff2'),\n         url('index.hyperesources/droidsansmono-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}</style>", "<style>@font-face {\n    font-family: 'ubuntu_mono';\n    src: url('index.hyperesources/ubuntu-mono-v9-latin-regular.woff2') format('woff2'),\n         url('index.hyperesources/ubuntu-mono-v9-latin-regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}</style>", "<style>@font-face {\n    font-family: 'PT_mono';\n    src: url('index.hyperesources/pt-mono-v7-latin-regular.woff2') format('woff2'),\n         url('index.hyperesources/pt-mono-v7-latin-regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}</style>", "<style>@font-face {\n    font-family: 'courier_prime';\n    src: url('index.hyperesources/courier-prime-v1-latin-regular.woff2') format('woff2'),\n         url('index.hyperesources/courier-prime-v1-latin-regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}</style>", "<style>@font-face {\n    font-family: 'source_code_pro';\n    src: url('index.hyperesources/source-code-pro-v11-latin-regular.woff2') format('woff2'),\n         url('index.hyperesources/source-code-pro-v11-latin-regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}</style>"],e,[{
            n: "start",
            o: "470",
            X: [0]
        }, {
            n: "userguide",
            o: "701",
            X: [1]
        }, {
            n: "getReadyTest",
            o: "613",
            X: [2]
        }, {
            n: "testPage",
            o: "1",
            X: [3]
        }, {
            n: "chart",
            o: "670",
            X: [4]
        }, {
            n: "posture",
            o: "688",
            X: [5]
        }],[{
            A: {
                a: [{
                    p: 4,
                    h: "329"
                }]
            },
            o: "564",
            p: "600px",
            cA: false,
            Y: 1024,
            Z: 1200,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["731", "733", "732", "730", "734"],
            n: "Desktop",
            "_": 0,
            v: {
                "732": {
                    aU: 8,
                    G: "#000",
                    c: 331,
                    aV: 8,
                    r: "inline",
                    d: 57,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button is-large is-info\">\nSee the correct posture\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "688"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 10,
                    aS: 8,
                    aT: 8,
                    a: 677,
                    b: 215
                },
                "733": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content  has-text-grey-dark\">\n<p>This site is different to other typing test websites because it generates random content to type from a comprehensive database of over 10,000 commonly-used English nouns, verbs, phrases, and other parts of business English writing. Further parts of the test content such as dates, numbers, and proper names are generated entirely at random.</p><p>All these parts are organized into similar categories so we can be sure that every typing test generated is of a similar complexity. Test security is greatly improved as every typing test generated will never have the same typing test content as another.</p>\n<h4>Technical requirements</h4>\n<ul>\n<li>Use a QWERTY keyboard on a desktop PC. You can take a test using a tablet device with a comfortable and adequately-sized wireless/bluetooth keyboard.</li>\n<li>Use the latest version of any of following browsers: Google Chrome, Safari, Firefox, Microsoft Edge, or Internet Explorer</li>\n</ul>\n\n</div>",
                    x: "visible",
                    a: 29,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 173,
                    z: 14,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 305,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 645
                },
                "730": {
                    aU: 8,
                    G: "#000",
                    c: 331,
                    aV: 8,
                    r: "inline",
                    d: 57,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button is-large is-info\">\nSee the keyboarding chart\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "670"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 9,
                    aS: 8,
                    aT: 8,
                    a: 677,
                    b: 297
                },
                "734": {
                    aU: 8,
                    G: "#000",
                    c: 331,
                    aV: 8,
                    r: "inline",
                    d: 57,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button is-large is-info\">\nTake a typing speed test\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "701"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 8,
                    aS: 8,
                    aT: 8,
                    a: 677,
                    b: 378
                },
                "731": {
                    aV: 8,
                    w: "\n  <section class=\"hero \">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title has-text-grey-dark\" style=\"padding-bottom:10px\">\n       <a href=\"https://typingitc.netlify.app/\">typingitc.netlify.app</a>\n      </h1>\n\n      <h3 class=\"subtitle is-5 has-text-grey-dark\">\n        Test and practice your typing/keyboarding skills\n      </h3>\n    </div>\n  </div>\n</section>\n\n",
                    x: "visible",
                    a: 8,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 0,
                    z: 13,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 126,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 1008
                }
            }
        }, {
            A: {
                a: [{
                    p: 4,
                    h: "329"
                }]
            },
            o: "715",
            p: "600px",
            cA: false,
            Y: 1024,
            Z: 1200,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["738", "736", "739", "735", "737", "741", "740"],
            n: "Desktop",
            "_": 1,
            v: {
                "736": {
                    aV: 8,
                    w: "\n    <div class=\"container\">\n      <h1 class=\"title has-text-grey-dark\">\n        Take a typing speed test\n      </h1>\n    </div>\n\n\n",
                    x: "visible",
                    a: 320,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 21,
                    z: 14,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 42,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 368
                },
                "739": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content  has-text-grey-dark\">\n<h4>User instructions</h4>\n</div>",
                    x: "visible",
                    a: 23,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 110,
                    z: 21,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 48,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 481
                },
                "735": {
                    aV: 8,
                    w: "\n<div class=\" is-size-5 content has-text-grey-dark\">\n\n<p style=\"margin-bottom: 0.5em;\">To the right of the main window, the following is visible at the start of a test:</p>\n<ul style=\"margin-top: 0;\">\n<li>test type</li>\n<li>candidate reference</li><li>timing duration</li>\n</ul>\n<p style=\"margin-bottom: 0.5em;\">As you type, you will see the latest:</p>\n<ul style=\"margin-top: 0;\">\n<li>error count as characters incorrectly typed and uncorrected</li><li>speed in words per minute (WPM)</li>\n</ul>\n<p style=\"margin-bottom: 0.5em;\">At the end of a test, you will also see:</p>\n<ul style=\"margin-top: 0;\">\n<li>time left</li>\n<li>accuracy (%)</li><li>final WPM</li><li>date and time</li>\n</ul>\n<p></p>\n\n</div>",
                    x: "visible",
                    a: 30,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 158,
                    z: 18,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 447,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 369
                },
                "738": {
                    aU: 8,
                    G: "#000",
                    c: 101,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "    <a class=\"button is-medium is-info\">\nBack\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "470"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 9,
                    aS: 8,
                    aT: 8,
                    a: 34,
                    b: 15
                },
                "741": {
                    aV: 8,
                    w: "\n<div class=\" is-size-5 content has-text-grey-dark\">\n\n<p style=\"margin-bottom: 0.5em;\">Use all the designated time to type as much as you can. The blue cursor indicates the current character to type and the timer starts when you press the first key. The test ends when you finish typing all the text, or when the timer reaches zero, whichever comes first. To set accessibility preferences, choose Settings.</p>\n</div>",
                    x: "visible",
                    a: 30,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 600,
                    z: 17,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 72,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 950
                },
                "737": {
                    p: "no-repeat",
                    c: 591,
                    q: "100% 100%",
                    d: 384,
                    r: "inline",
                    I: "Solid",
                    J: "Solid",
                    gg: "0",
                    K: "Solid",
                    L: "Solid",
                    h: "728",
                    M: 1,
                    N: 1,
                    j: "absolute",
                    x: "visible",
                    O: 1,
                    k: "div",
                    P: 1,
                    dB: "img",
                    z: 22,
                    Q: 0,
                    R: "#000",
                    S: 3,
                    a: 426,
                    T: 4,
                    b: 169
                },
                "740": {
                    aU: 8,
                    G: "#000",
                    c: 80,
                    aV: 8,
                    r: "inline",
                    d: 57,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button is-medium is-info\">\nOk\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "613"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 19,
                    aS: 8,
                    aT: 8,
                    a: 464,
                    b: 695
                }
            }
        }, {
            A: {
                a: [{
                    p: 4,
                    h: "257"
                }]
            },
            o: "625",
            p: "600px",
            cA: false,
            Y: 1024,
            Z: 1200,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["749", "751", "742", "744", "746", "752", "745", "750", "748", "747", "743", "753"],
            n: "Desktop",
            "_": 2,
            v: {
                "746": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content\">\n<p>Select speed test type:</p>\n</div>",
                    x: "visible",
                    a: 85,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 163,
                    z: 2,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    d: 28,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#4A4A4A",
                    c: 228
                },
                "752": {
                    aV: 8,
                    w: "<div class=\"select is-medium\" id=\"selectTestTime\">\n  <select>\n  \t<option value=\"choose\">--</option>\n    <option data-name=\"ONE\">A one-minute speed test</option>\n    <option data-name=\"THREE\">A three-minute speed test</option>\n    <option data-name=\"FIVE\">A five-minute speed test</option>\n\n  </select>\n</div>",
                    x: "visible",
                    a: 338,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 216,
                    z: 11,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 50,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 637
                },
                "749": {
                    h: "651",
                    p: "no-repeat",
                    x: "visible",
                    a: 799,
                    dB: "img",
                    q: "100% 100%",
                    j: "absolute",
                    r: "inline",
                    z: 14,
                    k: "div",
                    b: 14,
                    d: 114,
                    c: 102
                },
                "744": {
                    aV: 8,
                    w: "<div class=\"select is-medium\" id=\"selectTestType\">\n  <select>\n  \t<option value=\"choose\">--</option>\n    <option data-name=\"STR\">Letter keys, and 3 punctuation keys: . , ?</option>\n    <option data-name=\"STAT\">Letter keys, numbers, and many common symbols</option>\n\n  </select>\n</div>",
                    x: "visible",
                    a: 338,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 150,
                    z: 4,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 50,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 637
                },
                "750": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content\">\n<p>Enter your candidate reference (e.g. name, ID etc.):</p>\n</div>",
                    x: "visible",
                    a: 85,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 266,
                    z: 3,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    d: 61,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#4A4A4A",
                    c: 213
                },
                "747": {
                    aU: 8,
                    G: "#000",
                    c: 76,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button is-medium is-info\" id=\"dataEntered\">\nOk\n</a>",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 7,
                    aS: 8,
                    aT: 8,
                    a: 754,
                    b: 281
                },
                "742": {
                    aV: 8,
                    w: "\n    <div class=\"container\">\n      <h1 class=\"title has-text-grey-dark\">\n        Take a typing speed test\n      </h1>\n    </div>\n\n\n",
                    x: "visible",
                    a: 320,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 21,
                    z: 13,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 42,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 368
                },
                "753": {
                    aV: 8,
                    w: "<article class=\"message is-warning\" id=\"warningbox\">\n  <div class=\"message-header is-size-4\">\n    <p>Get ready!</p>\n  </div>\n  <div class=\"message-body is-size-5\">\n If you are taking this test under official test conditions, call over your test supervisor who will verify that all information has been correctly entered. Press cancel if you need to correct any information.<br><br>When the test page loads, the timer will start after you press the first key. The test will end when you finish typing all the text content, or when the timer reaches zero, whichever comes first.<br><br>\n\t <footer class=\"message-header\">\n      <button class=\"button is-grey is-medium\" id=\"cancelCorrect\">Cancel</button>\n      <button class=\"button is-grey is-medium\" id=\"confirmCorrect\">Ok, I am ready to begin</button>\n    </footer>\n</div></article>",
                    x: "visible",
                    a: 85,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 366,
                    z: 6,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 333,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 825
                },
                "745": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content\">\n<p>Select test timing:</p>\n</div>",
                    x: "visible",
                    a: 85,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 227,
                    z: 10,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    d: 28,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#4A4A4A",
                    c: 228
                },
                "751": {
                    aU: 8,
                    G: "#000",
                    c: 101,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "    <a class=\"button is-medium is-info\">\nBack\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "701"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 8,
                    aS: 8,
                    aT: 8,
                    a: 34,
                    b: 15
                },
                "748": {
                    aV: 8,
                    w: "<input class=\"input is-medium\" id=\"candRef\" placeholder=\"candidate reference\" maxlength=\"50\">",
                    x: "visible",
                    a: 338,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 281,
                    z: 5,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    d: 42,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 414
                },
                "743": {
                    aV: 8,
                    w: "<div id=\"pasErrMes\"></div>",
                    x: "visible",
                    a: 338,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 361,
                    z: 12,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 40,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 434
                }
            }
        }, {
            o: "3",
            A: {
                a: [{
                    p: 4,
                    h: "329"
                }]
            },
            p: "600px",
            B: {
                a: [{
                    p: 4
                }]
            },
            cA: false,
            Z: 1200,
            Y: 1024,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["755", "756", "757", "754"],
            n: "Untitled Layout",
            "_": 3,
            v: {
                "756": {
                    aU: 8,
                    G: "#000",
                    c: 139,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a id=\"btnRestart\" class=\"btnRestart no-print button is-medium is-info\">Restart</a>",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 51,
                    aS: 8,
                    aT: 8,
                    a: 398,
                    b: 15
                },
                "757": {
                    aV: 8,
                    w: "<div class=\"dropdown is-right is-hoverable no-print\" id=\"settingsGp\">\n    <div class=\"dropdown-trigger\">\n        <button id=\"settingsBtn\" class=\"button no-print is-medium is-info\">\n            <span>Settings</span>\n        </button>\n    </div>\n    <div class=\"dropdown-menu\" id=\"settingsPanel\">\n        <div class=\"dropdown-content\">\n            <div class=\"dropdown-item\">\n                <div class=\"settings-panel\">\n                    <div>\n                    <label class=\"labelSettings\">Choose a font size:</label>\n                    <hr>\n                        <div class=\"tabs\">\n                            <ul>\n                                <li>\n                                    <div class=\"fontShowSize\" style=\"font-size: 16px\">A</div>\n                                    <a>Small</a>\n                                </li>\n                                <li class=\"is-active\">\n                                    <div class=\"fontShowSize\" style=\"font-size: 20px\">A</div>\n                                    <a>Normal</a>\n                                </li>\n                                <li>\n                                    <div class=\"fontShowSize\" style=\"font-size: 24px\">A</div>\n                                    <a>Large</a>\n                                </li>\n                            </ul>\n                        </div>\n \n                    <label class=\"labelSettings\">Choose a font type:</label>\n                    <hr>\n\n                        <div class=\"tabs\">\n                            <ul style=\"display: inline-block;\">\n                                <li class=\"is-active\" style=\"font-family: 'droid_sans_monoregular'\">\n                                    <a>Droid Sans Mono</a>\n                                </li>\n                                <li class=\"fontShowType\" style=\"font-family: 'ubuntu_mono'\">\n                                    <a>Ubuntu Mono</a>\n                                </li>\n                                 <li class=\"fontShowType\" style=\"font-family: 'courier_prime'\">\n                                    <a>Courier Prime</a>\n                                </li>\n                                 <li class=\"fontShowType\" style=\"font-family: 'PT_mono'\">\n                                  <a>PT Mono</a>\n                                </li>\n                                  <li class=\"fontShowType\" style=\"font-family: 'source_code_pro'\">\n                                    <a>Source Code Pro</a>\n                                </li>\n                            </ul>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                    x: "visible",
                    a: 874,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 15,
                    z: 47,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    d: 54,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 118
                },
                "754": {
                    aU: 0,
                    G: "#000",
                    c: 1024,
                    aV: 0,
                    r: "inline",
                    d: 650,
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    bD: "none",
                    t: 16,
                    Z: "break-word",
                    w: "         \t<div class=\"modal\" id=\"warningErrors\">\n  \t\t\t<div class=\"modal-background\"></div>\n  \t\t\t <div class=\"modal-content\">\n    \t\t\t<div class=\"box is-size-5\">Too many errors. Please focus on your accuracy. Click Restart.</div>\n  \t\t\t</div>\n\t\t</div> \n\t\t\n\t\t<div class=\"mainTypingPage\">\n\n\n      <section class=\"section\">\n      \n\n\n\n         <div class=\"container \">\n            <div class=\"columns\">\n               <div class=\"column is-10\">\n                  <div class=\"textOverInview\" tabindex=\"-1\" aria-hidden=\"true\">\n                     <div class=\"inview\">\n                        <div class=\"typable\">\n                            <div id=\"typingContent\"></div> \n                        </div>\n                     </div>\n                  </div>\n               </div>\n\n               <div class=\"column stats is-2 noprint\">\n\n\n                  <div class=\"level\">\n                     <div class=\"heading\" style=\"margin-top:10px\">Test type</div>\n                     <div class=\"subtitle shorterHeight\" id=\"testref\"></div>\n                     <div class=\"heading\">Candidate ref</div>\n                     <div class=\"subtitle shorterHeight\" id=\"employeeID\"></div>\n                     <div class=\"heading\" id=\"headingTiming\">Timing</div>\n                     <div class=\"subtitle shorterHeight\" id=\"countdowntimer\"><span id=\"timer\" class=\"title shorterHeight\"></span></div>\n                     <div class=\"heading\" id=\"headingErrorCnt\">Errors</div>\n                     <div class=\"subtitle shorterHeight\" id=\"noOfErrors\"></div>\n                     <div class=\"heading\" id=\"headingRealAcc\">Accuracy</div>\n                     <div class=\"subtitle shorterHeight\" id=\"realAcc\"></div>\n                     <div class=\"heading\">Speed</div>\n                     <div class=\"subtitle shorterHeight\" id=\"speed\"><sup>wpm</sup></div>\n                                           <div class=\"heading\" id=\"headingDate\">Date</div>\n                      <div class=\"subtitle shorterHeight\" id=\"date\"></div>\n                      <div class=\"heading\" id=\"headingTime\">Time</div>\n                     <div class=\"subtitle shorterHeight\" id=\"time\"></div>\n                           <button id=\"print1\" class=\"printBtn no-print button is-medium is-info\" onclick=\"window.print()\">Print/save</button>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </section>\n\n\n    \n <textarea id=\"typingInput\" class=\"invisibleInput\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" autofocus=\"\" onpaste=\"return false;\" oncut=\"return false;\" spellcheck=\"false\"></textarea> </div>",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    z: 46,
                    aS: 0,
                    aT: 0,
                    a: 0,
                    cW: {
                        a: [{
                            p: 0
                        }]
                    },
                    b: 90
                },
                "755": {
                    aU: 8,
                    G: "#000",
                    aV: 8,
                    r: "inline",
                    s: "TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "<a class=\"button no-print is-medium is-info\">\nQuit</a>",
                    j: "absolute",
                    x: "visible",
                    yy: "nowrap",
                    aA: {
                        a: [{
                            p: 4,
                            h: "229"
                        }]
                    },
                    y: "preserve",
                    k: "div",
                    dB: "button",
                    z: 50,
                    aS: 8,
                    aT: 8,
                    a: 34,
                    b: 15
                }
            }
        }, {
            A: {
                a: [{
                    p: 4,
                    h: "257"
                }]
            },
            o: "684",
            p: "600px",
            cA: false,
            Y: 1024,
            Z: 1200,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["761", "760", "758", "759"],
            n: "Desktop",
            "_": 4,
            v: {
                "759": {
                    aV: 8,
                    w: "<article><div class=\"is-size-5 content has-text-grey-dark\"><p>Speed and accuracy can only come from training your fingers to know the exact location of every key on the keyboard. </p><p><strong>FDSA JKL;</strong> are called the home keys. Your fingers rest on the home keys. From the home keys, you can reach all the other keys on the keyboard. Use your left hand for FDSA and your right hand for JKL;.</p>\n<p>The keyboard diagram shows which home key finger is used for each key.</p>\n<p>When any finger is not actually pressing a key, you should keep it resting lightly on its home key.</p>\n</div></article>",
                    x: "visible",
                    a: 33,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 545,
                    z: 16,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 207,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 949
                },
                "761": {
                    aU: 8,
                    G: "#000",
                    c: 101,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "    <a class=\"button is-medium is-info\">\nBack\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "470"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 9,
                    aS: 8,
                    aT: 8,
                    a: 34,
                    b: 15
                },
                "758": {
                    h: "660",
                    p: "no-repeat",
                    x: "visible",
                    a: 163,
                    dB: "img",
                    q: "100% 100%",
                    j: "absolute",
                    r: "inline",
                    z: 15,
                    b: 85,
                    k: "div",
                    d: 449,
                    c: 698,
                    cQ: 1,
                    cR: 1
                },
                "760": {
                    aV: 8,
                    w: "\n    <div class=\"container\">\n      <h1 class=\"title has-text-grey-dark\">\n        The keyboarding chart\n      </h1>\n    </div>\n\n\n",
                    x: "visible",
                    a: 325,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 20,
                    z: 14,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 44,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 357
                }
            }
        }, {
            A: {
                a: [{
                    p: 4,
                    h: "257"
                }]
            },
            o: "694",
            p: "600px",
            cA: false,
            Y: 1024,
            Z: 1200,
            c: "#FFF",
            L: [],
            bY: 1,
            d: 1024,
            U: {},
            T: {
                kTimelineDefaultIdentifier: {
                    q: false,
                    z: 0,
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["762", "765", "763", "764"],
            n: "Desktop",
            "_": 5,
            v: {
                "764": {
                    aV: 8,
                    w: "<div class=\"is-size-5 content has-text-grey-dark\">\n\nTyping accuracy and speed are affected by the way you sit while you are using the computer. Follow these guidelines:\n<ul>\n<li>Center your body on the J key, about a hand\u2019s length from the keyboard</li>\n<li>Position the monitor at eye level, about arm\u2019s length away. Keep your shoulders down</li>\n<li>Adjust your chair and keyboard so your elbows bend at right angles</li>\n<li>Keep your arms close to your sides and your wrists relaxed and straight</li>\n<li>Keep your back upright or tilted slightly forward from the hips. Keep the slight natural curve of your lower back</li>\n</ul></div>",
                    x: "visible",
                    a: 16,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 105,
                    z: 16,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 479,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 514
                },
                "765": {
                    aV: 8,
                    w: "\n    <div class=\"container\">\n      <h1 class=\"title has-text-grey-dark\">\n        The correct posture</h1>\n    </div>\n\n\n",
                    x: "visible",
                    a: 325,
                    Z: "break-word",
                    y: "preserve",
                    j: "absolute",
                    r: "inline",
                    b: 20,
                    z: 14,
                    s: "Helvetica,Arial,Sans-Serif",
                    d: 44,
                    aS: 8,
                    t: 16,
                    aT: 8,
                    k: "div",
                    aU: 8,
                    G: "#000",
                    c: 357
                },
                "762": {
                    aU: 8,
                    G: "#000",
                    c: 101,
                    aV: 8,
                    r: "inline",
                    d: 54,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 16,
                    Z: "break-word",
                    aP: "pointer",
                    w: "    <a class=\"button is-medium is-info\">\nBack\n</a>",
                    j: "absolute",
                    x: "visible",
                    aA: {
                        a: [{
                            d: 1.1,
                            p: 1,
                            g: 1,
                            e: "470"
                        }]
                    },
                    k: "div",
                    y: "preserve",
                    dB: "button",
                    z: 9,
                    aS: 8,
                    aT: 8,
                    a: 34,
                    b: 15
                },
                "763": {
                    h: "697",
                    p: "no-repeat",
                    x: "visible",
                    a: 573,
                    dB: "img",
                    q: "100% 100%",
                    j: "absolute",
                    r: "inline",
                    z: 17,
                    k: "div",
                    b: 96,
                    d: 584,
                    c: 435
                }
            }
        }],{},h,{},(function(shouldShow, mainContentContainer) {
            var loadingPageID = mainContentContainer.id + "_loading";
            var loadingDiv = document.getElementById(loadingPageID);

            if (shouldShow == true) {
                if (loadingDiv == null) {
                    loadingDiv = document.createElement("div");
                    loadingDiv.id = loadingPageID;
                    loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
                    loadingDiv.innerHTML = "Loading";
                    mainContentContainer.appendChild(loadingDiv);
                }

                loadingDiv.style.display = "block";
                loadingDiv.removeAttribute("aria-hidden");
                mainContentContainer.setAttribute("aria-busy", true);
            } else {
                loadingDiv.style.display = "none";
                loadingDiv.setAttribute("aria-hidden", true);
                mainContentContainer.removeAttribute("aria-busy");
            }
        }
        )
        ,false,false,-1,true,false,true,true,true);
        d[f] = c.API;
        document.getElementById(g).setAttribute("HYP_dn", f);
        c.z_o(this.body)
    }
    )();
}
)();
