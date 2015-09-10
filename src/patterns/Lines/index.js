/*
 * DOM in instance of Emblem.
 */
'use strict';

var _BASE_DOM = (function () {
    var wrapper = document.createElement('div');
    var part = document.createElement('div');
    var whiteBoxWrapper = document.createElement('div');
    var whiteBoxBase = document.createElement('div');
    var docFrag = document.createDocumentFragment();

    wrapper.className = 'lines-emblem';
    part.className = 'part';
    whiteBoxWrapper.className = 'whitebox-wrapper';

    var _arr = [0, 1, 2, 3];
    for (var _i = 0; _i < _arr.length; _i++) {
        i = _arr[_i];

        var whiteBox = whiteBoxBase.cloneNode();
        whiteBox.className = 'whitebox-' + i;
        whiteBoxWrapper.appendChild(whiteBox);
    }

    part.appendChild(whiteBoxWrapper);

    // in emmet syntax.
    // div.wrapper > div.part * 9
    for (var _i2 = 0; _i2 < 9; _i2++) {
        var _part = part.cloneNode(true);
        _part.classList.add('pos_' + _i2 % 3 + '_' + (_i2 / 3 | 0));
        docFrag.appendChild(_part);
    }
    wrapper.appendChild(docFrag);

    return wrapper;
})();

/*
 * Parts className table.
 */
var _S_R0 = "part straight rotate0 rotate-default";
var _S_R90 = "part straight rotate90 rotate-default";
var _A_R0 = "part right-angle rotate0 rotate-default";
var _A_R90 = "part right-angle rotate90 rotate-default";
var _A_R180 = "part right-angle rotate180 rotate-default";
var _A_R270 = "part right-angle rotate270 rotate-default";
var _3W_R0 = "part 3-way rotate0 rotate-default";
var _3W_R90 = "part 3-way rotate90 rotate-default";
var _3W_R180 = "part 3-way rotate180 rotate-default";
var _3W_R270 = "part 3-way rotate270 rotate-default";
var _1W_R0 = "part 1-way rotate0 rotate-default";
var _1W_R90 = "part 1-way rotate90 rotate-default";
var _1W_R180 = "part 1-way rotate180 rotate-default";
var _1W_R270 = "part 1-way rotate270 rotate-default";
var _C_R0 = "part cross rotate0 rotate-default";
var _BL = "part blank";

/*
 * Formation settings of all characters.
 */
