/*
* <summary>
*    Uses jQuery.
*    This service takes an HTMLTextAreaElement.
*    When selecting text inside that element, the selection range is stored.
*    When wanting to surround the selection with a tag, call "surround".
*    This returns the new content of the element.
* </summary
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SelectionService = (function () {
    function SelectionService() {
        this._inside = false;
    }
    Object.defineProperty(SelectionService.prototype, "selEment", {
        set: function (e) {
            this._selEment = e;
            this.bind();
        },
        enumerable: true,
        configurable: true
    });
    SelectionService.prototype.bind = function () {
        var _this = this;
        $(this._selEment).bind("mousedown", function () {
            _this._inside = true;
        });
        $('body').bind("mouseup", function () {
            (_this._inside && window.getSelection) ? _this._selection = {
                start: (_this._selEment).selectionStart,
                end: _this._selEment.selectionEnd
            } : _this._selection = null;
            _this._inside = false;
        });
    };
    SelectionService.prototype.surround = function (tag) {
        var orig = this._selEment.value;
        if (this._selection) {
            var str = orig.substring(0, this._selection.start)
                + '<' + tag + '>'
                + orig.substring(this._selection.start, this._selection.end)
                + '</' + tag + '>'
                + orig.substring(this._selection.end, orig.length);
            return str;
        }
        else
            return orig;
    };
    SelectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SelectionService);
    return SelectionService;
}());
exports.SelectionService = SelectionService;
//# sourceMappingURL=selection.service.js.map