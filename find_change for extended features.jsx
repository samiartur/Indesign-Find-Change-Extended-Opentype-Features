// Script by Sami Artur Mandelbaum
// I want to thank Roland Dreger and Sumit Kumar for the help.

#targetengine "Session"

if (!(app.selection.length)) exit(0);
var mySelection = app.selection[0];
var appFonts = app.fonts.everyItem().name;
//alert (appFonts.toString());

var MyFonts = [];
var MyStyle = [];
getFontInfo();
ShowUI();

function ShowUI() {
    // FIND_CHANGE
    // ===========
    var Find_Change = new Window("palette");
    Find_Change.text = "palette";
    Find_Change.orientation = "column";
    Find_Change.alignChildren = ["center", "top"];
    Find_Change.spacing = 10;
    Find_Change.margins = 16;

    // GROUP1
    // ======
    var group1 = Find_Change.add("group", undefined, { name: "group1" });
    group1.orientation = "column";
    group1.alignChildren = ["center", "top"];
    group1.spacing = 10;
    group1.margins = 0;

    // PANEL1
    // ======
    var panel1 = group1.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "Select Fonts";
    panel1.preferredSize.width = 270;
    panel1.orientation = "row";
    panel1.alignChildren = ["left", "top"];
    panel1.spacing = 10;
    panel1.margins = 10;

    var statictext1 = panel1.add("statictext", undefined, undefined, { name: "statictext1" });
    statictext1.text = "Font";

    var winddlFonts = panel1.add('dropdownlist', undefined, MyFonts);
    winddlFonts.selection = 0;

    var panel5 = group1.add("panel", undefined, undefined, { name: "panel5" });
    panel5.text = "Font Style";
    panel5.preferredSize.width = 270;
    panel5.orientation = "row";
    panel5.alignChildren = ["left", "top"];
    panel5.spacing = 10;
    panel5.margins = 10;

    var winddlStyles = panel5.add('dropdownlist', undefined, ["Select Font"]);
    winddlStyles.selection = 0;
    winddlStyles.preferredSize.width = 257;

    // PANEL2
    // ======
    var panel2 = group1.add("panel", undefined, undefined, { name: "panel2" });
    panel2.text = "Find Character";
    panel2.preferredSize.width = 270;
    panel2.orientation = "column";
    panel2.alignChildren = ["left", "top"];
    panel2.spacing = 10;
    panel2.margins = 10;

    var edittext1 = panel2.add('edittext {properties: {name: "edittext1"}}');
    edittext1.text = "a";
    edittext1.preferredSize.width = 257;

    // PANEL3
    // ======
    var panel3 = group1.add("panel", undefined, undefined, { name: "panel3" });
    panel3.text = "Apply Feature";
    panel3.preferredSize.width = 270;
    panel3.orientation = "row";
    panel3.alignChildren = ["center", "top"];
    panel3.spacing = 10;
    panel3.margins = 10;

    var listbox1_array = ["aalt", "abvf", "abvm", "abvs", "afrc", "akhn", "blwf", "blwm", "blws", "c2pc", "c2sc", "calt", "case", "ccmp", "cfar", "cjct", "clig", "cpct", "cpsp", "cswh", "curs", "cv01", "cv02", "cv03", "cv04", "cv05", "cv06", "cv07", "cv08", "cv09", "cv10", "cv11", "cv12", "cv13", "cv14", "cv15", "cv16", "cv17", "cv18", "cv19", "cv20", "cv21", "cv22", "cv23", "cv24", "cv25", "cv26", "cv27", "cv28", "cv29", "cv30", "cv31", "cv32", "cv33", "cv34", "cv35", "cv36", "cv37", "cv38", "cv39", "cv40", "cv41", "cv42", "cv43", "cv44", "cv45", "cv46", "cv47", "cv48", "cv49", "cv50", "cv51", "cv52", "cv53", "cv54", "cv55", "cv56", "cv57", "cv58", "cv59", "cv60", "cv61", "cv62", "cv63", "cv64", "cv65", "cv66", "cv67", "cv68", "cv69", "cv70", "cv71", "cv72", "cv73", "cv74", "cv75", "cv76", "cv77", "cv78", "cv79", "cv80", "cv81", "cv82", "cv83", "cv84", "cv85", "cv86", "cv87", "cv88", "cv89", "cv90", "cv91", "cv92", "cv94", "cv95", "cv96", "cv97", "cv98", "cv99", "dist", "dlig", "dnom", "dtls", "expt", "falt", "fin2", "fin3", "fina", "flac", "frac", "fwid", "half", "haln", "halt", "hist", "hkna", "hlig", "hngl", "hojo", "hwid", "init", "isol", "ital", "jalt", "jp04", "jp78", "jp83", "jp90", "kern", "lfbd", "liga", "ljmo", "lnum", "locl", "ltra", "ltrm", "mark", "med2", "medi", "mgrk", "mkmk", "mset", "nalt", "nlck", "nukt", "numr", "onum", "opbd", "ordn", "ornm", "palt", "pcap", "pkna", "pnum", "pref", "pres", "pstf", "psts", "pwid", "qwid", "rand", "rclt", "rkrf", "rlig", "rphf", "rtbd", "rtla", "rtlm", "ruby", "salt", "sinf", "size", "smcp", "smpl", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "ss09", "ss10", "ss11", "ss12", "ss13", "ss14", "ss15", "ss16", "ss17", "ss18", "ss19", "ss20", "ssty", "stch", "subs", "sups", "swsh", "titl", "tjmo", "tnam", "tnum", "trad", "twid", "unic", "valt", "vatu", "vert", "vhal", "vjmo", "vkna", "vkrn", "vpal", "vrt2", "zero", ""];
    var listbox1 = panel3.add("listbox", undefined, undefined, { name: "listbox1", items: listbox1_array, numberOfColumns: 2, columnWidths: [5] });
    listbox1.preferredSize.width = 257;
    listbox1.preferredSize.height = 200;
    listbox1.alignment = ["center", "top"];

    // PANEL4
    // ======
    var panel4 = group1.add("panel", undefined, undefined, { name: "panel4" });
    panel4.text = "Variant";
    panel4.preferredSize.width = 270;
    panel4.orientation = "row";
    panel4.alignChildren = ["center", "top"];
    panel4.spacing = 10;
    panel4.margins = 10;

    var edittext3 = panel4.add('edittext {properties: {name: "edittext3"}}');
    edittext3.preferredSize.width = 70;
    edittext3.text = "1";

    winddlFonts.onChange = function () {
        winddlStyles.removeAll();
        var arrStyle = MyStyle[this.selection.index];
        for (var i = 0; i < arrStyle.length; i++) {
            winddlStyles.add('item', arrStyle[i]);
        }
    }

    var btn_group = Find_Change.add("group");
    var close_button = btn_group.add("button", undefined, "Close", { name: "cancel" });
    var convert_button = btn_group.add("button", undefined, "Apply", { name: "ok" });
    var reset_button = btn_group.add("button", undefined, "Reset Features", { name: "ok" });
    convert_button.onClick = function () {
        try {
            var chosenFont = winddlFonts.selection.text,
                chosenStyle = winddlStyles.selection.text,
                findText = edittext1.text,
                list = listbox1.selection.text,
                edit3 = edittext3.text;
            //alert("Font chosen: " + chosenFont + "\rStyle chosen: " + chosenStyle);
            // this.parent.close(2);
            findChange(chosenFont, chosenStyle, findText, list, edit3);
         //   Find_Change.close();
        }
        catch (e) {
            alert(e.line + "\r" + e.message);
        }
    }

reset_button.onClick = function onClickHandler() {
app.select(app.selection[0].opentypeFeatures=[]);

//palette.close();

exit();

};

    close_button.onClick = function () {
        Find_Change.close();
    }
    Find_Change.show();

    function findChange(chosenFont, chosenStyle, findText, list, edit3) {
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;
        app.findChangeGrepOptions.includeFootnotes = false;
        app.findChangeGrepOptions.includeHiddenLayers = false;
        app.findChangeGrepOptions.includeLockedLayersForFind = false;
        app.findChangeGrepOptions.includeLockedStoriesForFind = false;
        app.findChangeGrepOptions.includeMasterPages = false;

        app.findGrepPreferences.findWhat = findText;
        app.findGrepPreferences.appliedFont = chosenFont;
        app.findGrepPreferences.fontStyle = chosenStyle;

        var matchArray = mySelection.findGrep(true);

        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        for (var i = 0; i < matchArray.length; i++) {
            var curMatch = matchArray[i];
            if (curMatch.hasOwnProperty("opentypeFeatures")) {
                curMatch.opentypeFeatures = [[list, Number(edit3)]];
            }
        }
    }
}

function getFontInfo() {
    //array for font and style
    var counter = -1;
    for (var i = 0; i < appFonts.length; i++) {
        appFonts[i] = appFonts[i].split("\t");
        if (i == 0 || appFonts[i][0] != appFonts[i - 1][0]) {
            MyFonts.push(appFonts[i][0]);
            counter++;
            MyStyle[counter] = [];
        }
        MyStyle[counter].push(appFonts[i][1]);
    }
}