webpackJsonp([1],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterOutletMap; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Contains all the router outlets created in a component.
 *
 * \@stable
 */
var RouterOutletMap = (function () {
    function RouterOutletMap() {
        /** @internal */
        this._outlets = {};
    }
    /**
     * Adds an outlet to this map.
     * @param {?} name
     * @param {?} outlet
     * @return {?}
     */
    RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
    /**
     * Removes an outlet from this map.
     * @param {?} name
     * @return {?}
     */
    RouterOutletMap.prototype.removeOutlet = function (name) { this._outlets[name] = undefined; };
    return RouterOutletMap;
}());
function RouterOutletMap_tsickle_Closure_declarations() {
    /**
     * \@internal
     * @type {?}
     */
    RouterOutletMap.prototype._outlets;
}
//# sourceMappingURL=router_outlet_map.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = __webpack_require__(0);
let GlobalVariables = class GlobalVariables {
    getCurrentUser() {
        return CurrentUser;
    }
};
GlobalVariables = __decorate([
    core_1.Injectable()
], GlobalVariables);
exports.GlobalVariables = GlobalVariables;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ToastOptions = (function () {
    function ToastOptions(options) {
        this.newestOnTop = false;
        this.animate = 'fade';
        this.enableHTML = false;
        this.showCloseButton = false;
        Object.assign(this, options);
    }
    ToastOptions.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToastOptions.ctorParameters = function () { return [
        { type: Object, },
    ]; };
    return ToastOptions;
}());
exports.ToastOptions = ToastOptions;
//# sourceMappingURL=toast-options.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterLinkWithHref; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_state__ = __webpack_require__(69);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * \@whatItDoes Lets you link to specific parts of your app.
 *
 * \@howToUse
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`
 *
 * When linking to this `user/:name` route, you can write:
 * `<a routerLink='/user/bob'>link to user component</a>`
 *
 * \@description
 *
 * The RouterLink directives let you link to specific parts of your app.
 *
 * When the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * You can also tell the directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * \@ngModule RouterModule
 *
 * See {\@link Router.createUrlTree} for more information.
 *
 * \@stable
 */
var RouterLink = (function () {
    /**
     * @param {?} router
     * @param {?} route
     */
    function RouterLink(router, route) {
        this.router = router;
        this.route = route;
        this.commands = [];
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        /**
         * @param {?} commands
         * @return {?}
         */
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLink.prototype.onClick = function () {
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserveQueryParams),
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: ':not(a)[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLink.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__router_state__["a" /* ActivatedRoute */], },
    ]; };
    RouterLink.propDecorators = {
        'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click',] },],
    };
    return RouterLink;
}());
function RouterLink_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLink.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLink.ctorParameters;
    /** @type {?} */
    RouterLink.propDecorators;
    /** @type {?} */
    RouterLink.prototype.queryParams;
    /** @type {?} */
    RouterLink.prototype.fragment;
    /** @type {?} */
    RouterLink.prototype.preserveQueryParams;
    /** @type {?} */
    RouterLink.prototype.preserveFragment;
    /** @type {?} */
    RouterLink.prototype.skipLocationChange;
    /** @type {?} */
    RouterLink.prototype.replaceUrl;
    /** @type {?} */
    RouterLink.prototype.commands;
    /** @type {?} */
    RouterLink.prototype.router;
    /** @type {?} */
    RouterLink.prototype.route;
}
/**
 * \@whatItDoes Lets you link to specific parts of your app.
 *
 * See {\@link RouterLink} for more information.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterLinkWithHref = (function () {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} locationStrategy
     */
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_2__router__["b" /* NavigationEnd */]) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        /**
         * @param {?} commands
         * @return {?}
         */
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @return {?}
     */
    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserveQueryParams),
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'a[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__router_state__["a" /* ActivatedRoute */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_common__["LocationStrategy"], },
    ]; };
    RouterLinkWithHref.propDecorators = {
        'target': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"], args: ['attr.target',] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'href': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"] },],
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
    };
    return RouterLinkWithHref;
}());
function RouterLinkWithHref_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLinkWithHref.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLinkWithHref.ctorParameters;
    /** @type {?} */
    RouterLinkWithHref.propDecorators;
    /** @type {?} */
    RouterLinkWithHref.prototype.target;
    /** @type {?} */
    RouterLinkWithHref.prototype.queryParams;
    /** @type {?} */
    RouterLinkWithHref.prototype.fragment;
    /** @type {?} */
    RouterLinkWithHref.prototype.preserveQueryParams;
    /** @type {?} */
    RouterLinkWithHref.prototype.preserveFragment;
    /** @type {?} */
    RouterLinkWithHref.prototype.skipLocationChange;
    /** @type {?} */
    RouterLinkWithHref.prototype.replaceUrl;
    /** @type {?} */
    RouterLinkWithHref.prototype.commands;
    /** @type {?} */
    RouterLinkWithHref.prototype.subscription;
    /** @type {?} */
    RouterLinkWithHref.prototype.href;
    /** @type {?} */
    RouterLinkWithHref.prototype.router;
    /** @type {?} */
    RouterLinkWithHref.prototype.route;
    /** @type {?} */
    RouterLinkWithHref.prototype.locationStrategy;
}
/**
 * @param {?} s
 * @return {?}
 */
function attrBoolValue(s) {
    return s === '' || !!s;
}
//# sourceMappingURL=router_link.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlHandlingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultUrlHandlingStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Provides a way to migrate Angular 1 applications to Angular 2.
 *
 * \@experimental
 * @abstract
 */
var UrlHandlingStrategy = (function () {
    function UrlHandlingStrategy() {
    }
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { };
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.extract = function (url) { };
    /**
     * Merges the URL fragment with the rest of the URL.
     * @abstract
     * @param {?} newUrlPart
     * @param {?} rawUrl
     * @return {?}
     */
    UrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) { };
    return UrlHandlingStrategy;
}());
/**
 * \@experimental
 */
var DefaultUrlHandlingStrategy = (function () {
    function DefaultUrlHandlingStrategy() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());
//# sourceMappingURL=url_handling_strategy.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeNode; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Tree = (function () {
    /**
     * @param {?} root
     */
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        /**
         * @return {?}
         */
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.parent = function (t) {
        var /** @type {?} */ p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.children = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.firstChild = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.siblings = function (t) {
        var /** @type {?} */ p = findPath(t, this._root, []);
        if (p.length < 2)
            return [];
        var /** @type {?} */ c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root, []).map(function (s) { return s.value; }); };
    return Tree;
}());
function Tree_tsickle_Closure_declarations() {
    /**
     * \@internal
     * @type {?}
     */
    Tree.prototype._root;
}
/**
 * @param {?} expected
 * @param {?} c
 * @return {?}
 */
function findNode(expected, c) {
    if (expected === c.value)
        return c;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var /** @type {?} */ r = findNode(expected, cc);
        if (r)
            return r;
    }
    return null;
}
/**
 * @param {?} expected
 * @param {?} c
 * @param {?} collected
 * @return {?}
 */
function findPath(expected, c, collected) {
    collected.push(c);
    if (expected === c.value)
        return collected;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var /** @type {?} */ cloned = collected.slice(0);
        var /** @type {?} */ r = findPath(expected, cc, cloned);
        if (r.length > 0)
            return r;
    }
    return [];
}
var TreeNode = (function () {
    /**
     * @param {?} value
     * @param {?} children
     */
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    /**
     * @return {?}
     */
    TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
    return TreeNode;
}());
function TreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    TreeNode.prototype.value;
    /** @type {?} */
    TreeNode.prototype.children;
}
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

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
// Imports
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(52);
const genericApi_service_1 = __webpack_require__(344);
const shared_service_1 = __webpack_require__(70);
// Decorator to tell Angular that this class can be injected as a service to another class
let PanelService = class PanelService extends genericApi_service_1.GenericApiService {
    constructor(http, sharedService) {
        super(http, sharedService);
        this.controllerName = 'panels';
    }
    createCard(obj) {
        this.sharedService.startLoading();
        var controllerName = 'cards';
        const endPoint = '/';
        return this.http
            .post(this.apiUrl + controllerName + endPoint, obj)
            .map((res) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
};
PanelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, shared_service_1.SharedService])
], PanelService);
exports.PanelService = PanelService;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

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
// Imports
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(52);
const genericApi_service_1 = __webpack_require__(344);
const shared_service_1 = __webpack_require__(70);
// Decorator to tell Angular that this class can be injected as a service to another class
let UserService = class UserService extends genericApi_service_1.GenericApiService {
    constructor(http, sharedService) {
        super(http, sharedService);
        this.controllerName = 'user';
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, shared_service_1.SharedService])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toast_1 = __webpack_require__(511);
exports.Toast = toast_1.Toast;
var toast_manager_1 = __webpack_require__(510);
exports.ToastsManager = toast_manager_1.ToastsManager;
var toast_container_component_1 = __webpack_require__(243);
exports.ToastContainer = toast_container_component_1.ToastContainer;
var toast_options_1 = __webpack_require__(151);
exports.ToastOptions = toast_options_1.ToastOptions;
var toast_module_1 = __webpack_require__(700);
exports.ToastModule = toast_module_1.ToastModule;
//# sourceMappingURL=ng2-toastr.js.map

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var toast_options_1 = __webpack_require__(151);
var platform_browser_1 = __webpack_require__(36);
var ToastContainer = (function () {
    function ToastContainer(sanitizer, cdr, options) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.position = 'fixed';
        this.messageClass = 'toast-message';
        this.titleClass = 'toast-title';
        this.positionClass = 'toast-top-right';
        this.toasts = [];
        this.maxShown = 5;
        this.newestOnTop = false;
        this.animate = 'fade';
        if (options) {
            Object.assign(this, options);
        }
    }
    ToastContainer.prototype.addToast = function (toast) {
        if (this.positionClass.indexOf('top') > 0) {
            if (this.newestOnTop) {
                this.toasts.unshift(toast);
            }
            else {
                this.toasts.push(toast);
            }
            if (this.toasts.length > this.maxShown) {
                var diff = this.toasts.length - this.maxShown;
                if (this.newestOnTop) {
                    this.toasts.splice(this.maxShown);
                }
                else {
                    this.toasts.splice(0, diff);
                }
            }
        }
        else {
            this.toasts.unshift(toast);
            if (this.toasts.length > this.maxShown) {
                this.toasts.splice(this.maxShown);
            }
        }
        this.cdr.detectChanges();
    };
    ToastContainer.prototype.removeToast = function (toast) {
        if (toast.timeoutId) {
            clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        this.toasts = this.toasts.filter(function (t) {
            return t.id !== toast.id;
        });
    };
    ToastContainer.prototype.removeAllToasts = function () {
        this.toasts = [];
    };
    ToastContainer.prototype.clicked = function (toast) {
        if (this.onToastClicked) {
            this.onToastClicked(toast);
        }
    };
    ToastContainer.prototype.anyToast = function () {
        return this.toasts.length > 0;
    };
    ToastContainer.prototype.findToast = function (toastId) {
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toast.id === toastId) {
                return toast;
            }
        }
        return null;
    };
    ToastContainer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'toast-container',
                    template: "\n    <div #toastContainer id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" [@inOut]=\"animate\" class=\"toast toast-{{toast.type}}\" \n      (click)=\"clicked(toast)\">\n        <div class=\"toast-close-button\" *ngIf=\"toast.config.showCloseButton\" (click)=\"removeToast(toast)\">&times;\n        </div> \n        <div *ngIf=\"toast.title\" class=\"{{toast.config.titleClass || titleClass}}\">{{toast.title}}</div>\n        <div [ngSwitch]=\"toast.config.enableHTML\">\n          <span *ngSwitchCase=\"true\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toast.message)\"></span>\n          <span *ngSwitchDefault class=\"{{toast.config.messageClass || messageClass}}\">{{toast.message}}</span>\n        </div>             \n      </div>\n    </div>\n    ",
                    animations: [
                        core_1.trigger('inOut', [
                            core_1.state('flyRight, flyLeft', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                            core_1.state('fade', core_1.style({ opacity: 1 })),
                            core_1.state('slideDown, slideUp', core_1.style({ opacity: 1, transform: 'translateY(0)' })),
                            core_1.transition('void => flyRight', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(100%)'
                                }),
                                core_1.animate('0.2s ease-in')
                            ]),
                            core_1.transition('flyRight => void', [
                                core_1.animate('0.2s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(100%)'
                                }))
                            ]),
                            core_1.transition('void => flyLeft', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)'
                                }),
                                core_1.animate('0.2s ease-in')
                            ]),
                            core_1.transition('flyLeft => void', [
                                core_1.animate('0.2s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)'
                                }))
                            ]),
                            core_1.transition('void => fade', [
                                core_1.style({
                                    opacity: 0,
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('fade => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                }))
                            ]),
                            core_1.transition('void => slideDown', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(-200%)'
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('slideDown => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(-200%)'
                                }))
                            ]),
                            core_1.transition('void => slideUp', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(200%)'
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('slideUp => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(200%)'
                                }))
                            ]),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    ToastContainer.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
        { type: core_1.ChangeDetectorRef, },
        { type: toast_options_1.ToastOptions, decorators: [{ type: core_1.Optional },] },
    ]; };
    return ToastContainer;
}());
exports.ToastContainer = ToastContainer;
//# sourceMappingURL=toast-container.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLinkActive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_link__ = __webpack_require__(215);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * \@whatItDoes Lets you add a CSS class to an element when the link's route becomes active.
 *
 * \@howToUse
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * \@description
 *
 * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterLinkActive = (function () {
    /**
     * @param {?} router
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdr
     */
    function RouterLinkActive(router, element, renderer, cdr) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.classes = [];
        this.active = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__router__["b" /* NavigationEnd */]) {
                _this.update();
            }
        });
    }
    Object.defineProperty(RouterLinkActive.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () { return this.active; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            var /** @type {?} */ classes = Array.isArray(data) ? data : data.split(' ');
            this.classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        var /** @type {?} */ hasActiveLinks = this.hasActiveLinks();
        // react only when status has changed to prevent unnecessary dom updates
        if (this.active !== hasActiveLinks) {
            this.active = hasActiveLinks;
            this.classes.forEach(function (c) { return _this.renderer.setElementClass(_this.element.nativeElement, c, hasActiveLinks); });
            this.cdr.detectChanges();
        }
    };
    /**
     * @param {?} router
     * @return {?}
     */
    RouterLinkActive.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) {
            return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
        };
    };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.hasActiveLinks = function () {
        return this.links.some(this.isLinkActive(this.router)) ||
            this.linksWithHrefs.some(this.isLinkActive(this.router));
    };
    RouterLinkActive.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[routerLinkActive]',
                    exportAs: 'routerLinkActive',
                },] },
    ];
    /** @nocollapse */
    RouterLinkActive.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    RouterLinkActive.propDecorators = {
        'links': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__router_link__["a" /* RouterLink */], { descendants: true },] },],
        'linksWithHrefs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__router_link__["b" /* RouterLinkWithHref */], { descendants: true },] },],
        'routerLinkActiveOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'routerLinkActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return RouterLinkActive;
}());
function RouterLinkActive_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLinkActive.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLinkActive.ctorParameters;
    /** @type {?} */
    RouterLinkActive.propDecorators;
    /** @type {?} */
    RouterLinkActive.prototype.links;
    /** @type {?} */
    RouterLinkActive.prototype.linksWithHrefs;
    /** @type {?} */
    RouterLinkActive.prototype.classes;
    /** @type {?} */
    RouterLinkActive.prototype.subscription;
    /** @type {?} */
    RouterLinkActive.prototype.active;
    /** @type {?} */
    RouterLinkActive.prototype.routerLinkActiveOptions;
    /** @type {?} */
    RouterLinkActive.prototype.router;
    /** @type {?} */
    RouterLinkActive.prototype.element;
    /** @type {?} */
    RouterLinkActive.prototype.renderer;
    /** @type {?} */
    RouterLinkActive.prototype.cdr;
}
//# sourceMappingURL=router_link_active.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRIMARY_OUTLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationCancelingError; });
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultUrlMatcher;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @whatItDoes Name of the primary outlet.
 *
 * @stable
 */
var /** @type {?} */ PRIMARY_OUTLET = 'primary';
var NavigationCancelingError = (function (_super) {
    __extends(NavigationCancelingError, _super);
    /**
     * @param {?} message
     */
    function NavigationCancelingError(message) {
        _super.call(this, message);
        this.message = message;
        this.stack = (new Error(message)).stack;
    }
    /**
     * @return {?}
     */
    NavigationCancelingError.prototype.toString = function () { return this.message; };
    return NavigationCancelingError;
}(Error));
function NavigationCancelingError_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationCancelingError.prototype.stack;
    /** @type {?} */
    NavigationCancelingError.prototype.message;
}
/**
 * @param {?} segments
 * @param {?} segmentGroup
 * @param {?} route
 * @return {?}
 */
function defaultUrlMatcher(segments, segmentGroup, route) {
    var /** @type {?} */ path = route.path;
    var /** @type {?} */ parts = path.split('/');
    var /** @type {?} */ posParams = {};
    var /** @type {?} */ consumed = [];
    var /** @type {?} */ currentIndex = 0;
    for (var /** @type {?} */ i = 0; i < parts.length; ++i) {
        if (currentIndex >= segments.length)
            return null;
        var /** @type {?} */ current = segments[currentIndex];
        var /** @type {?} */ p = parts[i];
        var /** @type {?} */ isPosParam = p.startsWith(':');
        if (!isPosParam && p !== current.path)
            return null;
        if (isPosParam) {
            posParams[p.substring(1)] = current;
        }
        consumed.push(current);
        currentIndex++;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || currentIndex < segments.length)) {
        return null;
    }
    else {
        return { consumed: consumed, posParams: posParams };
    }
}
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_outlet_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(34);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * \@whatItDoes Acts as a placeholder that Angular dynamically fills based on the current router
 * state.
 *
 * \@howToUse
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet will emit an activate event any time a new component is being instantiated,
 * and a deactivate event when it is being destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterOutlet = (function () {
    /**
     * @param {?} parentOutletMap
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     */
    function RouterOutlet(parentOutletMap, location, resolver, name) {
        this.parentOutletMap = parentOutletMap;
        this.location = location;
        this.resolver = resolver;
        this.name = name;
        this.activateEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deactivateEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        parentOutletMap.registerOutlet(name ? name : __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* PRIMARY_OUTLET */], this);
    }
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnDestroy = function () { this.parentOutletMap.removeOutlet(this.name ? this.name : __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* PRIMARY_OUTLET */]); };
    Object.defineProperty(RouterOutlet.prototype, "locationInjector", {
        /**
         * @return {?}
         */
        get: function () { return this.location.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "locationFactoryResolver", {
        /**
         * @return {?}
         */
        get: function () { return this.resolver; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        /**
         * @return {?}
         */
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this._activatedRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var /** @type {?} */ r = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return r;
    };
    /**
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    RouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var /** @type {?} */ c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @param {?} injector
     * @param {?} providers
     * @param {?} outletMap
     * @return {?}
     */
    RouterOutlet.prototype.activate = function (activatedRoute, resolver, injector, providers, outletMap) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this.outletMap = outletMap;
        this._activatedRoute = activatedRoute;
        var /** @type {?} */ snapshot = activatedRoute._futureSnapshot;
        var /** @type {?} */ component = (snapshot._routeConfig.component);
        var /** @type {?} */ factory = resolver.resolveComponentFactory(component);
        var /** @type {?} */ inj = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(providers, injector);
        this.activated = this.location.createComponent(factory, this.location.length, inj, []);
        this.activated.changeDetectorRef.detectChanges();
        this.activateEvents.emit(this.activated.instance);
    };
    RouterOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'router-outlet' },] },
    ];
    /** @nocollapse */
    RouterOutlet.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__router_outlet_map__["a" /* RouterOutletMap */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['name',] },] },
    ]; };
    RouterOutlet.propDecorators = {
        'activateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['activate',] },],
        'deactivateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['deactivate',] },],
    };
    return RouterOutlet;
}());
function RouterOutlet_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterOutlet.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterOutlet.ctorParameters;
    /** @type {?} */
    RouterOutlet.propDecorators;
    /** @type {?} */
    RouterOutlet.prototype.activated;
    /** @type {?} */
    RouterOutlet.prototype._activatedRoute;
    /** @type {?} */
    RouterOutlet.prototype.outletMap;
    /** @type {?} */
    RouterOutlet.prototype.activateEvents;
    /** @type {?} */
    RouterOutlet.prototype.deactivateEvents;
    /** @type {?} */
    RouterOutlet.prototype.parentOutletMap;
    /** @type {?} */
    RouterOutlet.prototype.location;
    /** @type {?} */
    RouterOutlet.prototype.resolver;
    /** @type {?} */
    RouterOutlet.prototype.name;
}
//# sourceMappingURL=router_outlet.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteReuseStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Provides a way to customize when activated routes get reused.
 *
 * \@experimental
 * @abstract
 */
var RouteReuseStrategy = (function () {
    function RouteReuseStrategy() {
    }
    /**
     * Determines if this route (and its subtree) should be detached to be reused later
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldDetach = function (route) { };
    /**
     * Stores the detached route
     * @abstract
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    RouteReuseStrategy.prototype.store = function (route, handle) { };
    /**
     * Determines if this route (and its subtree) should be reattached
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldAttach = function (route) { };
    /**
     * Retrieves the previously stored route
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.retrieve = function (route) { };
    /**
     * Determines if a route should be reused
     * @abstract
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) { };
    return RouteReuseStrategy;
}());
//# sourceMappingURL=route_reuse_strategy.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTER_CONFIGURATION; });
/* unused harmony export ROUTER_FORROOT_GUARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ROUTER_PROVIDERS; });
/* unused harmony export routerNgProbeToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RouterModule; });
/* unused harmony export provideLocationStrategy */
/* unused harmony export provideForRootGuard */
/* harmony export (immutable) */ __webpack_exports__["d"] = provideRoutes;
/* unused harmony export setupRouter */
/* unused harmony export rootRoute */
/* unused harmony export initialRouterNavigation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTER_INITIALIZER; });
/* unused harmony export provideRouterInitializer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_router_link__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_router_link_active__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_router_outlet__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__private_import_platform_browser__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_reuse_strategy__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_config_loader__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_preloader__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_state__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_handling_strategy__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @whatItDoes Contains a list of directives
 * @stable
 */
var /** @type {?} */ ROUTER_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_4__directives_router_outlet__["a" /* RouterOutlet */], __WEBPACK_IMPORTED_MODULE_2__directives_router_link__["a" /* RouterLink */], __WEBPACK_IMPORTED_MODULE_2__directives_router_link__["b" /* RouterLinkWithHref */], __WEBPACK_IMPORTED_MODULE_3__directives_router_link_active__["a" /* RouterLinkActive */]];
/**
 * @whatItDoes Is used in DI to configure the router.
 * @stable
 */
var /** @type {?} */ ROUTER_CONFIGURATION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('ROUTER_CONFIGURATION');
/**
 * @docsNotRequired
 */
var /** @type {?} */ ROUTER_FORROOT_GUARD = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('ROUTER_FORROOT_GUARD');
var /** @type {?} */ ROUTER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"],
    { provide: __WEBPACK_IMPORTED_MODULE_13__url_tree__["d" /* UrlSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_13__url_tree__["a" /* DefaultUrlSerializer */] },
    {
        provide: __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */],
        useFactory: setupRouter,
        deps: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_13__url_tree__["d" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__["a" /* RouterOutletMap */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModuleFactoryLoader"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_8__router_config_loader__["a" /* ROUTES */], ROUTER_CONFIGURATION, [__WEBPACK_IMPORTED_MODULE_12__url_handling_strategy__["a" /* UrlHandlingStrategy */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()],
            [__WEBPACK_IMPORTED_MODULE_6__route_reuse_strategy__["a" /* RouteReuseStrategy */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()]
        ]
    },
    __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__["a" /* RouterOutletMap */],
    { provide: __WEBPACK_IMPORTED_MODULE_11__router_state__["a" /* ActivatedRoute */], useFactory: rootRoute, deps: [__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */]] },
    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModuleFactoryLoader"], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SystemJsNgModuleLoader"] },
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["d" /* RouterPreloader */],
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["a" /* NoPreloading */],
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["b" /* PreloadAllModules */],
    { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
];
/**
 * @return {?}
 */
function routerNgProbeToken() {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgProbeToken"]('Router', __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */]);
}
/**
 * \@whatItDoes Adds router directives and providers.
 *
 * \@howToUse
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@description
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular 2 router solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
 * overview of how the router should be used.
 *
 * \@stable
 */
var RouterModule = (function () {
    /**
     * @param {?} guard
     */
    function RouterModule(guard) {
    }
    /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options:
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    RouterModule.forRoot = function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                ROUTER_PROVIDERS,
                provideRoutes(routes),
                {
                    provide: ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"]()]]
                },
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["LocationStrategy"],
                    useFactory: provideLocationStrategy,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_common__["PlatformLocation"], [new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"](__WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"]), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()], ROUTER_CONFIGURATION
                    ]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__router_preloader__["c" /* PreloadingStrategy */],
                    useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                        __WEBPACK_IMPORTED_MODULE_10__router_preloader__["a" /* NoPreloading */]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgProbeToken"], multi: true, useFactory: routerNgProbeToken },
                provideRouterInitializer(),
            ],
        };
    };
    /**
     * Creates a module with all the router directives and a provider registering routes.
     * @param {?} routes
     * @return {?}
     */
    RouterModule.forChild = function (routes) {
        return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
    };
    RouterModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },] },
    ];
    /** @nocollapse */
    RouterModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [ROUTER_FORROOT_GUARD,] },] },
    ]; };
    return RouterModule;
}());
function RouterModule_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterModule.ctorParameters;
}
/**
 * @param {?} platformLocationStrategy
 * @param {?} baseHref
 * @param {?=} options
 * @return {?}
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new __WEBPACK_IMPORTED_MODULE_0__angular_common__["HashLocationStrategy"](platformLocationStrategy, baseHref) :
        new __WEBPACK_IMPORTED_MODULE_0__angular_common__["PathLocationStrategy"](platformLocationStrategy, baseHref);
}
/**
 * @param {?} router
 * @return {?}
 */
function provideForRootGuard(router) {
    if (router) {
        throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    }
    return 'guarded';
}
/**
 * \@whatItDoes Registers routes.
 *
 * \@howToUse
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@stable
 * @param {?} routes
 * @return {?}
 */
function provideRoutes(routes) {
    return [
        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], multi: true, useValue: routes },
        { provide: __WEBPACK_IMPORTED_MODULE_8__router_config_loader__["a" /* ROUTES */], multi: true, useValue: routes },
    ];
}
/**
 * @param {?} ref
 * @param {?} urlSerializer
 * @param {?} outletMap
 * @param {?} location
 * @param {?} injector
 * @param {?} loader
 * @param {?} compiler
 * @param {?} config
 * @param {?=} opts
 * @param {?=} urlHandlingStrategy
 * @param {?=} routeReuseStrategy
 * @return {?}
 */
function setupRouter(ref, urlSerializer, outletMap, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
    if (opts === void 0) { opts = {}; }
    var /** @type {?} */ router = new __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */](null, urlSerializer, outletMap, location, injector, loader, compiler, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_collection__["a" /* flatten */])(config));
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    if (routeReuseStrategy) {
        router.routeReuseStrategy = routeReuseStrategy;
    }
    if (opts.errorHandler) {
        router.errorHandler = opts.errorHandler;
    }
    if (opts.enableTracing) {
        var /** @type {?} */ dom_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__private_import_platform_browser__["a" /* getDOM */])();
        router.events.subscribe(function (e) {
            dom_1.logGroup("Router Event: " + ((e.constructor)).name);
            dom_1.log(e.toString());
            dom_1.log(e);
            dom_1.logGroupEnd();
        });
    }
    return router;
}
/**
 * @param {?} router
 * @return {?}
 */
function rootRoute(router) {
    return router.routerState.root;
}
/**
 * @param {?} router
 * @param {?} ref
 * @param {?} preloader
 * @param {?} opts
 * @return {?}
 */
function initialRouterNavigation(router, ref, preloader, opts) {
    return function (bootstrappedComponentRef) {
        if (bootstrappedComponentRef !== ref.components[0]) {
            return;
        }
        router.resetRootComponentType(ref.componentTypes[0]);
        preloader.setUpPreloading();
        if (opts.initialNavigation === false) {
            router.setUpLocationChangeListener();
        }
        else {
            router.initialNavigation();
        }
    };
}
/**
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * @experimental
 */
var /** @type {?} */ ROUTER_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('Router Initializer');
/**
 * @return {?}
 */
function provideRouterInitializer() {
    return [
        {
            provide: ROUTER_INITIALIZER,
            useFactory: initialRouterNavigation,
            deps: [__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_10__router_preloader__["d" /* RouterPreloader */], ROUTER_CONFIGURATION]
        },
        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_BOOTSTRAP_LISTENER"], multi: true, useExisting: ROUTER_INITIALIZER },
    ];
}
//# sourceMappingURL=router_module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PreloadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PreloadAllModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPreloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RouterPreloader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_config_loader__ = __webpack_require__(96);
/**
*@license
*Copyright Google Inc. All Rights Reserved.
*
*Use of this source code is governed by an MIT-style license that can be
*found in the LICENSE file at https://angular.io/license
*/










/**
 * \@whatItDoes Provides a preloading strategy.
 *
 * \@experimental
 * @abstract
 */
var PreloadingStrategy = (function () {
    function PreloadingStrategy() {
    }
    /**
     * @abstract
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadingStrategy.prototype.preload = function (route, fn) { };
    return PreloadingStrategy;
}());
/**
 * \@whatItDoes Provides a preloading strategy that preloads all modules as quicky as possible.
 *
 * \@howToUse
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * \@experimental
 */
var PreloadAllModules = (function () {
    function PreloadAllModules() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadAllModules.prototype.preload = function (route, fn) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(fn(), function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null); });
    };
    return PreloadAllModules;
}());
/**
 * \@whatItDoes Provides a preloading strategy that does not preload any modules.
 *
 * \@description
 *
 * This strategy is enabled by default.
 *
 * \@experimental
 */
var NoPreloading = (function () {
    function NoPreloading() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    NoPreloading.prototype.preload = function (route, fn) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null); };
    return NoPreloading;
}());
/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * \@stable
 */
var RouterPreloader = (function () {
    /**
     * @param {?} router
     * @param {?} moduleLoader
     * @param {?} compiler
     * @param {?} injector
     * @param {?} preloadingStrategy
     */
    function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
        this.router = router;
        this.injector = injector;
        this.preloadingStrategy = preloadingStrategy;
        this.loader = new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["b" /* RouterConfigLoader */](moduleLoader, compiler);
    }
    ;
    /**
     * @return {?}
     */
    RouterPreloader.prototype.setUpPreloading = function () {
        var _this = this;
        var /** @type {?} */ navigations = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__["filter"].call(this.router.events, function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_8__router__["b" /* NavigationEnd */]; });
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__["concatMap"].call(navigations, function () { return _this.preload(); }).subscribe(function (v) { });
    };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.preload = function () { return this.processRoutes(this.injector, this.router.config); };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} injector
     * @param {?} routes
     * @return {?}
     */
    RouterPreloader.prototype.processRoutes = function (injector, routes) {
        var /** @type {?} */ res = [];
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var c = routes_1[_i];
            // we already have the config loaded, just recurse
            if (c.loadChildren && !c.canLoad && ((c))._loadedConfig) {
                var /** @type {?} */ childConfig = ((c))._loadedConfig;
                res.push(this.processRoutes(childConfig.injector, childConfig.routes));
            }
            else if (c.loadChildren && !c.canLoad) {
                res.push(this.preloadConfig(injector, c));
            }
            else if (c.children) {
                res.push(this.processRoutes(injector, c.children));
            }
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__["mergeAll"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__["from"])(res));
    };
    /**
     * @param {?} injector
     * @param {?} route
     * @return {?}
     */
    RouterPreloader.prototype.preloadConfig = function (injector, route) {
        var _this = this;
        return this.preloadingStrategy.preload(route, function () {
            var /** @type {?} */ loaded = _this.loader.load(injector, route.loadChildren);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(loaded, function (config) {
                var /** @type {?} */ c = route;
                c._loadedConfig = config;
                return _this.processRoutes(config.injector, config.routes);
            });
        });
    };
    RouterPreloader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RouterPreloader.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_8__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: PreloadingStrategy, },
    ]; };
    return RouterPreloader;
}());
function RouterPreloader_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterPreloader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterPreloader.ctorParameters;
    /** @type {?} */
    RouterPreloader.prototype.loader;
    /** @type {?} */
    RouterPreloader.prototype.subscription;
    /** @type {?} */
    RouterPreloader.prototype.router;
    /** @type {?} */
    RouterPreloader.prototype.injector;
    /** @type {?} */
    RouterPreloader.prototype.preloadingStrategy;
}
//# sourceMappingURL=router_preloader.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Imports
const http_1 = __webpack_require__(52);
const Rx_1 = __webpack_require__(257);
// Decorator to tell Angular that this class can be injected as a service to another class
class GenericApiService {
    // Class constructor with Jsonp injected
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.MSG_CREATE_SUCCESS = "Enregistrement effectué";
        this.MSG_UPDATE_SUCCESS = "Enregistrement effectué";
        this.MSG_DELETE_SUCCESS = "Suppression effectuée";
        // Base URL for Petfinder API
        this.apiUrl = "http://" + window.location.host + "/api/";
        this.controllerName = "";
    }
    get() {
        this.sharedService.startLoading();
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    // get a pet based on their id
    getById(id) {
        // End point for list of pets:
        const endPoint = '/' + id;
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName + endPoint)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    getForGrid(skip = 0, take = 10, sort = "", searchText) {
        this.sharedService.startLoading();
        const endPoint = '/getWithParams';
        let queryStr = `skip=` + skip + `&take=` + take + `&sort=` + sort + `&$count=true`;
        if (searchText) {
            queryStr += '&search=' + searchText;
        }
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName + endPoint + '?' + queryStr)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    downloadCsv() {
        this.sharedService.startLoading();
        const endPoint = '/getCsv';
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName + endPoint)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    downloadXlsx() {
        this.sharedService.startLoading();
        const endPoint = '/getXlsx';
        var headers = new http_1.Headers();
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName + endPoint, { responseType: http_1.ResponseContentType.Blob })
            .map((res) => this.manageSuccessText(res))
            .catch((error) => this.manageError(error));
    }
    update(id, obj) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;
        return this.http
            .put(this.apiUrl + this.controllerName + endPoint, obj)
            .map((res) => this.manageSuccess(res, this.MSG_UPDATE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    create(obj) {
        this.sharedService.startLoading();
        const endPoint = '/';
        return this.http
            .post(this.apiUrl + this.controllerName + endPoint, obj)
            .map((res) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    delete(id) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;
        return this.http
            .delete(this.apiUrl + this.controllerName + endPoint)
            .map((res) => this.manageSuccess(res, this.MSG_DELETE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    manageError(error) {
        this.sharedService.endLoading();
        this.sharedService.errorToast('Erreur Serveur');
        return Rx_1.Observable.throw((error.json ? error.json().error : error) || 'Server error');
    }
    manageSuccess(res, toastMsg) {
        this.sharedService.endLoading();
        if (toastMsg) {
            this.sharedService.successToast(toastMsg);
        }
        return res.json();
    }
    manageSuccessText(res, toastMsg) {
        this.sharedService.endLoading();
        if (toastMsg) {
            this.sharedService.successToast(toastMsg);
        }
        return res;
    }
}
exports.GenericApiService = GenericApiService;


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = __webpack_require__(0);
let HomeComponent = class HomeComponent {
    ngOnInit() {
        this.title = 'Odyssey';
    }
};
HomeComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(704)
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(38);
const panel_service_1 = __webpack_require__(218);
const panel_model_1 = __webpack_require__(668);
const card_model_1 = __webpack_require__(667);
const router_2 = __webpack_require__(38);
let PanelEditComponent = class PanelEditComponent {
    constructor(panelService, route, router) {
        this.panelService = panelService;
        this.route = route;
        this.router = router;
        this.titreCreation = "Création d'un panneau";
        this.titreModification = "Modification d'un panneau";
        this.panel = new panel_model_1.Panel();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;
                this.panelService.getById(id)
                    .subscribe(panel => {
                    this.panel = panel;
                    if (!this.panel.Cards)
                        this.panel.Cards = new Array();
                    this.isNew = false;
                    var grid = $('.grid-stack').data('gridstack');
                    var i = 0;
                    _.each(this.panel.Cards, function (node) {
                        grid.addWidget($('<div><div class="grid-stack-item-content editable" spellcheck="false" contenteditable="true">' + panel.Cards[i].Content + '</div></div>'), node.X, node.Y, node.Width, node.Height);
                        console.log(node);
                        i++;
                    });
                }, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
            }
            else {
                this.titre = this.titreCreation;
            }
        });
    }
    onSubmit() {
        //Get cards from view
        var cards = _.map($('.grid-stack .grid-stack-item:visible'), function (el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            console.log(el);
            return {
                id: el.attr('data-custom-id'),
                x: node.x,
                y: node.y,
                width: node.width,
                height: node.height,
                content: el[0].firstChild.outerText
            };
        });
        //Link to controller
        for (var i = 0; i < cards.length; i++) {
            this.panel.Cards[i].X = cards[i].x;
            this.panel.Cards[i].Y = cards[i].y;
            this.panel.Cards[i].Width = cards[i].width;
            this.panel.Cards[i].Height = cards[i].height;
            this.panel.Cards[i].Content = cards[i].content;
        }
        //Update DB
        if (this.isNew) {
            this.panelService.create(this.panel).subscribe(res => { this.panel = res; this.isNew = false; this.titre = this.titreModification; }, err => {
                console.log(err);
            });
        }
        else {
            this.panelService.update(this.panel.PanelId, this.panel).subscribe(res => { }, err => {
                console.log(err);
            });
        }
    }
    addCard() {
        if (this.isNew) {
            this.panelService.create(this.panel).subscribe(res => {
                this.panel = res;
                this.isNew = false;
                this.titre = this.titreModification;
                this.sendNewCard();
            }, err => {
                console.log(err);
            });
        }
        else {
            this.sendNewCard();
        }
    }
    sendNewCard() {
        this.panelService.createCard(new card_model_1.Card(0, 0, 1, 1, this.panel.PanelId, "Nouvelle carte")).subscribe(res => {
            this.panel.Cards.push(res);
            var grid = $('.grid-stack').data('gridstack');
            grid.addWidget($('<div><div class="grid-stack-item-content editable"   spellcheck="false" contenteditable="true">Nouvelle carte</div></div>'), 0, 0, 1, 1);
        }, err => {
            console.log(err);
        });
    }
    deletePanel() {
        this.panelService.delete(this.panel.PanelId).subscribe(res => {
            this.router.navigate(['/panel']);
        }, err => {
            console.log(err);
        });
    }
};
PanelEditComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(705)
    }),
    __metadata("design:paramtypes", [panel_service_1.PanelService, router_1.ActivatedRoute, router_2.Router])
], PanelEditComponent);
exports.PanelEditComponent = PanelEditComponent;


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const panel_service_1 = __webpack_require__(218);
const shared_service_1 = __webpack_require__(70);
const router_1 = __webpack_require__(38);
let PanelListComponent = class PanelListComponent {
    constructor(panelService, sharedService, router) {
        this.panelService = panelService;
        this.sharedService = sharedService;
        this.router = router;
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.page = 1;
        this.itemsPerPage = 10;
        this.numPages = 1;
        this.length = 0;
        this.noResult = false;
        this.rows = [];
        this.columns = [
            { title: 'ID', name: 'PanelId' },
            { title: 'Titre', name: 'Title' },
            { title: 'Cartes', name: 'Cards.length' },
            { title: 'Créé le', name: 'CreatedOn' },
            { title: 'Modifié le', name: 'LastModified' },
        ];
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-condensed', 'table-bordered', 'table-clickable']
        };
        //this.loadItems();
    }
    ngAfterViewInit() {
        this.onChangeTable(this.config);
    }
    loadItems() {
        this.panelService.getForGrid((this.page - 1) * this.itemsPerPage, this.itemsPerPage, this.getSorting(), this.config.filtering.filterString)
            .subscribe(users => {
            if (users.total <= (this.page - 1) * this.itemsPerPage) {
                this.page = 1;
                if (users.total == 0) {
                    this.rows = users.data;
                    this.noResult = true;
                }
                else {
                    this.noResult = false;
                }
            }
            else {
                this.noResult = false;
                this.length = users.total;
                this.rows = users.data;
            }
        }, //Bind to view
        err => {
            //Log errors if any
            console.log(err);
        });
    }
    getSorting() {
        let sorting = "";
        for (let column of this.columns) {
            if (column.sort == "asc" || column.sort == "desc")
                sorting = column.name + column.sort;
        }
        return sorting;
    }
    onChangeTable(conf, page = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        if (conf.sorting) {
            Object.assign(this.config.sorting, conf.sorting);
        }
        this.page = page.page;
        this.loadItems();
    }
    onCellClick(data) {
        this.router.navigate(['/panel', data.row.PanelId]);
    }
};
PanelListComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(706)
    }),
    __metadata("design:paramtypes", [panel_service_1.PanelService, shared_service_1.SharedService, router_1.Router])
], PanelListComponent);
exports.PanelListComponent = PanelListComponent;


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(38);
const user_service_1 = __webpack_require__(219);
const user_model_1 = __webpack_require__(669);
let UserEditComponent = class UserEditComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.titreCreation = "Création d'un utilisateur";
        this.titreModification = "Modification d'un utilisateur";
        this.Password = "";
        this.user = new user_model_1.User();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;
                // Retrieve Pet with Id route param
                this.userService.getById(id)
                    .subscribe(user => {
                    this.user = user;
                    this.isNew = false;
                }, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
            }
            else {
                this.titre = this.titreCreation;
            }
        });
    }
    onSubmit() {
        if (this.Password) {
            this.user.PasswordHash = this.Password;
        }
        if (this.isNew) {
            this.userService.create(this.user).subscribe(res => { this.user = res; this.isNew = false; this.titre = this.titreModification; }, err => {
                console.log(err);
            });
        }
        else {
            this.userService.update(this.user.Id, this.user).subscribe(res => { }, err => {
                console.log(err);
            });
        }
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(707)
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const user_service_1 = __webpack_require__(219);
const shared_service_1 = __webpack_require__(70);
const router_1 = __webpack_require__(38);
const file_saver_1 = __webpack_require__(674);
let UserListComponent = class UserListComponent {
    constructor(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.title = 'Popover title';
        this.message = 'Popover description';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.page = 1;
        this.itemsPerPage = 10;
        this.numPages = 1;
        this.length = 0;
        this.noResult = false;
        this.rows = [];
        this.columns = [
            { title: 'ID', name: 'Id' },
            { title: 'Nom d\'utilisateur', name: 'UserName' },
            { title: 'Email', name: 'Email' },
            { title: 'Téléphone', name: 'PhoneNumber' },
        ];
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-condensed', 'table-bordered', 'table-clickable']
        };
        //this.loadItems();
    }
    ngAfterViewInit() {
        this.onChangeTable(this.config);
    }
    loadItems() {
        this.userService.getForGrid((this.page - 1) * this.itemsPerPage, this.itemsPerPage, this.getSorting(), this.config.filtering.filterString)
            .subscribe(users => {
            if (users.total <= (this.page - 1) * this.itemsPerPage) {
                this.page = 1;
                if (users.total == 0) {
                    this.rows = users.data;
                    this.noResult = true;
                }
                else {
                    this.noResult = false;
                }
            }
            else {
                this.noResult = false;
                this.length = users.total;
                this.rows = users.data;
            }
        }, //Bind to view
        err => {
            //Log errors if any
            console.log(err);
        });
    }
    exportCsv() {
        this.userService.downloadCsv()
            .subscribe(data => {
            var blob = new Blob([data], { type: 'text/csv' });
            file_saver_1.saveAs(blob, "export.csv");
        }, //Bind to view
        err => {
            //Log errors if any
            console.log(err);
        });
    }
    exportXlsx() {
        this.userService.downloadXlsx().subscribe(data => {
            var blob = new Blob([data.blob()], { type: data.headers.get('Content-Type') });
            file_saver_1.saveAs(blob, "export.xlsx");
        }, //Bind to view
        err => {
            //Log errors if any
            console.log(err);
        });
    }
    getSorting() {
        let sorting = "";
        for (let column of this.columns) {
            if (column.sort == "asc" || column.sort == "desc")
                sorting = column.name + column.sort;
        }
        return sorting;
    }
    onChangeTable(conf, page = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        if (conf.sorting) {
            Object.assign(this.config.sorting, conf.sorting);
        }
        this.page = page.page;
        this.loadItems();
    }
    onCellClick(data) {
        console.log(data);
        this.router.navigate(['/user', data.row.Id]);
    }
};
UserListComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(708)
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, shared_service_1.SharedService, router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(656);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLink", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkWithHref", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkActive", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutlet", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReuseStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationCancel", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEnd", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationError", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStart", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRecognized", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIGURATION", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_INITIALIZER", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "provideRoutes", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutletMap", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoPreloading", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadAllModules", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterPreloader", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateSnapshot", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_OUTLET", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHandlingStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUrlSerializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["A"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegment", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["D"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlTree", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["E"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["F"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__router_private__", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["G"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the router package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = shallowEqualArrays;
/* harmony export (immutable) */ __webpack_exports__["c"] = shallowEqual;
/* harmony export (immutable) */ __webpack_exports__["a"] = flatten;
/* unused harmony export first */
/* harmony export (immutable) */ __webpack_exports__["i"] = last;
/* unused harmony export and */
/* harmony export (immutable) */ __webpack_exports__["e"] = merge;
/* harmony export (immutable) */ __webpack_exports__["d"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["h"] = waitForMap;
/* harmony export (immutable) */ __webpack_exports__["g"] = andObservables;
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapIntoObservable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatAll__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_every__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_last__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__private_import_core__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(34);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqual(a, b) {
    var /** @type {?} */ k1 = Object.keys(a);
    var /** @type {?} */ k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var /** @type {?} */ key;
    for (var /** @type {?} */ i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} a
 * @return {?}
 */
function flatten(a) {
    var /** @type {?} */ target = [];
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        for (var /** @type {?} */ j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
/**
 * @param {?} a
 * @return {?}
 */
function first(a) {
    return a.length > 0 ? a[0] : null;
}
/**
 * @param {?} a
 * @return {?}
 */
function last(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * @param {?} bools
 * @return {?}
 */
function and(bools) {
    return !bools.some(function (v) { return !v; });
}
/**
 * @param {?} m1
 * @param {?} m2
 * @return {?}
 */
function merge(m1, m2) {
    var /** @type {?} */ m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
/**
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
/**
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function waitForMap(obj, fn) {
    var /** @type {?} */ waitFor = [];
    var /** @type {?} */ res = {};
    forEach(obj, function (a, k) {
        if (k === __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* PRIMARY_OUTLET */]) {
            waitFor.push(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(fn(k, a), function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    forEach(obj, function (a, k) {
        if (k !== __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* PRIMARY_OUTLET */]) {
            waitFor.push(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(fn(k, a), function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    if (waitFor.length > 0) {
        var /** @type {?} */ concatted$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatAll__["concatAll"].call(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"].apply(void 0, waitFor));
        var /** @type {?} */ last$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_last__["last"].call(concatted$);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(last$, function () { return res; });
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(res);
}
/**
 * @param {?} observables
 * @return {?}
 */
function andObservables(observables) {
    var /** @type {?} */ merged$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__["mergeAll"].call(observables);
    return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_every__["every"].call(merged$, function (result) { return result === true; });
}
/**
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__private_import_core__["a" /* isObservable */])(value)) {
        return value;
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__private_import_core__["b" /* isPromise */])(value)) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__["fromPromise"])(value);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(value);
}
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var toast_container_component_1 = __webpack_require__(243);
var toast_options_1 = __webpack_require__(151);
var toast_1 = __webpack_require__(511);
var Subject_1 = __webpack_require__(9);
var ToastsManager = (function () {
    function ToastsManager(componentFactoryResolver, appRef, options) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.options = {};
        this.index = 0;
        this.toastClicked = new Subject_1.Subject();
        if (options) {
            Object.assign(this.options, options);
        }
    }
    ToastsManager.prototype.setRootViewContainerRef = function (vRef) {
        this._rootViewContainerRef = vRef;
    };
    ToastsManager.prototype.onClickToast = function () {
        return this.toastClicked.asObservable();
    };
    ToastsManager.prototype.show = function (toast, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.container) {
                // get app root view component ref
                if (!_this._rootViewContainerRef) {
                    try {
                        _this._rootViewContainerRef = _this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                    }
                    catch (e) {
                        reject(new Error('Please set root ViewContainerRef using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
                    }
                }
                // get options providers
                var providers = core_1.ReflectiveInjector.resolve([
                    { provide: toast_options_1.ToastOptions, useValue: _this.options }
                ]);
                // create and load ToastContainer
                var toastFactory = _this.componentFactoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainer);
                var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, _this._rootViewContainerRef.parentInjector);
                _this.container = _this._rootViewContainerRef.createComponent(toastFactory, _this._rootViewContainerRef.length, childInjector);
                _this.container.instance.onToastClicked = function (toast) {
                    _this._onToastClicked(toast);
                };
            }
            resolve(_this.setupToast(toast, options));
        });
    };
    ToastsManager.prototype.createTimeout = function (toast) {
        var _this = this;
        var task = setTimeout(function () {
            _this.clearToast(toast);
        }, toast.config.toastLife);
        return task.toString();
    };
    ToastsManager.prototype.setupToast = function (toast, options) {
        var _this = this;
        toast.id = ++this.index;
        Object.keys(toast.config).forEach(function (k) {
            if (_this.options.hasOwnProperty(k)) {
                toast.config[k] = _this.options[k];
            }
            if (options && options.hasOwnProperty(k)) {
                toast.config[k] = options[k];
            }
        });
        if (toast.config.dismiss === 'auto') {
            toast.timeoutId = this.createTimeout(toast);
        }
        this.container.instance.addToast(toast);
        return toast;
    };
    ToastsManager.prototype._onToastClicked = function (toast) {
        this.toastClicked.next(toast);
        if (toast.config.dismiss === 'click') {
            this.clearToast(toast);
        }
    };
    ToastsManager.prototype.dismissToast = function (toast) {
        this.clearToast(toast);
    };
    ToastsManager.prototype.clearToast = function (toast) {
        if (this.container) {
            var instance = this.container.instance;
            instance.removeToast(toast);
            if (!instance.anyToast()) {
                this.dispose();
            }
        }
    };
    ToastsManager.prototype.clearAllToasts = function () {
        if (this.container) {
            var instance = this.container.instance;
            instance.removeAllToasts();
            this.dispose();
        }
    };
    ToastsManager.prototype.dispose = function () {
        var _this = this;
        // using timeout to allow animation to finish
        setTimeout(function () {
            if (_this.container && !_this.container.instance.anyToast()) {
                _this.container.destroy();
                _this.container = null;
            }
        }, 2000);
    };
    ToastsManager.prototype.error = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('error', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.info = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('info', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.success = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('success', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.warning = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('warning', message, title, data);
        return this.show(toast, options);
    };
    // allow user define custom background color and image
    ToastsManager.prototype.custom = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('custom', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToastsManager.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ApplicationRef, },
        { type: toast_options_1.ToastOptions, decorators: [{ type: core_1.Optional },] },
    ]; };
    return ToastsManager;
}());
exports.ToastsManager = ToastsManager;
//# sourceMappingURL=toast-manager.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Toast = (function () {
    function Toast(type, message, title, data) {
        this.type = type;
        this.message = message;
        this.title = title;
        this.data = data;
        this.config = {
            dismiss: 'auto',
            enableHTML: false,
            titleClass: '',
            messageClass: '',
            toastLife: 3000,
            showCloseButton: false,
        };
    }
    return Toast;
}());
exports.Toast = Toast;
//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="./../node_modules/@types/core-js/index.d.ts"/>
///<reference path="./../node_modules/@types/node/index.d.ts" />
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(36);
const forms_1 = __webpack_require__(20);
const http_1 = __webpack_require__(52);
const app_component_1 = __webpack_require__(662);
const header_component_1 = __webpack_require__(664);
const sidebar_component_1 = __webpack_require__(665);
const global_1 = __webpack_require__(141);
const app_routes_1 = __webpack_require__(663);
const home_component_1 = __webpack_require__(345);
const user_module_1 = __webpack_require__(673);
const panel_module_1 = __webpack_require__(672);
const shared_service_1 = __webpack_require__(70);
const ng2_toastr_1 = __webpack_require__(242);
class CustomToastOptions extends ng2_toastr_1.ToastOptions {
    constructor() {
        super(...arguments);
        this.positionClass = "toast-bottom-right";
    }
}
exports.CustomToastOptions = CustomToastOptions;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routes_1.routing,
            http_1.HttpModule,
            http_1.JsonpModule,
            user_module_1.UserModule,
            panel_module_1.PanelModule,
            ng2_toastr_1.ToastModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            global_1.GlobalVariables,
            shared_service_1.SharedService,
            { provide: ng2_toastr_1.ToastOptions, useClass: CustomToastOptions }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = createEmptyUrlTree;
/* harmony export (immutable) */ __webpack_exports__["h"] = containsTree;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UrlTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UrlSegmentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UrlSegment; });
/* harmony export (immutable) */ __webpack_exports__["f"] = equalSegments;
/* unused harmony export equalPath */
/* harmony export (immutable) */ __webpack_exports__["i"] = mapChildrenIntoArray;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UrlSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultUrlSerializer; });
/* unused harmony export serializePaths */
/* unused harmony export encode */
/* unused harmony export decode */
/* unused harmony export serializePath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @return {?}
 */
function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} exact
 * @return {?}
 */
function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalQueryParams(container, containee) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["c" /* shallowEqual */])(container, containee);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsQueryParams(container, containee) {
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} containeePaths
 * @return {?}
 */
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        var /** @type {?} */ current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        var /** @type {?} */ current = containeePaths.slice(0, container.segments.length);
        var /** @type {?} */ next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]])
            return false;
        return containsSegmentGroupHelper(container.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], containee, next);
    }
}
/**
 * \@whatItDoes Represents the parsed URL.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * \@description
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * \@stable
 */
var UrlTree = (function () {
    /**
     * \@internal
     * @param {?} root
     * @param {?} queryParams
     * @param {?} fragment
     */
    function UrlTree(root, queryParams, fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlTree.prototype.toString = function () { return new DefaultUrlSerializer().serialize(this); };
    return UrlTree;
}());
function UrlTree_tsickle_Closure_declarations() {
    /**
     * The root segment group of the URL tree
     * @type {?}
     */
    UrlTree.prototype.root;
    /**
     * The query params of the URL
     * @type {?}
     */
    UrlTree.prototype.queryParams;
    /**
     * The fragment of the URL
     * @type {?}
     */
    UrlTree.prototype.fragment;
}
/**
 * \@whatItDoes Represents the parsed URL segment group.
 *
 * See {\@link UrlTree} for more information.
 *
 * \@stable
 */
var UrlSegmentGroup = (function () {
    /**
     * @param {?} segments
     * @param {?} children
     */
    function UrlSegmentGroup(segments, children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /** The parent node in the url tree */
        this.parent = null;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(children, function (v, k) { return v.parent = _this; });
    }
    /**
     * Wether the segment has child segments
     * @return {?}
     */
    UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /**
         * Number of child segments
         * @return {?}
         */
        get: function () { return Object.keys(this.children).length; },
        enumerable: true,
        configurable: true
    });
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
    return UrlSegmentGroup;
}());
function UrlSegmentGroup_tsickle_Closure_declarations() {
    /**
     * \@internal
     * @type {?}
     */
    UrlSegmentGroup.prototype._sourceSegment;
    /**
     * \@internal
     * @type {?}
     */
    UrlSegmentGroup.prototype._segmentIndexShift;
    /**
     * The parent node in the url tree
     * @type {?}
     */
    UrlSegmentGroup.prototype.parent;
    /**
     * The URL segments of this group. See {\@link UrlSegment} for more information
     * @type {?}
     */
    UrlSegmentGroup.prototype.segments;
    /**
     * The list of children of this group
     * @type {?}
     */
    UrlSegmentGroup.prototype.children;
}
/**
 * \@whatItDoes Represents a single URL segment.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * \@description
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * \@stable
 */
var UrlSegment = (function () {
    /**
     * @param {?} path
     * @param {?} parameters
     */
    function UrlSegment(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegment.prototype.toString = function () { return serializePath(this); };
    return UrlSegment;
}());
function UrlSegment_tsickle_Closure_declarations() {
    /**
     * The path part of a URL segment
     * @type {?}
     */
    UrlSegment.prototype.path;
    /**
     * The matrix parameters associated with a segment
     * @type {?}
     */
    UrlSegment.prototype.parameters;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalSegments(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["c" /* shallowEqual */])(a[i].parameters, b[i].parameters))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalPath(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
    }
    return true;
}
/**
 * @param {?} segment
 * @param {?} fn
 * @return {?}
 */
function mapChildrenIntoArray(segment, fn) {
    var /** @type {?} */ res = [];
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (child, childOutlet) {
        if (childOutlet === __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (child, childOutlet) {
        if (childOutlet !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * \@whatItDoes Serializes and deserializes a URL string into a URL tree.
 *
 * \@description The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See {\@link DefaultUrlSerializer} for an example of a URL serializer.
 *
 * \@stable
 * @abstract
 */
var UrlSerializer = (function () {
    function UrlSerializer() {
    }
    /**
     * Parse a url into a {\@link UrlTree}
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlSerializer.prototype.parse = function (url) { };
    /**
     * Converts a {\@link UrlTree} into a url
     * @abstract
     * @param {?} tree
     * @return {?}
     */
    UrlSerializer.prototype.serialize = function (tree) { };
    return UrlSerializer;
}());
/**
 * \@whatItDoes A default implementation of the {\@link UrlSerializer}.
 *
 * \@description
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * \@stable
 */
var DefaultUrlSerializer = (function () {
    function DefaultUrlSerializer() {
    }
    /**
     * Parses a url into a {\@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    DefaultUrlSerializer.prototype.parse = function (url) {
        var /** @type {?} */ p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /**
     * Converts a {\@link UrlTree} into a url
     * @param {?} tree
     * @return {?}
     */
    DefaultUrlSerializer.prototype.serialize = function (tree) {
        var /** @type {?} */ segment = "/" + serializeSegment(tree.root, true);
        var /** @type {?} */ query = serializeQueryParams(tree.queryParams);
        var /** @type {?} */ fragment = tree.fragment !== null && tree.fragment !== undefined ? "#" + encodeURI(tree.fragment) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
/**
 * @param {?} segment
 * @return {?}
 */
function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
/**
 * @param {?} segment
 * @param {?} root
 * @return {?}
 */
function serializeSegment(segment, root) {
    if (segment.hasChildren() && root) {
        var /** @type {?} */ primary = segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] ?
            serializeSegment(segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], false) :
            '';
        var /** @type {?} */ children_1 = [];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (v, k) {
            if (k !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        if (children_1.length > 0) {
            return primary + "(" + children_1.join('//') + ")";
        }
        else {
            return "" + primary;
        }
    }
    else if (segment.hasChildren() && !root) {
        var /** @type {?} */ children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
                return [serializeSegment(segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], false)];
            }
            else {
                return [(k + ":" + serializeSegment(v, false))];
            }
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
    else {
        return serializePaths(segment);
    }
}
/**
 * @param {?} s
 * @return {?}
 */
function encode(s) {
    return encodeURIComponent(s);
}
/**
 * @param {?} s
 * @return {?}
 */
function decode(s) {
    return decodeURIComponent(s);
}
/**
 * @param {?} path
 * @return {?}
 */
function serializePath(path) {
    return "" + encode(path.path) + serializeParams(path.parameters);
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeParams(params) {
    return pairs(params).map(function (p) { return (";" + encode(p.first) + "=" + encode(p.second)); }).join('');
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeQueryParams(params) {
    var /** @type {?} */ strParams = Object.keys(params).map(function (name) {
        var /** @type {?} */ value = params[name];
        return Array.isArray(value) ? value.map(function (v) { return (encode(name) + "=" + encode(v)); }).join('&') :
            encode(name) + "=" + encode(value);
    });
    return strParams.length ? "?" + strParams.join("&") : '';
}
var Pair = (function () {
    /**
     * @param {?} first
     * @param {?} second
     */
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
function Pair_tsickle_Closure_declarations() {
    /** @type {?} */
    Pair.prototype.first;
    /** @type {?} */
    Pair.prototype.second;
}
/**
 * @param {?} obj
 * @return {?}
 */
function pairs(obj) {
    var /** @type {?} */ res = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            res.push(new Pair(prop, obj[prop]));
        }
    }
    return res;
}
var /** @type {?} */ SEGMENT_RE = /^[^\/()?;=&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchSegments(str) {
    SEGMENT_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var /** @type {?} */ QUERY_PARAM_RE = /^[^=?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchQueryParams(str) {
    QUERY_PARAM_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var /** @type {?} */ QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchUrlQueryParamValue(str) {
    QUERY_PARAM_VALUE_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = (function () {
    /**
     * @param {?} url
     */
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.capture = function (str) {
        if (!this.remaining.startsWith(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
        this.remaining = this.remaining.substring(str.length);
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseRootSegment = function () {
        if (this.remaining.startsWith('/')) {
            this.capture('/');
        }
        if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining.length == 0) {
            return {};
        }
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var /** @type {?} */ paths = [];
        if (!this.peekStartsWith('(')) {
            paths.push(this.parseSegments());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            paths.push(this.parseSegments());
        }
        var /** @type {?} */ children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var /** @type {?} */ res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (paths.length > 0 || Object.keys(children).length > 0) {
            res[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = new UrlSegmentGroup(paths, children);
        }
        return res;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseSegments = function () {
        var /** @type {?} */ path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        var /** @type {?} */ matrixParams = {};
        if (this.peekStartsWith(';')) {
            matrixParams = this.parseMatrixParams();
        }
        return new UrlSegment(decode(path), matrixParams);
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseQueryParams = function () {
        var /** @type {?} */ params = {};
        if (this.peekStartsWith('?')) {
            this.capture('?');
            this.parseQueryParam(params);
            while (this.remaining.length > 0 && this.peekStartsWith('&')) {
                this.capture('&');
                this.parseQueryParam(params);
            }
        }
        return params;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseFragment = function () {
        if (this.peekStartsWith('#')) {
            return decodeURI(this.remaining.substring(1));
        }
        return null;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseMatrixParams = function () {
        var /** @type {?} */ params = {};
        while (this.remaining.length > 0 && this.peekStartsWith(';')) {
            this.capture(';');
            this.parseParam(params);
        }
        return params;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseParam = function (params) {
        var /** @type {?} */ key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var /** @type {?} */ valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseQueryParam = function (params) {
        var /** @type {?} */ key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var /** @type {?} */ valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var /** @type {?} */ decodedKey = decode(key);
        var /** @type {?} */ decodedVal = decode(value);
        if (params.hasOwnProperty(decodedKey)) {
            // Append to existing values
            var /** @type {?} */ currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    /**
     * @param {?} allowPrimary
     * @return {?}
     */
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var /** @type {?} */ segments = {};
        this.capture('(');
        while (!this.peekStartsWith(')') && this.remaining.length > 0) {
            var /** @type {?} */ path = matchSegments(this.remaining);
            var /** @type {?} */ next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var /** @type {?} */ outletName = void 0;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */];
            }
            var /** @type {?} */ children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] :
                new UrlSegmentGroup([], children);
            if (this.peekStartsWith('//')) {
                this.capture('//');
            }
        }
        this.capture(')');
        return segments;
    };
    return UrlParser;
}());
function UrlParser_tsickle_Closure_declarations() {
    /** @type {?} */
    UrlParser.prototype.remaining;
    /** @type {?} */
    UrlParser.prototype.url;
}
//# sourceMappingURL=url_tree.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyRedirects;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_config_loader__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













var NoMatch = (function () {
    /**
     * @param {?=} segmentGroup
     */
    function NoMatch(segmentGroup) {
        if (segmentGroup === void 0) { segmentGroup = null; }
        this.segmentGroup = segmentGroup;
    }
    return NoMatch;
}());
function NoMatch_tsickle_Closure_declarations() {
    /** @type {?} */
    NoMatch.prototype.segmentGroup;
}
var AbsoluteRedirect = (function () {
    /**
     * @param {?} urlTree
     */
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
function AbsoluteRedirect_tsickle_Closure_declarations() {
    /** @type {?} */
    AbsoluteRedirect.prototype.urlTree;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function noMatch(segmentGroup) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
/**
 * @param {?} newTree
 * @return {?}
 */
function absoluteRedirect(newTree) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
/**
 * @param {?} redirectTo
 * @return {?}
 */
function namedOutletsRedirect(redirectTo) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
/**
 * @param {?} route
 * @return {?}
 */
function canLoadFails(route) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* NavigationCancelingError */]("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * @param {?} injector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} urlTree
 * @param {?} config
 * @return {?}
 */
function applyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = (function () {
    /**
     * @param {?} injector
     * @param {?} configLoader
     * @param {?} urlSerializer
     * @param {?} urlTree
     * @param {?} config
     */
    function ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
        this.injector = injector;
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
    }
    /**
     * @return {?}
     */
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]);
        var /** @type {?} */ urlTrees$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(urlTrees$, function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            else if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    ApplyRedirects.prototype.match = function (tree) {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.injector, this.config, tree.root, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]);
        var /** @type {?} */ mapped$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) {
            return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(mapped$, function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    /**
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
        var /** @type {?} */ root = rootCandidate.segments.length > 0 ?
            new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]] = rootCandidate, _a)) :
            rootCandidate;
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["e" /* UrlTree */](root, queryParams, fragment);
        var _a;
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentGroup = function (injector, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(this.expandChildren(injector, routes, segmentGroup), function (children) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], children); });
        }
        else {
            return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
        }
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    ApplyRedirects.prototype.expandChildren = function (injector, routes, segmentGroup) {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["h" /* waitForMap */])(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(injector, routes, child, childOutlet); });
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegment = function (injector, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        var /** @type {?} */ routes$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"].apply(void 0, routes);
        var /** @type {?} */ processedRoutes$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(routes$, function (r) {
            var /** @type {?} */ expanded$ = _this.expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(expanded$, function (e) {
                if (e instanceof NoMatch)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null);
                else
                    throw e;
            });
        });
        var /** @type {?} */ concattedProcessedRoutes$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__["concatAll"].call(processedRoutes$);
        var /** @type {?} */ first$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__["first"].call(concattedProcessedRoutes$, function (s) { return !!s; });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(first$, function (e, _) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__["EmptyError"]) {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {}));
                }
                else {
                    throw new NoMatch(segmentGroup);
                }
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet)
            return noMatch(segmentGroup);
        if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects))
            return noMatch(segmentGroup);
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
        }
        else {
            return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
        }
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(injector, routes, route, outlet);
        }
        else {
            return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
        }
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (injector, routes, route, outlet) {
        var _this = this;
        var /** @type {?} */ newTree = this.applyRedirectCommands([], route.redirectTo, {});
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
                var /** @type {?} */ group = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](newSegments, {});
                return _this.expandSegment(injector, group, routes, newSegments, outlet, false);
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var /** @type {?} */ newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, /** @type {?} */ (positionalParamSegments));
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
                return _this.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (injector, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(this.configLoader.load(injector, route.loadChildren), function (r) {
                    ((route))._loadedConfig = r;
                    return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segments, {});
                });
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segments, {}));
            }
        }
        else {
            var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments_1 = _a.consumedSegments, lastChild = _a.lastChild;
            if (!matched)
                return noMatch(rawSegmentGroup);
            var /** @type {?} */ rawSlicedSegments_1 = segments.slice(lastChild);
            var /** @type {?} */ childConfig$ = this.getChildConfig(injector, route);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(childConfig$, function (routerConfig) {
                var /** @type {?} */ childInjector = routerConfig.injector;
                var /** @type {?} */ childConfig = routerConfig.routes;
                var _a = split(rawSegmentGroup, consumedSegments_1, rawSlicedSegments_1, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                    var /** @type {?} */ expanded$ = _this.expandChildren(childInjector, childConfig, segmentGroup);
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (children) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1, children); });
                }
                else if (childConfig.length === 0 && slicedSegments.length === 0) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1, {}));
                }
                else {
                    var /** @type {?} */ expanded$ = _this.expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */], true);
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (cs) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1.concat(cs.segments), cs.children); });
                }
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} route
     * @return {?}
     */
    ApplyRedirects.prototype.getChildConfig = function (injector, route) {
        var _this = this;
        if (route.children) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["c" /* LoadedRouterConfig */](route.children, injector, null, null));
        }
        else if (route.loadChildren) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(runGuards(injector, route), function (shouldLoad) {
                if (shouldLoad) {
                    if (((route))._loadedConfig) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(((route))._loadedConfig);
                    }
                    else {
                        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(_this.configLoader.load(injector, route.loadChildren), function (r) {
                            ((route))._loadedConfig = r;
                            return r;
                        });
                    }
                }
                else {
                    return canLoadFails(route);
                }
            });
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["c" /* LoadedRouterConfig */]([], injector, null, null));
        }
    };
    /**
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
        var /** @type {?} */ res = [];
        var /** @type {?} */ c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(res);
            }
            else if (c.numberOfChildren > 1 || !c.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]]) {
                return namedOutletsRedirect(route.redirectTo);
            }
            else {
                c = c.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]];
            }
        }
    };
    /**
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
        var /** @type {?} */ t = this.urlSerializer.parse(redirectTo);
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    /**
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
        var /** @type {?} */ newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["e" /* UrlTree */](newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    /**
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
        var /** @type {?} */ res = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["d" /* forEach */])(redirectToParams, function (v, k) {
            if (v.startsWith(':')) {
                res[k] = actualParams[v.substring(1)];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    /**
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
        var _this = this;
        var /** @type {?} */ updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        var /** @type {?} */ children = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["d" /* forEach */])(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](updatedSegments, children);
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
        var /** @type {?} */ pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    /**
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
        var /** @type {?} */ idx = 0;
        for (var _i = 0, actualSegments_1 = actualSegments; _i < actualSegments_1.length; _i++) {
            var s = actualSegments_1[_i];
            if (s.path === redirectToUrlSegment.path) {
                actualSegments.splice(idx);
                return s;
            }
            idx++;
        }
        return redirectToUrlSegment;
    };
    return ApplyRedirects;
}());
function ApplyRedirects_tsickle_Closure_declarations() {
    /** @type {?} */
    ApplyRedirects.prototype.allowRedirects;
    /** @type {?} */
    ApplyRedirects.prototype.injector;
    /** @type {?} */
    ApplyRedirects.prototype.configLoader;
    /** @type {?} */
    ApplyRedirects.prototype.urlSerializer;
    /** @type {?} */
    ApplyRedirects.prototype.urlTree;
    /** @type {?} */
    ApplyRedirects.prototype.config;
}
/**
 * @param {?} injector
 * @param {?} route
 * @return {?}
 */
function runGuards(injector, route) {
    var /** @type {?} */ canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(true);
    var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__["from"])(canLoad), function (c) {
        var /** @type {?} */ guard = injector.get(c);
        if (guard.canLoad) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["b" /* wrapIntoObservable */])(guard.canLoad(route));
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["b" /* wrapIntoObservable */])(guard(route));
        }
    });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["g" /* andObservables */])(obs);
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    var /** @type {?} */ noMatch = { matched: false, consumedSegments: /** @type {?} */ ([]), lastChild: 0, positionalParamSegments: {} };
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        else {
            return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
    }
    var /** @type {?} */ matcher = route.matcher || __WEBPACK_IMPORTED_MODULE_10__shared__["c" /* defaultUrlMatcher */];
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res)
        return noMatch;
    return {
        matched: true,
        consumedSegments: res.consumed,
        lastChild: res.consumed.length,
        positionalParamSegments: res.posParams
    };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments, createChildrenForEmptySegments(config, new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    else if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    else {
        return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
    }
}
/**
 * @param {?} s
 * @return {?}
 */
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]]) {
        var /** @type {?} */ c = s.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]];
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](s.segments.concat(c.segments), c.children);
    }
    else {
        return s;
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {});
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["e" /* merge */])(children, res);
}
/**
 * @param {?} routes
 * @param {?} primarySegmentGroup
 * @return {?}
 */
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var /** @type {?} */ res = {};
    res[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]] = primarySegmentGroup;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]) {
            res[getOutlet(r)] = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {});
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes
        .filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r) &&
        getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]; })
        .length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
    return routes.filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r); }).length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathRedirect(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
        return false;
    return r.path === '' && r.redirectTo !== undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */];
}
//# sourceMappingURL=apply_redirects.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(34);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @param {?} config
 * @param {?=} parentPath
 * @return {?}
 */
function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var /** @type {?} */ i = 0; i < config.length; i++) {
        var /** @type {?} */ route = config[i];
        var /** @type {?} */ fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
/**
 * @param {?} route
 * @param {?} fullPath
 * @return {?}
 */
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n       \n      Example: \n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && (route.outlet && route.outlet !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */])) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        var /** @type {?} */ exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
/**
 * @param {?} parentPath
 * @param {?} currentRoute
 * @return {?}
 */
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouterState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_state__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tree__ = __webpack_require__(217);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createRouterState(routeReuseStrategy, curr, prevState) {
    var /** @type {?} */ root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new __WEBPACK_IMPORTED_MODULE_1__router_state__["c" /* RouterState */](root, curr);
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?=} prevState
 * @return {?}
 */
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        var /** @type {?} */ value = prevState.value;
        value._futureSnapshot = curr.value;
        var /** @type {?} */ children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new __WEBPACK_IMPORTED_MODULE_2__utils_tree__["b" /* TreeNode */](value, children);
    }
    else if (routeReuseStrategy.retrieve(curr.value)) {
        var /** @type {?} */ tree = ((routeReuseStrategy.retrieve(curr.value))).route;
        setFutureSnapshotsOfActivatedRoutes(curr, tree);
        return tree;
    }
    else {
        var /** @type {?} */ value = createActivatedRoute(curr.value);
        var /** @type {?} */ children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
        return new __WEBPACK_IMPORTED_MODULE_2__utils_tree__["b" /* TreeNode */](value, children);
    }
}
/**
 * @param {?} curr
 * @param {?} result
 * @return {?}
 */
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (var /** @type {?} */ i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map(function (child) {
        for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
            var p = _a[_i];
            if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    });
}
/**
 * @param {?} c
 * @return {?}
 */
function createActivatedRoute(c) {
    return new __WEBPACK_IMPORTED_MODULE_1__router_state__["a" /* ActivatedRoute */](new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.url), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.params), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.queryParams), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.fragment), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.data), c.outlet, c.component, c);
}
//# sourceMappingURL=create_router_state.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createUrlTree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @param {?} route
 * @param {?} urlTree
 * @param {?} commands
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    var /** @type {?} */ nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {}), urlTree, queryParams, fragment);
    }
    var /** @type {?} */ startingPosition = findStartingPosition(nav, urlTree, route);
    var /** @type {?} */ segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
/**
 * @param {?} command
 * @return {?}
 */
function isMatrixParams(command) {
    return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
/**
 * @param {?} oldSegmentGroup
 * @param {?} newSegmentGroup
 * @param {?} urlTree
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    if (urlTree.root === oldSegmentGroup) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["e" /* UrlTree */](newSegmentGroup, stringify(queryParams), fragment);
    }
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["e" /* UrlTree */](replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
}
/**
 * @param {?} current
 * @param {?} oldSegment
 * @param {?} newSegment
 * @return {?}
 */
function replaceSegment(current, oldSegment, newSegment) {
    var /** @type {?} */ children = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](current.segments, children);
}
var Navigation = (function () {
    /**
     * @param {?} isAbsolute
     * @param {?} numberOfDoubleDots
     * @param {?} commands
     */
    function Navigation(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c != null && c.outlets; });
        if (cmdWithOutlet && cmdWithOutlet !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["i" /* last */])(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    /**
     * @return {?}
     */
    Navigation.prototype.toRoot = function () {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    };
    return Navigation;
}());
function Navigation_tsickle_Closure_declarations() {
    /** @type {?} */
    Navigation.prototype.isAbsolute;
    /** @type {?} */
    Navigation.prototype.numberOfDoubleDots;
    /** @type {?} */
    Navigation.prototype.commands;
}
/**
 * Transforms commands to a normalized `Navigation`
 * @param {?} commands
 * @return {?}
 */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    var /** @type {?} */ numberOfDoubleDots = 0;
    var /** @type {?} */ isAbsolute = false;
    var /** @type {?} */ res = commands.reduce(function (res, cmd, cmdIdx) {
        if (typeof cmd === 'object' && cmd != null) {
            if (cmd.outlets) {
                var /** @type {?} */ outlets_1 = {};
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(cmd.outlets, function (commands, name) {
                    outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                });
                return res.concat([{ outlets: outlets_1 }]);
            }
            if (cmd.segmentPath) {
                return res.concat([cmd.segmentPath]);
            }
        }
        if (!(typeof cmd === 'string')) {
            return res.concat([cmd]);
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach(function (urlPart, partIndex) {
                if (partIndex == 0 && urlPart === '.') {
                }
                else if (partIndex == 0 && urlPart === '') {
                    isAbsolute = true;
                }
                else if (urlPart === '..') {
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            });
            return res;
        }
        return res.concat([cmd]);
    }, []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = (function () {
    /**
     * @param {?} segmentGroup
     * @param {?} processChildren
     * @param {?} index
     */
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.segmentGroup;
    /** @type {?} */
    Position.prototype.processChildren;
    /** @type {?} */
    Position.prototype.index;
}
/**
 * @param {?} nav
 * @param {?} tree
 * @param {?} route
 * @return {?}
 */
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    var /** @type {?} */ modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    var /** @type {?} */ index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
/**
 * @param {?} group
 * @param {?} index
 * @param {?} numberOfDoubleDots
 * @return {?}
 */
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    var /** @type {?} */ g = group;
    var /** @type {?} */ ci = index;
    var /** @type {?} */ dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = g.parent;
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
/**
 * @param {?} command
 * @return {?}
 */
function getPath(command) {
    if (typeof command === 'object' && command != null && command.outlets) {
        return command.outlets[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]];
    }
    return "" + command;
}
/**
 * @param {?} commands
 * @return {?}
 */
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = commands, _a);
    if (commands[0].outlets === undefined)
        return (_b = {}, _b[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = commands, _b);
    return commands[0].outlets;
    var _a, _b;
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    var /** @type {?} */ m = prefixedWith(segmentGroup, startIndex, commands);
    var /** @type {?} */ slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        var /** @type {?} */ g = new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] =
            new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, {});
    }
    else {
        var /** @type {?} */ outlets_2 = getOutlets(commands);
        var /** @type {?} */ children_1 = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(outlets_2, function (commands, outlet) {
            if (commands !== null) {
                children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(segmentGroup.children, function (child, childOutlet) {
            if (outlets_2[childOutlet] === undefined) {
                children_1[childOutlet] = child;
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, children_1);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function prefixedWith(segmentGroup, startIndex, commands) {
    var /** @type {?} */ currentCommandIndex = 0;
    var /** @type {?} */ currentPathIndex = startIndex;
    var /** @type {?} */ noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        var /** @type {?} */ path = segmentGroup.segments[currentPathIndex];
        var /** @type {?} */ curr = getPath(commands[currentCommandIndex]);
        var /** @type {?} */ next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    var /** @type {?} */ paths = segmentGroup.segments.slice(0, startIndex);
    var /** @type {?} */ i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            var /** @type {?} */ children = createNewSegmentChildren(commands[i].outlets);
            return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            var /** @type {?} */ p = segmentGroup.segments[startIndex];
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](p.path, commands[0]));
            i++;
            continue;
        }
        var /** @type {?} */ curr = getPath(commands[i]);
        var /** @type {?} */ next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](curr, {}));
            i++;
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](paths, {});
}
/**
 * @param {?} outlets
 * @return {?}
 */
function createNewSegmentChildren(outlets) {
    var /** @type {?} */ children = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {}), 0, commands);
        }
    });
    return children;
}
/**
 * @param {?} params
 * @return {?}
 */
function stringify(params) {
    var /** @type {?} */ res = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
/**
 * @param {?} path
 * @param {?} params
 * @param {?} segment
 * @return {?}
 */
function compare(path, params, segment) {
    return path == segment.path && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["c" /* shallowEqual */])(params, segment.parameters);
}
//# sourceMappingURL=create_url_tree.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_router_link__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_router_link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_router_link__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_router_link_active__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__directives_router_link_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_router_outlet__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_router_outlet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_reuse_strategy__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__route_reuse_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_module__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_outlet_map__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__router_outlet_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_preloader__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_state__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_9__shared__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__url_handling_strategy__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_10__url_handling_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__url_tree__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__version__ = __webpack_require__(661);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_12__version__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__private_export__ = __webpack_require__(657);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_13__private_export__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














//# sourceMappingURL=index.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __router_private__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_config_loader__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var /** @type {?} */ __router_private__ = {
    ROUTER_PROVIDERS: __WEBPACK_IMPORTED_MODULE_1__router_module__["e" /* ROUTER_PROVIDERS */],
    ROUTES: __WEBPACK_IMPORTED_MODULE_0__router_config_loader__["a" /* ROUTES */],
    flatten: __WEBPACK_IMPORTED_MODULE_2__utils_collection__["a" /* flatten */],
};
//# sourceMappingURL=private_export.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var /** @type {?} */ isPromise = __WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"].isPromise;
var /** @type {?} */ isObservable = __WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"].isObservable;
//# sourceMappingURL=private_import_core.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDOM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);

var /** @type {?} */ getDOM = __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["__platform_browser_private__"].getDOM;
//# sourceMappingURL=private_import_platform-browser.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = recognize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_state__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_collection__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_tree__ = __webpack_require__(217);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







var NoMatch = (function () {
    function NoMatch() {
    }
    return NoMatch;
}());
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} urlTree
 * @param {?} url
 * @return {?}
 */
function recognize(rootComponentType, config, urlTree, url) {
    return new Recognizer(rootComponentType, config, urlTree, url).recognize();
}
var Recognizer = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} config
     * @param {?} urlTree
     * @param {?} url
     */
    function Recognizer(rootComponentType, config, urlTree, url) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
    }
    /**
     * @return {?}
     */
    Recognizer.prototype.recognize = function () {
        try {
            var /** @type {?} */ rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
            var /** @type {?} */ children = this.processSegmentGroup(this.config, rootSegmentGroup, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]);
            var /** @type {?} */ root = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */]([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */], this.rootComponentType, null, this.urlTree.root, -1, {});
            var /** @type {?} */ rootNode = new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](root, children);
            var /** @type {?} */ routeState = new __WEBPACK_IMPORTED_MODULE_2__router_state__["d" /* RouterStateSnapshot */](this.url, rootNode);
            this.inheriteParamsAndData(routeState._root);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(routeState);
        }
        catch (e) {
            return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(e); });
        }
    };
    /**
     * @param {?} routeNode
     * @return {?}
     */
    Recognizer.prototype.inheriteParamsAndData = function (routeNode) {
        var _this = this;
        var /** @type {?} */ route = routeNode.value;
        var /** @type {?} */ i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_state__["g" /* inheritedParamsDataResolve */])(route);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheriteParamsAndData(n); });
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        else {
            return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
        }
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @return {?}
     */
    Recognizer.prototype.processChildren = function (config, segmentGroup) {
        var _this = this;
        var /** @type {?} */ children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__url_tree__["i" /* mapChildrenIntoArray */])(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
            var r = config_1[_i];
            try {
                return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
            }
            catch (e) {
                if (!(e instanceof NoMatch))
                    throw e;
            }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        else {
            throw new NoMatch();
        }
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} route
     * @param {?} rawSegment
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch();
        if ((route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]) !== outlet)
            throw new NoMatch();
        if (route.path === '**') {
            var /** @type {?} */ params = segments.length > 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["i" /* last */])(segments).parameters : {};
            var /** @type {?} */ snapshot_1 = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */](segments, params, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot_1, [])];
        }
        var _a = match(rawSegment, route, segments), consumedSegments = _a.consumedSegments, parameters = _a.parameters, lastChild = _a.lastChild;
        var /** @type {?} */ rawSlicedSegments = segments.slice(lastChild);
        var /** @type {?} */ childConfig = getChildConfig(route);
        var _b = split(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _b.segmentGroup, slicedSegments = _b.slicedSegments;
        var /** @type {?} */ snapshot = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */](consumedSegments, parameters, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            var /** @type {?} */ children = this.processChildren(childConfig, segmentGroup);
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, children)];
        }
        else if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, [])];
        }
        else {
            var /** @type {?} */ children = this.processSegment(childConfig, segmentGroup, slicedSegments, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]);
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, children)];
        }
    };
    return Recognizer;
}());
function Recognizer_tsickle_Closure_declarations() {
    /** @type {?} */
    Recognizer.prototype.rootComponentType;
    /** @type {?} */
    Recognizer.prototype.config;
    /** @type {?} */
    Recognizer.prototype.urlTree;
    /** @type {?} */
    Recognizer.prototype.url;
}
/**
 * @param {?} nodes
 * @return {?}
 */
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */])
            return -1;
        if (b.value.outlet === __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */])
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
/**
 * @param {?} route
 * @return {?}
 */
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    else if (route.loadChildren) {
        return ((route))._loadedConfig.routes;
    }
    else {
        return [];
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch();
        }
        else {
            return { consumedSegments: [], lastChild: 0, parameters: {} };
        }
    }
    var /** @type {?} */ matcher = route.matcher || __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* defaultUrlMatcher */];
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch();
    var /** @type {?} */ posParams = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["d" /* forEach */])(res.posParams, function (v, k) { posParams[k] = v.path; });
    var /** @type {?} */ parameters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["e" /* merge */])(posParams, res.consumed[res.consumed.length - 1].parameters);
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
/**
 * @param {?} nodes
 * @return {?}
 */
function checkOutletNameUniqueness(nodes) {
    var /** @type {?} */ names = {};
    nodes.forEach(function (n) {
        var /** @type {?} */ routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            var /** @type {?} */ p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            var /** @type {?} */ c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getSourceSegmentGroup(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getPathIndexShift(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    var /** @type {?} */ res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](slicedSegments, segmentGroup.children)));
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: [] };
    }
    else if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: slicedSegments };
    }
    else {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, segmentGroup.children);
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: slicedSegments };
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */]([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = segmentGroup.segments.length;
            res[getOutlet(r)] = s;
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["e" /* merge */])(children, res);
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} routes
 * @param {?} primarySegment
 * @return {?}
 */
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    var /** @type {?} */ res = {};
    res[__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]) {
            var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */]([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = consumedSegments.length;
            res[getOutlet(r)] = s;
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes
        .filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) &&
        getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]; })
        .length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); }).length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
        return false;
    return r.path === '' && r.redirectTo === undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */];
}
/**
 * @param {?} route
 * @return {?}
 */
function getData(route) {
    return route.data ? route.data : {};
}
/**
 * @param {?} route
 * @return {?}
 */
function getResolve(route) {
    return route.resolve ? route.resolve : {};
}
//# sourceMappingURL=recognize.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @stable
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('3.4.7');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const shared_service_1 = __webpack_require__(70);
const ng2_toastr_1 = __webpack_require__(242);
let AppComponent = class AppComponent {
    constructor(sharedService, toastr, vRef) {
        this.sharedService = sharedService;
        this.toastr = toastr;
        //Mettre le ViewContainerRef par défaut au toastr pour pouvoir l'utiliser depuis un service
        this.toastr.setRootViewContainerRef(vRef);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'odyssey-app',
        template: __webpack_require__(701)
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const router_1 = __webpack_require__(38);
const home_component_1 = __webpack_require__(345);
const user_list_component_1 = __webpack_require__(349);
const user_edit_component_1 = __webpack_require__(348);
const panel_list_component_1 = __webpack_require__(347);
const panel_edit_component_1 = __webpack_require__(346);
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'user', component: user_list_component_1.UserListComponent },
    { path: 'user/create', component: user_edit_component_1.UserEditComponent },
    { path: 'user/:id', component: user_edit_component_1.UserEditComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'panel', component: panel_list_component_1.PanelListComponent },
    { path: 'panel/create', component: panel_edit_component_1.PanelEditComponent },
    { path: 'panel/:id', component: panel_edit_component_1.PanelEditComponent },
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const global_1 = __webpack_require__(141);
let HeaderComponent = class HeaderComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() {
        this.user = this.globals.getCurrentUser();
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'odyssey-header',
        template: __webpack_require__(702)
    }),
    __metadata("design:paramtypes", [global_1.GlobalVariables])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(38);
let SidebarComponent = class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeIsActive(routePath) {
        return this.router.url == routePath;
    }
};
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'odyssey-sidebar',
        template: __webpack_require__(703)
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const platform_browser_dynamic_1 = __webpack_require__(163);
const boot_1 = __webpack_require__(547);
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(boot_1.AppModule);


/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Card {
    constructor(x, y, width, height, panelId, content) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.PanelId = panelId;
        if (content)
            this.Content = content;
    }
}
exports.Card = Card;


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Panel {
    constructor() {
        this.CreatedOn = (new Date).toISOString();
        this.LastModified = this.CreatedOn;
        this.Cards = new Array();
    }
}
exports.Panel = Panel;


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class User {
    constructor() { }
}
exports.User = User;


/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let GridStackDirective = class GridStackDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack");
    }
    ngOnInit() {
        let renderer = this.renderer;
        let nativeElement = this.el.nativeElement;
        let animate = this.animate ? "yes" : "no";
        renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
        if (animate == "yes") {
            renderer.setElementAttribute(nativeElement, "data-gs-animate", animate);
        }
        let options = {
            cellHeight: 80,
            verticalMargin: 10
        };
        // TODO: listen to an event here instead of just waiting for the time to expire
        setTimeout(function () {
            $(nativeElement).gridstack(options);
        }, 30);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackDirective.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackDirective.prototype, "animate", void 0);
GridStackDirective = __decorate([
    core_1.Directive({
        selector: '[gridStack]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], GridStackDirective);
exports.GridStackDirective = GridStackDirective;


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let GridStackItemDirective = class GridStackItemDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack-item");
    }
    ngOnInit() {
        let renderer = this.renderer;
        let nativeElement = this.el.nativeElement;
        let cannotResize = this.canResize ? "yes" : "no";
        let elementText = '<div class="grid-stack-item-content">' + nativeElement.innerHTML + '</div>';
        // TODO: Find the Angular(tm) way to do this ...
        nativeElement.innerHTML = elementText;
        renderer.setElementAttribute(nativeElement, "data-gs-x", String(this.x));
        renderer.setElementAttribute(nativeElement, "data-gs-y", String(this.y));
        renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
        renderer.setElementAttribute(nativeElement, "data-gs-height", String(this.h));
        if (this.minWidth) {
            renderer.setElementAttribute(nativeElement, "data-gs-min-width", String(this.minWidth));
        }
        if (cannotResize == "yes") {
            renderer.setElementAttribute(nativeElement, "data-gs-no-resize", cannotResize);
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "x", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "y", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "h", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "minWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackItemDirective.prototype, "canResize", void 0);
GridStackItemDirective = __decorate([
    core_1.Directive({
        selector: '[gridStackItem]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], GridStackItemDirective);
exports.GridStackItemDirective = GridStackItemDirective;


/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(36);
const forms_1 = __webpack_require__(20);
const http_1 = __webpack_require__(52);
const panel_list_component_1 = __webpack_require__(347);
const panel_edit_component_1 = __webpack_require__(346);
const panel_service_1 = __webpack_require__(218);
const global_1 = __webpack_require__(141);
const router_1 = __webpack_require__(38);
const ng2_table_1 = __webpack_require__(162);
const ng2_bootstrap_1 = __webpack_require__(161);
const gridstack_directive_1 = __webpack_require__(670);
const gridstack_item_directive_1 = __webpack_require__(671);
let PanelModule = class PanelModule {
};
PanelModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot()
        ],
        declarations: [
            panel_list_component_1.PanelListComponent,
            panel_edit_component_1.PanelEditComponent,
            gridstack_directive_1.GridStackDirective,
            gridstack_item_directive_1.GridStackItemDirective
        ],
        providers: [
            panel_service_1.PanelService,
            global_1.GlobalVariables
        ]
    })
], PanelModule);
exports.PanelModule = PanelModule;


/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(36);
const forms_1 = __webpack_require__(20);
const http_1 = __webpack_require__(52);
const user_edit_component_1 = __webpack_require__(348);
const user_list_component_1 = __webpack_require__(349);
const user_service_1 = __webpack_require__(219);
const global_1 = __webpack_require__(141);
const router_1 = __webpack_require__(38);
const ng2_table_1 = __webpack_require__(162);
const ng2_bootstrap_1 = __webpack_require__(161);
let UserModule = class UserModule {
};
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot()
        ],
        declarations: [
            user_edit_component_1.UserEditComponent,
            user_list_component_1.UserListComponent,
        ],
        providers: [
            user_service_1.UserService,
            global_1.GlobalVariables
        ]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(968) !== null) && (__webpack_require__(969) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RouterState; });
/* harmony export (immutable) */ __webpack_exports__["e"] = createEmptyState;
/* unused harmony export createEmptyStateSnapshot */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatedRoute; });
/* harmony export (immutable) */ __webpack_exports__["g"] = inheritedParamsDataResolve;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActivatedRouteSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RouterStateSnapshot; });
/* harmony export (immutable) */ __webpack_exports__["h"] = advanceActivatedRoute;
/* harmony export (immutable) */ __webpack_exports__["f"] = equalParamsAndUrlSegments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_collection__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_tree__ = __webpack_require__(217);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * \@whatItDoes Represents the state of the router.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@description
 * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
 * segments,
 * the extracted parameters, and the resolved data.
 *
 * See {\@link ActivatedRoute} for more information.
 *
 * \@stable
 */
var RouterState = (function (_super) {
    __extends(RouterState, _super);
    /**
     * \@internal
     * @param {?} root
     * @param {?} snapshot
     */
    function RouterState(root, snapshot) {
        _super.call(this, root);
        this.snapshot = snapshot;
        setRouterStateSnapshot(this, root);
    }
    /**
     * @return {?}
     */
    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
    return RouterState;
}(__WEBPACK_IMPORTED_MODULE_4__utils_tree__["a" /* Tree */]));
function RouterState_tsickle_Closure_declarations() {
    /**
     * The current snapshot of the router state
     * @type {?}
     */
    RouterState.prototype.snapshot;
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyState(urlTree, rootComponent) {
    var /** @type {?} */ snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    var /** @type {?} */ emptyUrl = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]([new __WEBPACK_IMPORTED_MODULE_2__url_tree__["b" /* UrlSegment */]('', {})]);
    var /** @type {?} */ emptyParams = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyData = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyQueryParams = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ fragment = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    var /** @type {?} */ activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* PRIMARY_OUTLET */], rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new __WEBPACK_IMPORTED_MODULE_4__utils_tree__["b" /* TreeNode */](activated, []), snapshot);
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyStateSnapshot(urlTree, rootComponent) {
    var /** @type {?} */ emptyParams = {};
    var /** @type {?} */ emptyData = {};
    var /** @type {?} */ emptyQueryParams = {};
    var /** @type {?} */ fragment = '';
    var /** @type {?} */ activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* PRIMARY_OUTLET */], rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new __WEBPACK_IMPORTED_MODULE_4__utils_tree__["b" /* TreeNode */](activated, []));
}
/**
 * \@whatItDoes Contains the information about a route associated with a component loaded in an
 * outlet.
 * An `ActivatedRoute` can also be used to traverse the router state tree.
 *
 * \@howToUse
 *
 * ```
 * \@Component({...})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const url: Observable<string> = route.url.map(segments => segments.join(''));
 *     // route.data includes both `data` and `resolve`
 *     const user = route.data.map(d => d.user);
 *   }
 * }
 * ```
 *
 * \@stable
 */
var ActivatedRoute = (function () {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} futureSnapshot
     */
    function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        /**
         * The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        /**
         * The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        /**
         * The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRoute.prototype.toString = function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
function ActivatedRoute_tsickle_Closure_declarations() {
    /**
     * The current snapshot of this route
     * @type {?}
     */
    ActivatedRoute.prototype.snapshot;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._futureSnapshot;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._routerState;
    /**
     * An observable of the URL segments matched by this route
     * @type {?}
     */
    ActivatedRoute.prototype.url;
    /**
     * An observable of the matrix parameters scoped to this route
     * @type {?}
     */
    ActivatedRoute.prototype.params;
    /**
     * An observable of the query parameters shared by all the routes
     * @type {?}
     */
    ActivatedRoute.prototype.queryParams;
    /**
     * An observable of the URL fragment shared by all the routes
     * @type {?}
     */
    ActivatedRoute.prototype.fragment;
    /**
     * An observable of the static and resolved data of this route.
     * @type {?}
     */
    ActivatedRoute.prototype.data;
    /**
     * The outlet name of the route. It's a constant
     * @type {?}
     */
    ActivatedRoute.prototype.outlet;
    /** @type {?} */
    ActivatedRoute.prototype.component;
}
/**
 * \@internal
 * @param {?} route
 * @return {?}
 */
function inheritedParamsDataResolve(route) {
    var /** @type {?} */ pathToRoot = route.pathFromRoot;
    var /** @type {?} */ inhertingStartingFrom = pathToRoot.length - 1;
    while (inhertingStartingFrom >= 1) {
        var /** @type {?} */ current = pathToRoot[inhertingStartingFrom];
        var /** @type {?} */ parent_1 = pathToRoot[inhertingStartingFrom - 1];
        // current route is an empty path => inherits its parent's params and data
        if (current.routeConfig && current.routeConfig.path === '') {
            inhertingStartingFrom--;
        }
        else if (!parent_1.component) {
            inhertingStartingFrom--;
        }
        else {
            break;
        }
    }
    return pathToRoot.slice(inhertingStartingFrom).reduce(function (res, curr) {
        var /** @type {?} */ params = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.params, curr.params);
        var /** @type {?} */ data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.data, curr.data);
        var /** @type {?} */ resolve = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.resolve, curr._resolvedData);
        return { params: params, data: data, resolve: resolve };
    }, /** @type {?} */ ({ params: {}, data: {}, resolve: {} }));
}
/**
 * \@whatItDoes Contains the information about a route associated with a component loaded in an
 * outlet
 * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
 * state tree.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * \@stable
 */
var ActivatedRouteSnapshot = (function () {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} routeConfig
     * @param {?} urlSegment
     * @param {?} lastPathIndex
     * @param {?} resolve
     */
    function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
        /**
         * The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        /**
         * The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        /**
         * The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRouteSnapshot.prototype.toString = function () {
        var /** @type {?} */ url = this.url.map(function (segment) { return segment.toString(); }).join('/');
        var /** @type {?} */ matched = this._routeConfig ? this._routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
function ActivatedRouteSnapshot_tsickle_Closure_declarations() {
    /**
     * \@internal *
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._routeConfig;
    /**
     * \@internal *
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._urlSegment;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._lastPathIndex;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._resolve;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._resolvedData;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._routerState;
    /**
     * The URL segments matched by this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.url;
    /**
     * The matrix parameters scoped to this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.params;
    /**
     * The query parameters shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.queryParams;
    /**
     * The URL fragment shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.fragment;
    /**
     * The static and resolved data of this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.data;
    /**
     * The outlet name of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.outlet;
    /**
     * The component of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.component;
}
/**
 * \@whatItDoes Represents the state of the router at a moment in time.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@description
 * RouterStateSnapshot is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * \@stable
 */
var RouterStateSnapshot = (function (_super) {
    __extends(RouterStateSnapshot, _super);
    /**
     * \@internal
     * @param {?} url
     * @param {?} root
     */
    function RouterStateSnapshot(url, root) {
        _super.call(this, root);
        this.url = url;
        setRouterStateSnapshot(this, root);
    }
    /**
     * @return {?}
     */
    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(__WEBPACK_IMPORTED_MODULE_4__utils_tree__["a" /* Tree */]));
function RouterStateSnapshot_tsickle_Closure_declarations() {
    /**
     * The url from which this snapshot was created
     * @type {?}
     */
    RouterStateSnapshot.prototype.url;
}
/**
 * @param {?} state
 * @param {?} node
 * @return {?}
 */
function setRouterStateSnapshot(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterStateSnapshot(state, c); });
}
/**
 * @param {?} node
 * @return {?}
 */
function serializeNode(node) {
    var /** @type {?} */ c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
    return "" + node.value + c;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 * @param {?} route
 * @return {?}
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        var /** @type {?} */ currentSnapshot = route.snapshot;
        route.snapshot = route._futureSnapshot;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(currentSnapshot.queryParams, route._futureSnapshot.queryParams)) {
            ((route.queryParams)).next(route._futureSnapshot.queryParams);
        }
        if (currentSnapshot.fragment !== route._futureSnapshot.fragment) {
            ((route.fragment)).next(route._futureSnapshot.fragment);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(currentSnapshot.params, route._futureSnapshot.params)) {
            ((route.params)).next(route._futureSnapshot.params);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["f" /* shallowEqualArrays */])(currentSnapshot.url, route._futureSnapshot.url)) {
            ((route.url)).next(route._futureSnapshot.url);
        }
        if (!equalParamsAndUrlSegments(currentSnapshot, route._futureSnapshot)) {
            ((route.data)).next(route._futureSnapshot.data);
        }
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        ((route.data)).next(route._futureSnapshot.data);
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalParamsAndUrlSegments(a, b) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(a.params, b.params) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__url_tree__["f" /* equalSegments */])(a.url, b.url);
}
//# sourceMappingURL=router_state.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const ng2_toastr_1 = __webpack_require__(242);
let SharedService = class SharedService {
    constructor(toastr) {
        this.toastr = toastr;
        //Data grid
        this.pageSize = 10;
        this.loading = false;
    }
    startLoading() {
        this.loading = true;
    }
    endLoading() {
        this.loading = false;
    }
    //Toastr
    successToast(txt, title) {
        this.toastr.success(txt, title);
    }
    errorToast(txt, title) {
        this.toastr.error(txt, title);
    }
    warningToast(txt, title) {
        this.toastr.warning(txt, title);
    }
    infoToast(txt, title) {
        this.toastr.info(txt, title);
    }
    customToast(html) {
        this.toastr.custom(html, null, { enabltHTML: true });
    }
};
SharedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager])
], SharedService);
exports.SharedService = SharedService;


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var toast_container_component_1 = __webpack_require__(243);
var toast_manager_1 = __webpack_require__(510);
var toast_options_1 = __webpack_require__(151);
var ToastModule = (function () {
    function ToastModule() {
    }
    ToastModule.forRoot = function (config) {
        return {
            ngModule: ToastModule,
            providers: config ? [
                { provide: toast_options_1.ToastOptions, useValue: config },
                toast_manager_1.ToastsManager,
            ] : [toast_manager_1.ToastsManager],
        };
    };
    ToastModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [toast_container_component_1.ToastContainer],
                    exports: [toast_container_component_1.ToastContainer],
                    entryComponents: [toast_container_component_1.ToastContainer]
                },] },
    ];
    /** @nocollapse */
    ToastModule.ctorParameters = function () { return []; };
    return ToastModule;
}());
exports.ToastModule = ToastModule;
//# sourceMappingURL=toast.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<odyssey-header></odyssey-header>\r\n<odyssey-sidebar></odyssey-sidebar>\r\n<div id=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"loading-overlay\" *ngIf=\"sharedService.loading\">\r\n    <div class=\"loading-background\"></div>\r\n    <div class=\"progress progress-sm active\">\r\n        <div class=\"progress-bar progress-bar-primary progress-bar-striped\" role=\"progressbar\" style=\"width: 100%\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Angular Odyssey</a>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<aside id=\"sidebar\">\r\n    <ul class=\"nav nav-pills nav-stacked\">\r\n        <li [class.active]=\"routeIsActive('/home')\">\r\n            <a [routerLink]=\"['/home']\">\r\n                <i class=\"fa fa-home\"></i> <span>Accueil</span>\r\n            </a>\r\n        </li>\r\n        <li [class.active]=\"routeIsActive('/user')\">\r\n            <a [routerLink]=\"['/user']\">\r\n                <i class=\"fa fa-users\"></i> <span>Gestion des utilisateurs</span>\r\n            </a>\r\n        </li>\r\n        <li [class.active]=\"routeIsActive('/panel')\">\r\n            <a [routerLink]=\"['/panel']\">\r\n                <i class=\"fa fa-calendar-o\"></i> <span>Gestion des panneaux</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</aside>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n    <h1>Accueil</h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-home\"></i> Accueil\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <div class=\"box box-primary\">\r\n\r\n        <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">{{title}}</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            ...\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content-header\">\r\n    <h1>{{titre}}</h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li>\r\n            <a href=\"#\">\r\n                Administration\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                {{titre}}\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <form (ngSubmit)=\"onSubmit()\" #utilisateurForm=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n            <label for=\"Title\">Titre du panneau</label>\r\n            <input id=\"Title\"\r\n                   name=\"Title\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   required\r\n                   [(ngModel)]=\"panel.Title\"\r\n                   #titleControl=\"ngModel\"\r\n                   autocomplete=\"off\">\r\n            <span [hidden]=\"titleControl.valid\" class=\"text-danger\">Vous devez entrer un titre !</span>\r\n        </div>\r\n\r\n        <div gridStack  w=\"12\" animate=\"true\"> </div>\r\n\r\n        <br />\r\n        <button type=\"submit\" class=\"btn btn-default\">Enregistrer</button>\r\n    </form>\r\n    <button class=\"btn btn-default\" (click)=\"addCard()\">Ajouter une carte</button>\r\n    <button class=\"btn btn-default\" (click)=\"deletePanel()\">Supprimer le panneau</button>\r\n\r\n</section>"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n    <h1>Gestion des panneaux</h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li>\r\n            <a [routerLink]=\"['/home']\">\r\n                <i class=\"fa fa-home\"></i> Accueil\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a [routerLink]=\"['/panel']\">\r\n                <i class=\"fa fa-calendar-o\"></i> Panneaux\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</section>\r\n<section>\r\n\r\n    <!-- Filtrer toutes les colonnes -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <input placeholder=\"Rechercher parmi toutes les colonnes\"\r\n                   class=\"form-control\"\r\n                   [(ngModel)]=\"config.filtering.filterString\"\r\n                   (keyup.enter)=\"loadItems()\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!-- Table -->\r\n            <ng-table [config]=\"config\"\r\n                      (tableChanged)=\"onChangeTable(config)\"\r\n                      (cellClicked)=\"onCellClick($event)\"\r\n                      [rows]=\"rows\" [columns]=\"columns\">\r\n            </ng-table>\r\n            <!-- Pagination -->\r\n            <pagination *ngIf=\"!noResult\"\r\n                        class=\"pagination-sm\"\r\n                        [(ngModel)]=\"page\"\r\n                        [totalItems]=\"length\"\r\n                        [itemsPerPage]=\"itemsPerPage\"\r\n                        [maxSize]=\"maxSize\"\r\n                        [boundaryLinks]=\"true\"\r\n                        [rotate]=\"false\"\r\n                        (pageChanged)=\"onChangeTable(config,$event)\"\r\n                        (numPages)=\"numPages = $event\">\r\n            </pagination>\r\n            <pre *ngIf=\"!noResult\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\r\n\r\n            <div *ngIf=\"noResult\">\r\n                No result\r\n            </div>\r\n\r\n            <button [routerLink]=\"['/panel/create']\">Créer un nouveau panneau</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>{{titre}}</h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li>\r\n            <a href=\"#\">\r\n                Administration\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                {{titre}}\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <form (ngSubmit)=\"onSubmit()\" #utilisateurForm=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n            <label for=\"Nom\">Nom d'utilisateur</label>\r\n            <input id=\"UserName\"\r\n                   name=\"UserName\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   required\r\n                   [(ngModel)]=\"user.UserName\"\r\n                   #userNameControl=\"ngModel\"\r\n                   autocomplete=\"off\">\r\n            <span [hidden]=\"userNameControl.valid\" class=\"text-danger\">Vous devez entrer un nom !</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Nom\">Mot de passe</label>\r\n            <input id=\"Password\"\r\n                   name=\"Password\"\r\n                   type=\"password\"\r\n                   placeholder=\"{{isNew ? 'Saisissez le mot de passe': 'Laissez vide pour ne pas modifier le mot de passe'}}\"\r\n                   [attr.required]=\"isNew ? isNew : undefined\"\r\n                   class=\"form-control\"\r\n                   [(ngModel)]=\"Password\"\r\n                   #userNameControl=\"ngModel\"\r\n                   autocomplete=\"new-password\">\r\n            <span [hidden]=\"Password.valid\" class=\"text-danger\">Vous devez saisir un mot de passe !</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Nom\">Mail</label>\r\n            <input id=\"Email\"\r\n                   name=\"Email\"\r\n                   type=\"email\"\r\n                   class=\"form-control\"\r\n                   required\r\n                   [(ngModel)]=\"user.Email\"\r\n                   #emailControl=\"ngModel\">\r\n            <span [hidden]=\"emailControl.valid\" class=\"text-danger\">Vous devez entrer un mail valide !</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"PhoneNumber\">Téléphone</label>\r\n            <input id=\"PhoneNumber\"\r\n                   name=\"PhoneNumber\"\r\n                   type=\"tel\"\r\n                   class=\"form-control\"\r\n                   [(ngModel)]=\"user.PhoneNumber\"\r\n                   #phoneNumberControl=\"ngModel\">\r\n            <span [hidden]=\"phoneNumberControl.valid\" class=\"text-danger\">Vous devez entrer un numéro de téléphone valide</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default\">Enregistrer</button>\r\n    </form>\r\n\r\n</section>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n    <h1>Gestion des utilisateurs</h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li>\r\n            <a [routerLink]=\"['/home']\">\r\n                <i class=\"fa fa-home\"></i> Accueil\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a [routerLink]=\"['/user']\">\r\n                <i class=\"fa fa-users\"></i> Utilisateurs\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</section>\r\n<section>\r\n\r\n    <!-- Filtrer toutes les colonnes -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <input placeholder=\"Rechercher parmi toutes les colonnes\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"config.filtering.filterString\"\r\n                    (keyup.enter)=\"loadItems()\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!-- Table -->\r\n            <ng-table [config]=\"config\"\r\n                        (tableChanged)=\"onChangeTable(config)\"\r\n                        (cellClicked)=\"onCellClick($event)\"\r\n                        [rows]=\"rows\" [columns]=\"columns\">\r\n            </ng-table>\r\n            <!-- Pagination -->\r\n            <pagination *ngIf=\"!noResult\"\r\n                        class=\"pagination-sm\"\r\n                        [(ngModel)]=\"page\"\r\n                        [totalItems]=\"length\"\r\n                        [itemsPerPage]=\"itemsPerPage\"\r\n                        [maxSize]=\"maxSize\"\r\n                        [boundaryLinks]=\"true\"\r\n                        [rotate]=\"false\"\r\n                        (pageChanged)=\"onChangeTable(config,$event)\"\r\n                        (numPages)=\"numPages = $event\">\r\n            </pagination>\r\n            <pre *ngIf=\"!noResult\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\r\n\r\n            <div *ngIf=\"noResult\">\r\n                No result\r\n            </div>\r\n\r\n            <button (click)=\"exportCsv()\">Export CSV</button>\r\n            <button (click)=\"exportXlsx()\">Export XLSX</button>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavigationStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavigationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RoutesRecognized; });
/* unused harmony export DefaultRouteReuseStrategy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Router; });
/* unused harmony export PreActivation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__apply_redirects__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_router_state__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_url_tree__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recognize__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__router_config_loader__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__router_state__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__url_handling_strategy__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__url_tree__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */























/**
 * \@whatItDoes Represents an event triggered when a navigation starts.
 *
 * \@stable
 */
var NavigationStart = (function () {
    /**
     * @param {?} id
     * @param {?} url
     */
    function NavigationStart(id, url) {
        this.id = id;
        this.url = url;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}());
function NavigationStart_tsickle_Closure_declarations() {
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationStart.prototype.id;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationStart.prototype.url;
}
/**
 * \@whatItDoes Represents an event triggered when a navigation ends successfully.
 *
 * \@stable
 */
var NavigationEnd = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     */
    function NavigationEnd(id, url, urlAfterRedirects) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}());
function NavigationEnd_tsickle_Closure_declarations() {
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationEnd.prototype.id;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationEnd.prototype.url;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationEnd.prototype.urlAfterRedirects;
}
/**
 * \@whatItDoes Represents an event triggered when a navigation is canceled.
 *
 * \@stable
 */
var NavigationCancel = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} reason
     */
    function NavigationCancel(id, url, reason) {
        this.id = id;
        this.url = url;
        this.reason = reason;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}());
function NavigationCancel_tsickle_Closure_declarations() {
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationCancel.prototype.id;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationCancel.prototype.url;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationCancel.prototype.reason;
}
/**
 * \@whatItDoes Represents an event triggered when a navigation fails due to an unexpected error.
 *
 * \@stable
 */
var NavigationError = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} error
     */
    function NavigationError(id, url, error) {
        this.id = id;
        this.url = url;
        this.error = error;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}());
function NavigationError_tsickle_Closure_declarations() {
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationError.prototype.id;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationError.prototype.url;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    NavigationError.prototype.error;
}
/**
 * \@whatItDoes Represents an event triggered when routes are recognized.
 *
 * \@stable
 */
var RoutesRecognized = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function RoutesRecognized(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}());
function RoutesRecognized_tsickle_Closure_declarations() {
    /**
     * \@docsNotRequired
     * @type {?}
     */
    RoutesRecognized.prototype.id;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    RoutesRecognized.prototype.url;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    RoutesRecognized.prototype.urlAfterRedirects;
    /**
     * \@docsNotRequired
     * @type {?}
     */
    RoutesRecognized.prototype.state;
}
/**
 * @param {?} error
 * @return {?}
 */
function defaultErrorHandler(error) {
    throw error;
}
/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
var DefaultRouteReuseStrategy = (function () {
    function DefaultRouteReuseStrategy() {
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldDetach = function (route) { return false; };
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.store = function (route, detachedTree) { };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldAttach = function (route) { return false; };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.retrieve = function (route) { return null; };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return DefaultRouteReuseStrategy;
}());
/**
 * \@whatItDoes Provides the navigation and url manipulation capabilities.
 *
 * See {\@link Routes} for more details and examples.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var Router = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} urlSerializer
     * @param {?} outletMap
     * @param {?} location
     * @param {?} injector
     * @param {?} loader
     * @param {?} compiler
     * @param {?} config
     */
    function Router(rootComponentType, urlSerializer, outletMap, location, injector, loader, compiler, config) {
        this.rootComponentType = rootComponentType;
        this.urlSerializer = urlSerializer;
        this.outletMap = outletMap;
        this.location = location;
        this.injector = injector;
        this.config = config;
        this.navigations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.routerEvents = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.navigationId = 0;
        /**
         * Error handler that is invoked when a navigation errors.
         *
         * See {@link ErrorHandler} for more information.
         */
        this.errorHandler = defaultErrorHandler;
        /**
         * Indicates if at least one navigation happened.
         */
        this.navigated = false;
        /**
         * Extracts and merges URLs. Used for Angular 1 to Angular 2 migrations.
         */
        this.urlHandlingStrategy = new __WEBPACK_IMPORTED_MODULE_20__url_handling_strategy__["b" /* DefaultUrlHandlingStrategy */]();
        this.routeReuseStrategy = new DefaultRouteReuseStrategy();
        this.resetConfig(config);
        this.currentUrlTree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["g" /* createEmptyUrlTree */])();
        this.rawUrlTree = this.currentUrlTree;
        this.configLoader = new __WEBPACK_IMPORTED_MODULE_16__router_config_loader__["b" /* RouterConfigLoader */](loader, compiler);
        this.currentRouterState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["e" /* createEmptyState */])(this.currentUrlTree, this.rootComponentType);
        this.processNavigations();
    }
    /**
     * \@internal
     * TODO: this should be removed once the constructor of the router made internal
     * @param {?} rootComponentType
     * @return {?}
     */
    Router.prototype.resetRootComponentType = function (rootComponentType) {
        this.rootComponentType = rootComponentType;
        // TODO: vsavkin router 4.0 should make the root component set to null
        // this will simplify the lifecycle of the router.
        this.currentRouterState.root.component = this.rootComponentType;
    };
    /**
     * Sets up the location change listener and performs the initial navigation.
     * @return {?}
     */
    Router.prototype.initialNavigation = function () {
        this.setUpLocationChangeListener();
        if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
        }
    };
    /**
     * Sets up the location change listener.
     * @return {?}
     */
    Router.prototype.setUpLocationChangeListener = function () {
        var _this = this;
        // Zone.current.wrap is needed because of the issue with RxJS scheduler,
        // which does not work properly with zone.js in IE and Safari
        if (!this.locationSubscription) {
            this.locationSubscription = (this.location.subscribe(Zone.current.wrap(function (change) {
                var /** @type {?} */ rawUrlTree = _this.urlSerializer.parse(change['url']);
                var /** @type {?} */ source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                setTimeout(function () { _this.scheduleNavigation(rawUrlTree, source, { replaceUrl: true }); }, 0);
            })));
        }
    };
    Object.defineProperty(Router.prototype, "routerState", {
        /**
         * The current route state
         * @return {?}
         */
        get: function () { return this.currentRouterState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "url", {
        /**
         * The current url
         * @return {?}
         */
        get: function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "events", {
        /**
         * An observable of router events
         * @return {?}
         */
        get: function () { return this.routerEvents; },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * ### Usage
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     * @param {?} config
     * @return {?}
     */
    Router.prototype.resetConfig = function (config) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* validateConfig */])(config);
        this.config = config;
    };
    /**
     * \@docsNotRequired
     * @return {?}
     */
    Router.prototype.ngOnDestroy = function () { this.dispose(); };
    /**
     * Disposes of the router
     * @return {?}
     */
    Router.prototype.dispose = function () {
        if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = null;
        }
    };
    /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * ### Usage
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     * @param {?} commands
     * @param {?=} __1
     * @return {?}
     */
    Router.prototype.createUrlTree = function (commands, _a) {
        var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment, preserveQueryParams = _b.preserveQueryParams, preserveFragment = _b.preserveFragment;
        var /** @type {?} */ a = relativeTo || this.routerState.root;
        var /** @type {?} */ q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
        var /** @type {?} */ f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__create_url_tree__["a" /* createUrlTree */])(a, this.currentUrlTree, commands, q, f);
    };
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * In opposite to `navigate`, `navigateByUrl` takes a whole URL
     * and does not apply any delta to the current one.
     * @param {?} url
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigateByUrl = function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_21__url_tree__["e" /* UrlTree */]) {
            return this.scheduleNavigation(this.urlHandlingStrategy.merge(url, this.rawUrlTree), 'imperative', extras);
        }
        var /** @type {?} */ urlTree = this.urlSerializer.parse(url);
        return this.scheduleNavigation(this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree), 'imperative', extras);
    };
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * In opposite to `navigateByUrl`, `navigate` always takes a delta that is applied to the current
     * URL.
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigate = function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        validateCommands(commands);
        if (typeof extras.queryParams === 'object' && extras.queryParams !== null) {
            extras.queryParams = this.removeEmptyProps(extras.queryParams);
        }
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    };
    /**
     * Serializes a {\@link UrlTree} into a string
     * @param {?} url
     * @return {?}
     */
    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
    /**
     * Parses a string into a {\@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
    /**
     * Returns whether the url is activated
     * @param {?} url
     * @param {?} exact
     * @return {?}
     */
    Router.prototype.isActive = function (url, exact) {
        if (url instanceof __WEBPACK_IMPORTED_MODULE_21__url_tree__["e" /* UrlTree */]) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["h" /* containsTree */])(this.currentUrlTree, url, exact);
        }
        else {
            var /** @type {?} */ urlTree = this.urlSerializer.parse(url);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["h" /* containsTree */])(this.currentUrlTree, urlTree, exact);
        }
    };
    /**
     * @param {?} params
     * @return {?}
     */
    Router.prototype.removeEmptyProps = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var /** @type {?} */ value = params[key];
            if (value !== null && value !== undefined) {
                result[key] = value;
            }
            return result;
        }, {});
    };
    /**
     * @return {?}
     */
    Router.prototype.processNavigations = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["concatMap"]
            .call(this.navigations, function (nav) {
            if (nav) {
                _this.executeScheduledNavigation(nav);
                // a failed navigation should not stop the router from processing
                // further navigations => the catch
                return nav.promise.catch(function () { });
            }
            else {
                return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null));
            }
        })
            .subscribe(function () { });
    };
    /**
     * @param {?} rawUrl
     * @param {?} source
     * @param {?} extras
     * @return {?}
     */
    Router.prototype.scheduleNavigation = function (rawUrl, source, extras) {
        var /** @type {?} */ lastNavigation = this.navigations.value;
        // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
        // and that navigation results in 'replaceState' that leads to the same URL,
        // we should skip those.
        if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return null; // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange)
        // every single time. The second one should be ignored. Otherwise, the URL will flicker.
        if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return null; // return value is not used
        }
        var /** @type {?} */ resolve = null;
        var /** @type {?} */ reject = null;
        var /** @type {?} */ promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var /** @type {?} */ id = ++this.navigationId;
        this.navigations.next({ id: id, source: source, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
        // Make sure that the error is propagated even though `processNavigations` catch
        // handler does not rethrow
        return promise.catch(function (e) { return Promise.reject(e); });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    Router.prototype.executeScheduledNavigation = function (_a) {
        var _this = this;
        var id = _a.id, rawUrl = _a.rawUrl, extras = _a.extras, resolve = _a.resolve, reject = _a.reject;
        var /** @type {?} */ url = this.urlHandlingStrategy.extract(rawUrl);
        var /** @type {?} */ urlTransition = !this.navigated || url.toString() !== this.currentUrlTree.toString();
        if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, extras.skipLocationChange, extras.replaceUrl, id, null); })
                .then(resolve, reject);
        }
        else if (urlTransition && this.rawUrlTree &&
            this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, false, false, id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["e" /* createEmptyState */])(url, _this.rootComponentType).snapshot); })
                .then(resolve, reject);
        }
        else {
            this.rawUrlTree = rawUrl;
            resolve(null);
        }
    };
    /**
     * @param {?} url
     * @param {?} rawUrl
     * @param {?} shouldPreventPushState
     * @param {?} shouldReplaceUrl
     * @param {?} id
     * @param {?} precreatedState
     * @return {?}
     */
    Router.prototype.runNavigate = function (url, rawUrl, shouldPreventPushState, shouldReplaceUrl, id, precreatedState) {
        var _this = this;
        if (id !== this.navigationId) {
            this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
            this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
            return Promise.resolve(false);
        }
        return new Promise(function (resolvePromise, rejectPromise) {
            // create an observable of the url and route state snapshot
            // this operation do not result in any side effects
            var /** @type {?} */ urlAndSnapshot$;
            if (!precreatedState) {
                var /** @type {?} */ redirectsApplied$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__apply_redirects__["a" /* applyRedirects */])(_this.injector, _this.configLoader, _this.urlSerializer, url, _this.config);
                urlAndSnapshot$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(redirectsApplied$, function (appliedUrl) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__recognize__["a" /* recognize */])(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl)), function (snapshot) {
                        _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
                        return { appliedUrl: appliedUrl, snapshot: snapshot };
                    });
                });
            }
            else {
                urlAndSnapshot$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])({ appliedUrl: url, snapshot: precreatedState });
            }
            // run preactivation: guards and data resolvers
            var /** @type {?} */ preActivation;
            var /** @type {?} */ preactivationTraverse$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(urlAndSnapshot$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                preActivation =
                    new PreActivation(snapshot, _this.currentRouterState.snapshot, _this.injector);
                preActivation.traverse(_this.outletMap);
                return { appliedUrl: appliedUrl, snapshot: snapshot };
            });
            var /** @type {?} */ preactivationCheckGuards = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(preactivationTraverse$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preActivation.checkGuards(), function (shouldActivate) {
                    return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
                });
            });
            var /** @type {?} */ preactivationResolveData$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(preactivationCheckGuards, function (p) {
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
                if (p.shouldActivate) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preActivation.resolveData(), function () { return p; });
                }
                else {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(p);
                }
            });
            // create router state
            // this operation has side effects => route state is being affected
            var /** @type {?} */ routerState$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preactivationResolveData$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot, shouldActivate = _a.shouldActivate;
                if (shouldActivate) {
                    var /** @type {?} */ state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__create_router_state__["a" /* createRouterState */])(_this.routeReuseStrategy, snapshot, _this.currentRouterState);
                    return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
                }
                else {
                    return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
                }
            });
            // applied the new router state
            // this operation has side effects
            var /** @type {?} */ navigationIsSuccessful;
            var /** @type {?} */ storedState = _this.currentRouterState;
            var /** @type {?} */ storedUrl = _this.currentUrlTree;
            routerState$
                .forEach(function (_a) {
                var appliedUrl = _a.appliedUrl, state = _a.state, shouldActivate = _a.shouldActivate;
                if (!shouldActivate || id !== _this.navigationId) {
                    navigationIsSuccessful = false;
                    return;
                }
                _this.currentUrlTree = appliedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.currentRouterState = state;
                if (!shouldPreventPushState) {
                    var /** @type {?} */ path = _this.urlSerializer.serialize(_this.rawUrlTree);
                    if (_this.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
                        _this.location.replaceState(path);
                    }
                    else {
                        _this.location.go(path);
                    }
                }
                new ActivateRoutes(_this.routeReuseStrategy, state, storedState)
                    .activate(_this.outletMap);
                navigationIsSuccessful = true;
            })
                .then(function () {
                if (navigationIsSuccessful) {
                    _this.navigated = true;
                    _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(_this.currentUrlTree)));
                    resolvePromise(true);
                }
                else {
                    _this.resetUrlToCurrentUrlTree();
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), ''));
                    resolvePromise(false);
                }
            }, function (e) {
                if (e instanceof __WEBPACK_IMPORTED_MODULE_19__shared__["b" /* NavigationCancelingError */]) {
                    _this.resetUrlToCurrentUrlTree();
                    _this.navigated = true;
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
                    resolvePromise(false);
                }
                else {
                    _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
                    try {
                        resolvePromise(_this.errorHandler(e));
                    }
                    catch (ee) {
                        rejectPromise(ee);
                    }
                }
                _this.currentRouterState = storedState;
                _this.currentUrlTree = storedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.location.replaceState(_this.serializeUrl(_this.rawUrlTree));
            });
        });
    };
    /**
     * @return {?}
     */
    Router.prototype.resetUrlToCurrentUrlTree = function () {
        var /** @type {?} */ path = this.urlSerializer.serialize(this.rawUrlTree);
        this.location.replaceState(path);
    };
    return Router;
}());
function Router_tsickle_Closure_declarations() {
    /** @type {?} */
    Router.prototype.currentUrlTree;
    /** @type {?} */
    Router.prototype.rawUrlTree;
    /** @type {?} */
    Router.prototype.navigations;
    /** @type {?} */
    Router.prototype.routerEvents;
    /** @type {?} */
    Router.prototype.currentRouterState;
    /** @type {?} */
    Router.prototype.locationSubscription;
    /** @type {?} */
    Router.prototype.navigationId;
    /** @type {?} */
    Router.prototype.configLoader;
    /**
     * Error handler that is invoked when a navigation errors.
     *
     * See {\@link ErrorHandler} for more information.
     * @type {?}
     */
    Router.prototype.errorHandler;
    /**
     * Indicates if at least one navigation happened.
     * @type {?}
     */
    Router.prototype.navigated;
    /**
     * Extracts and merges URLs. Used for Angular 1 to Angular 2 migrations.
     * @type {?}
     */
    Router.prototype.urlHandlingStrategy;
    /** @type {?} */
    Router.prototype.routeReuseStrategy;
    /** @type {?} */
    Router.prototype.rootComponentType;
    /** @type {?} */
    Router.prototype.urlSerializer;
    /** @type {?} */
    Router.prototype.outletMap;
    /** @type {?} */
    Router.prototype.location;
    /** @type {?} */
    Router.prototype.injector;
    /** @type {?} */
    Router.prototype.config;
}
var CanActivate = (function () {
    /**
     * @param {?} path
     */
    function CanActivate(path) {
        this.path = path;
    }
    Object.defineProperty(CanActivate.prototype, "route", {
        /**
         * @return {?}
         */
        get: function () { return this.path[this.path.length - 1]; },
        enumerable: true,
        configurable: true
    });
    return CanActivate;
}());
function CanActivate_tsickle_Closure_declarations() {
    /** @type {?} */
    CanActivate.prototype.path;
}
var CanDeactivate = (function () {
    /**
     * @param {?} component
     * @param {?} route
     */
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
function CanDeactivate_tsickle_Closure_declarations() {
    /** @type {?} */
    CanDeactivate.prototype.component;
    /** @type {?} */
    CanDeactivate.prototype.route;
}
var PreActivation = (function () {
    /**
     * @param {?} future
     * @param {?} curr
     * @param {?} injector
     */
    function PreActivation(future, curr, injector) {
        this.future = future;
        this.curr = curr;
        this.injector = injector;
        this.checks = [];
    }
    /**
     * @param {?} parentOutletMap
     * @return {?}
     */
    PreActivation.prototype.traverse = function (parentOutletMap) {
        var /** @type {?} */ futureRoot = this.future._root;
        var /** @type {?} */ currRoot = this.curr ? this.curr._root : null;
        this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.checkGuards = function () {
        var _this = this;
        if (this.checks.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(this.checks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(checks$, function (s) {
            if (s instanceof CanActivate) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])([_this.runCanActivateChild(s.path), _this.runCanActivate(s.route)]));
            }
            else if (s instanceof CanDeactivate) {
                // workaround https://github.com/Microsoft/TypeScript/issues/7271
                var /** @type {?} */ s2 = (s);
                return _this.runCanDeactivate(s2.component, s2.route);
            }
            else {
                throw new Error('Cannot be reached');
            }
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__["every"].call(runningChecks$, function (result) { return result === true; });
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.resolveData = function () {
        var _this = this;
        if (this.checks.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(this.checks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["concatMap"].call(checks$, function (s) {
            if (s instanceof CanActivate) {
                return _this.runResolve(s.route);
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
            }
        });
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__["reduce"].call(runningChecks$, function (_, __) { return _; });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap, futurePath) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
            delete prevChildren[c.value.outlet];
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap._outlets[k]); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap, futurePath) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        var /** @type {?} */ outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
        // reusing the node
        if (curr && future._routeConfig === curr._routeConfig) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["f" /* equalParamsAndUrlSegments */])(future, curr)) {
                this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
            }
            else {
                // we need to set the data
                future.data = curr.data;
                future._resolvedData = curr._resolvedData;
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
            }
        }
        else {
            if (curr) {
                this.deactiveRouteAndItsChildren(currNode, outlet);
            }
            this.checks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
            }
        }
    };
    /**
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    PreActivation.prototype.deactiveRouteAndItsChildren = function (route, outlet) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(route);
        var /** @type {?} */ r = route.value;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) {
            if (!r.component) {
                _this.deactiveRouteAndItsChildren(v, outlet);
            }
            else if (!!outlet) {
                _this.deactiveRouteAndItsChildren(v, outlet.outletMap._outlets[k]);
            }
            else {
                _this.deactiveRouteAndItsChildren(v, null);
            }
        });
        if (!r.component) {
            this.checks.push(new CanDeactivate(null, r));
        }
        else if (outlet && outlet.isActivated) {
            this.checks.push(new CanDeactivate(outlet.component, r));
        }
        else {
            this.checks.push(new CanDeactivate(null, r));
        }
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runCanActivate = function (future) {
        var _this = this;
        var /** @type {?} */ canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canActivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, future);
            var /** @type {?} */ observable;
            if (guard.canActivate) {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canActivate(future, _this.future));
            }
            else {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(future, _this.future));
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(obs);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    PreActivation.prototype.runCanActivateChild = function (path) {
        var _this = this;
        var /** @type {?} */ future = path[path.length - 1];
        var /** @type {?} */ canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return _this.extractCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canActivateChildGuards), function (d) {
            var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(d.guards), function (c) {
                var /** @type {?} */ guard = _this.getToken(c, d.node);
                var /** @type {?} */ observable;
                if (guard.canActivateChild) {
                    observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canActivateChild(future, _this.future));
                }
                else {
                    observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(future, _this.future));
                }
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
            });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(obs);
        }));
    };
    /**
     * @param {?} p
     * @return {?}
     */
    PreActivation.prototype.extractCanActivateChild = function (p) {
        var /** @type {?} */ canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    };
    /**
     * @param {?} component
     * @param {?} curr
     * @return {?}
     */
    PreActivation.prototype.runCanDeactivate = function (component, curr) {
        var _this = this;
        var /** @type {?} */ canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ canDeactivate$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canDeactivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, curr);
            var /** @type {?} */ observable;
            if (guard.canDeactivate) {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canDeactivate(component, curr, _this.curr));
            }
            else {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(component, curr, _this.curr));
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__["every"].call(canDeactivate$, function (result) { return result === true; });
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runResolve = function (future) {
        var /** @type {?} */ resolve = future._resolve;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(this.resolveNode(resolve, future), function (resolvedData) {
            future._resolvedData = resolvedData;
            future.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["e" /* merge */])(future.data, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["g" /* inheritedParamsDataResolve */])(future).resolve);
            return null;
        });
    };
    /**
     * @param {?} resolve
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.resolveNode = function (resolve, future) {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["h" /* waitForMap */])(resolve, function (k, v) {
            var /** @type {?} */ resolver = _this.getToken(v, future);
            return resolver.resolve ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(resolver.resolve(future, _this.future)) :
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(resolver(future, _this.future));
        });
    };
    /**
     * @param {?} token
     * @param {?} snapshot
     * @return {?}
     */
    PreActivation.prototype.getToken = function (token, snapshot) {
        var /** @type {?} */ config = closestLoadedConfig(snapshot);
        var /** @type {?} */ injector = config ? config.injector : this.injector;
        return injector.get(token);
    };
    return PreActivation;
}());
function PreActivation_tsickle_Closure_declarations() {
    /** @type {?} */
    PreActivation.prototype.checks;
    /** @type {?} */
    PreActivation.prototype.future;
    /** @type {?} */
    PreActivation.prototype.curr;
    /** @type {?} */
    PreActivation.prototype.injector;
}
var ActivateRoutes = (function () {
    /**
     * @param {?} routeReuseStrategy
     * @param {?} futureState
     * @param {?} currState
     */
    function ActivateRoutes(routeReuseStrategy, futureState, currState) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
    }
    /**
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activate = function (parentOutletMap) {
        var /** @type {?} */ futureRoot = this.futureState._root;
        var /** @type {?} */ currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentOutletMap);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, outletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.deactivateRoutes(c, prevChildren[c.value.outlet], outletMap);
            delete prevChildren[c.value.outlet];
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) { _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentOutletMap) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        // reusing the node
        if (future === curr) {
            // If we have a normal route, we need to go through an outlet.
            if (future.component) {
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, future);
                this.deactivateChildRoutes(futureNode, currNode, outlet.outletMap);
            }
            else {
                this.deactivateChildRoutes(futureNode, currNode, parentOutletMap);
            }
        }
        else {
            if (curr) {
                this.deactiveRouteAndItsChildren(currNode, parentOutletMap);
            }
        }
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        // reusing the node
        if (future === curr) {
            // advance the route to push the parameters
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
            // If we have a normal route, we need to go through an outlet.
            if (future.component) {
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, future);
                this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
            }
            else {
                this.activateChildRoutes(futureNode, currNode, parentOutletMap);
            }
        }
        else {
            // if we have a normal route, we need to advance the route
            // and place the component into the outlet. After that recurse.
            if (future.component) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, futureNode.value);
                if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    var /** @type {?} */ stored = ((this.routeReuseStrategy.retrieve(future.snapshot)));
                    this.routeReuseStrategy.store(future.snapshot, null);
                    outlet.attach(stored.componentRef, stored.route.value);
                    advanceActivatedRouteNodeAndItsChildren(stored.route);
                }
                else {
                    var /** @type {?} */ outletMap = new __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__["a" /* RouterOutletMap */]();
                    this.placeComponentIntoOutlet(outletMap, future, outlet);
                    this.activateChildRoutes(futureNode, null, outletMap);
                }
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
                this.activateChildRoutes(futureNode, null, parentOutletMap);
            }
        }
    };
    /**
     * @param {?} outletMap
     * @param {?} future
     * @param {?} outlet
     * @return {?}
     */
    ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
        var /** @type {?} */ resolved = ([{ provide: __WEBPACK_IMPORTED_MODULE_18__router_state__["a" /* ActivatedRoute */], useValue: future }, {
                provide: __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__["a" /* RouterOutletMap */],
                useValue: outletMap
            }]);
        var /** @type {?} */ config = parentLoadedConfig(future.snapshot);
        var /** @type {?} */ resolver = null;
        var /** @type {?} */ injector = null;
        if (config) {
            injector = config.injectorFactory(outlet.locationInjector);
            resolver = config.factoryResolver;
            resolved.push({ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], useValue: resolver });
        }
        else {
            injector = outlet.locationInjector;
            resolver = outlet.locationFactoryResolver;
        }
        outlet.activate(future, resolver, injector, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(resolved), outletMap);
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactiveRouteAndItsChildren = function (route, parentOutletMap) {
        if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
            this.detachAndStoreRouteSubtree(route, parentOutletMap);
        }
        else {
            this.deactiveRouteAndOutlet(route, parentOutletMap);
        }
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.detachAndStoreRouteSubtree = function (route, parentOutletMap) {
        var /** @type {?} */ outlet = getOutlet(parentOutletMap, route.value);
        var /** @type {?} */ componentRef = outlet.detach();
        this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route });
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactiveRouteAndOutlet = function (route, parentOutletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(route);
        var /** @type {?} */ outlet = null;
        // getOutlet throws when cannot find the right outlet,
        // which can happen if an outlet was in an NgIf and was removed
        try {
            outlet = getOutlet(parentOutletMap, route.value);
        }
        catch (e) {
            return;
        }
        var /** @type {?} */ childOutletMap = outlet.outletMap;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) {
            if (route.value.component) {
                _this.deactiveRouteAndItsChildren(v, childOutletMap);
            }
            else {
                _this.deactiveRouteAndItsChildren(v, parentOutletMap);
            }
        });
        if (outlet && outlet.isActivated) {
            outlet.deactivate();
        }
    };
    return ActivateRoutes;
}());
function ActivateRoutes_tsickle_Closure_declarations() {
    /** @type {?} */
    ActivateRoutes.prototype.routeReuseStrategy;
    /** @type {?} */
    ActivateRoutes.prototype.futureState;
    /** @type {?} */
    ActivateRoutes.prototype.currState;
}
/**
 * @param {?} node
 * @return {?}
 */
function advanceActivatedRouteNodeAndItsChildren(node) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(node.value);
    node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function parentLoadedConfig(snapshot) {
    var /** @type {?} */ s = snapshot.parent;
    while (s) {
        var /** @type {?} */ c = s._routeConfig;
        if (c && c._loadedConfig)
            return c._loadedConfig;
        if (c && c.component)
            return null;
        s = s.parent;
    }
    return null;
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function closestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    var /** @type {?} */ s = snapshot.parent;
    while (s) {
        var /** @type {?} */ c = s._routeConfig;
        if (c && c._loadedConfig)
            return c._loadedConfig;
        s = s.parent;
    }
    return null;
}
/**
 * @param {?} node
 * @return {?}
 */
function nodeChildrenAsMap(node) {
    return node ? node.children.reduce(function (m, c) {
        m[c.value.outlet] = c;
        return m;
    }, {}) : {};
}
/**
 * @param {?} outletMap
 * @param {?} route
 * @return {?}
 */
function getOutlet(outletMap, route) {
    var /** @type {?} */ outlet = outletMap._outlets[route.outlet];
    if (!outlet) {
        var /** @type {?} */ componentName = ((route.component)).name;
        if (route.outlet === __WEBPACK_IMPORTED_MODULE_19__shared__["a" /* PRIMARY_OUTLET */]) {
            throw new Error("Cannot find primary outlet to load '" + componentName + "'");
        }
        else {
            throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
        }
    }
    return outlet;
}
/**
 * @param {?} commands
 * @return {?}
 */
function validateCommands(commands) {
    for (var /** @type {?} */ i = 0; i < commands.length; i++) {
        var /** @type {?} */ cmd = commands[i];
        if (cmd == null) {
            throw new Error("The requested path contains " + cmd + " segment at index " + i);
        }
    }
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadedRouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterConfigLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_collection__ = __webpack_require__(39);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @experimental
 */
var /** @type {?} */ ROUTES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('ROUTES');
var LoadedRouterConfig = (function () {
    /**
     * @param {?} routes
     * @param {?} injector
     * @param {?} factoryResolver
     * @param {?} injectorFactory
     */
    function LoadedRouterConfig(routes, injector, factoryResolver, injectorFactory) {
        this.routes = routes;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
        this.injectorFactory = injectorFactory;
    }
    return LoadedRouterConfig;
}());
function LoadedRouterConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    LoadedRouterConfig.prototype.routes;
    /** @type {?} */
    LoadedRouterConfig.prototype.injector;
    /** @type {?} */
    LoadedRouterConfig.prototype.factoryResolver;
    /** @type {?} */
    LoadedRouterConfig.prototype.injectorFactory;
}
var RouterConfigLoader = (function () {
    /**
     * @param {?} loader
     * @param {?} compiler
     */
    function RouterConfigLoader(loader, compiler) {
        this.loader = loader;
        this.compiler = compiler;
    }
    /**
     * @param {?} parentInjector
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.load = function (parentInjector, loadChildren) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(this.loadModuleFactory(loadChildren), function (r) {
            var /** @type {?} */ ref = r.create(parentInjector);
            var /** @type {?} */ injectorFactory = function (parent) { return r.create(parent).injector; };
            return new LoadedRouterConfig(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["a" /* flatten */])(ref.injector.get(ROUTES)), ref.injector, ref.componentFactoryResolver, injectorFactory);
        });
    };
    /**
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["fromPromise"])(this.loader.load(loadChildren));
        }
        else {
            var /** @type {?} */ offlineMode_1 = this.compiler instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"];
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["b" /* wrapIntoObservable */])(loadChildren()), function (t) { return offlineMode_1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(/** @type {?} */ (t)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["fromPromise"])(_this.compiler.compileModuleAsync(t)); });
        }
    };
    return RouterConfigLoader;
}());
function RouterConfigLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterConfigLoader.prototype.loader;
    /** @type {?} */
    RouterConfigLoader.prototype.compiler;
}
//# sourceMappingURL=router_config_loader.js.map

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 969:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

},[666]);
//# sourceMappingURL=app.bundle.js.map