var _formationTable = {
    "a": [_G_R180, _P1, _G_R270, _S_R0, _C_S, _S_R90, _P1, _BL, _P1],
    "b": [_BL, _P3_V, _G_R90, _BL, _BL, _S_R90, _BL, _BL, _S_R180],
    "c": [_S_R180, _P1, _G_R90, _P1, _BL, _BL, _G_R90, _P1, _S_R180],
    "d": [_P3_V, _S_R90, _G_R270, _BL, _BL, _P1, _BL, _G_R180, _S_R0],
    "e": [_BL, _P3_V, _G_R90, _BL, _BL, _C_S, _BL, _BL, _S_R180],
    "f": [_BL, _P3_V, _S_R90, _BL, _BL, _C_S, _BL, _BL, _BL],
    "g": [_P3_V, _G_R0, _BL, _BL, _BL, _S_R90, _BL, _C_S, _G_R180],
    "h": [_P3_V, _BL, _P3_V, _BL, _C_S, _BL, _BL, _BL, _BL],
    "i": [_BL, _C_S, _BL, _BL, _P2_V, _BL, _BL, _BL, _BL],
    "j": [_BL, _BL, _P2_V, _BL, _BL, _BL, _S_R90, _C_S, _G_R180],
    "k": [_P3_V, _BL, _G_R0, _BL, _C_S, _BL, _BL, _BL, _S_R270],
    "l": [_P3_V, _BL, _BL, _BL, _BL, _BL, _BL, _C_S, _G_R180],
    "m": [_G_R270, _BL, _S_R180, _P2_V, _C_S, _P2_V, _BL, _BL, _BL],
    "n": [_P3_V, _G_R270, _P3_V, _BL, _C_S, _BL, _BL, _S_R90, _BL],
    "o": [_S_R180, _P1, _G_R270, _P1, _BL, _P1, _G_R90, _P1, _S_R0],
    "p": [_P3_V, _C_S, _G_R90, _BL, _S_R270, _BL, _BL, _BL, _BL],
    "q": [_S_R180, _P1, _G_R270, _P1, _BL, _P1, _G_R90, _P1, _C_S],
    "r": [_P3_V, _C_S, _S_R90, _BL, _P1, _S_R180, _BL, _BL, _G_R270],
    "s": [_G_R180, _P3_V, _S_R90, _S_R90, _BL, _BL, _G_R270, _BL, _C_S],
    "t": [_G_R0, _P3_V, _C_S, _BL, _BL, _BL, _BL, _BL, _S_R180],
    "u": [_P2_V, _BL, _C_S, _P1, _BL, _P1, _G_R90, _P1, _S_R0],
    "v": [_S_R270, _BL, _S_R180, _G_R90, _BL, _G_R0, _BL, _P1, _BL],
    "w": [_S_R270, _BL, _G_R180, _S_R270, _P1, _G_R180, _G_R90, _BL, _S_R0],
    "x": [_G_R90, _BL, _S_R0, _BL, _P1, _BL, _S_R180, _BL, _G_R270],
    "y": [_G_R270, _BL, _S_R180, _BL, _C_S, _BL, _BL, _P1, _BL],
    "z": [_G_R0, _P1, _S_R0, _BL, _C_S, _BL, _S_R180, _P1, _S_R180],
    "1": [_G_R180, _P3_V, _BL, _BL, _BL, _BL, _BL, _BL, _BL],
    "2": [_S_R0, _P3_V, _G_R270, _BL, _BL, _S_R0, _C_S, _BL, _G_R180],
    "3": [_G_R0, _P1, _G_R270, _BL, _C_S, _BL, _S_R270, _P1, _S_R0],
    "4": [_BL, _S_R180, _BL, _G_R180, _C_S, _P1, _BL, _P1, _BL],
    "5": [_BL, _P1, _S_R0, _BL, _G_R90, _P1, _BL, _C_S, _S_R180],
    "6": [_BL, _S_R0, _BL, _BL, _P2_V, _G_R90, _BL, _BL, _S_R180],
    "7": [_G_R0, _C_S, _P3_V, _BL, _BL, _BL, _BL, _BL, _BL],
    "8": [_S_R0, _C_S, _S_R90, _G_R0, _BL, _G_R90, _S_R270, _BL, _S_R180],
    "9": [_G_R0, _P2_V, _BL, _S_R270, _BL, _BL, _BL, _G_R180, _BL],
    "0": [_C_L, _BL, _BL, _BL, _BL, _BL, _BL, _BL, _BL],
    "!": [_P2_V, _BL, _BL, _BL, _BL, _BL, _C_S, _BL, _BL],
    ".": [_BL, _BL, _BL, _BL, _BL, _BL, _P1, _BL, _BL],
    "'": [_P1, _BL, _BL, _G_R0, _BL, _BL, _BL, _BL, _BL],
    ":": [_P1, _BL, _BL, _BL, _BL, _BL, _P1, _BL, _BL],
    ";": [_P1, _BL, _BL, _BL, _BL, _BL, _C_S, _BL, _BL],
    "/": [[_G_R0, 'pos_3_0'], _BL, _S_R180, _BL, _S_R180, _G_R0, _S_R180, _G_R0, _BL],
    "_": [_BL, _BL, _BL, _BL, _BL, _BL, _P2_H, _BL, _BL],
    " ": [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _BL, _BL]
};

/*
 * Transition settings.
 */
var _TRANSITION_PROPS = ['top', 'left', 'background-color', 'border-radius'];

Emblem.define('Lines', { _BASE_DOM: _BASE_DOM, _TRANSITION_PROPS: _TRANSITION_PROPS, _formationTable: _formationTable });