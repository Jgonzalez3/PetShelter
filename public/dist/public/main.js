(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-details/pet-details.component */ "./src/app/pet-details/pet-details.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
/* harmony import */ var _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pet-create/pet-create.component */ "./src/app/pet-create/pet-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_3__["PetsComponent"] },
    { path: 'new', component: _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_6__["PetCreateComponent"] },
    { path: 'details/:id', component: _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_4__["PetDetailsComponent"] },
    { path: 'edit/:id', component: _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_5__["PetEditComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = 'Pet Shelter';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._route.parent.params.subscribe(params => console.log(`The Parent params: ${params}`));
        // this._route.params.subscribe((params: Params) =>{
        //   console.log(params['brand']);
        //   this.paramsId = params['brand'];
        // });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pet-details/pet-details.component */ "./src/app/pet-details/pet-details.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
/* harmony import */ var _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pet-create/pet-create.component */ "./src/app/pet-create/pet-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_8__["PetsComponent"],
                _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_9__["PetDetailsComponent"],
                _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_10__["PetEditComponent"],
                _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_11__["PetCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/findpets');
    };
    HttpService.prototype.getPet = function (id) {
        console.log(id);
        return this._http.get('/findpet/' + id);
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post('/pet', newPet);
    };
    HttpService.prototype.editPet = function (id, Pet) {
        console.log(id);
        console.log(Pet);
        return this._http.put('/pet/edit/' + id, Pet);
    };
    HttpService.prototype.likePet = function (id, Pet) {
        console.log(id);
        console.log(Pet);
        return this._http.put('/pet/like/' + id, Pet);
    };
    HttpService.prototype.deletePet = function (id) {
        console.log(id);
        return this._http.delete('/pet/delete/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h1>Page Not Found</h1>\n      <button class=\"btn btn-success\" routerLink = \"/\">Home</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pet-create/pet-create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pet-create/pet-create.component.html":
/*!******************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>{{title}}</h3>\n      <h4 style=\"color: purple\">The pet must have a name</h4>\n    </div>\n  </div>\n  <div class=\"border border-seconday col-sm-10\" style=\"padding: 10px\">\n    <form (submit)=\"createPet()\">\n      <span *ngIf=\"newpet.name.length < 3\" class=\"text-danger\">Pet Name must be at least 3 characters</span>\n      <p *ngIf=\"uniqueName\" class=\"text-danger\">{{uniqueName}}</p>\n      <p class=\"h4\">Pet Name:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"newpet.name\" [(ngModel)]=\"newpet.name\"></p>\n      <span *ngIf=\"newpet.type.length < 3\" class=\"text-danger\">Pet Type must be at least 3 characters</span>\n      <p class=\"h4\">Pet type:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"newpet.type\" [(ngModel)]=\"newpet.type\"></p>\n      <span *ngIf=\"newpet.description.length < 3\" class=\"text-danger\">Pet Description must be at least 3 characters</span>\n      <p class=\"h4\">Description:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"newpet.description\" [(ngModel)]=\"newpet.description\"></p>\n      <h4>Skills (optional):</h4>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 1:</span>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill1\" [(ngModel)]=\"skill1\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 2:</span>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill2\" [(ngModel)]=\"skill2\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 3:</span>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill3\" [(ngModel)]=\"skill3\">\n        </div>\n      </div>\n      <div class=\"col text-center\">\n        <button class=\"btn btn-lg btn-primary\">Add pet</button><span class=\"col-sm-1\"></span>\n        <button class=\"btn btn-lg btn-primary\" routerLink=\"/\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-create/pet-create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.ts ***!
  \****************************************************/
/*! exports provided: PetCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCreateComponent", function() { return PetCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetCreateComponent = /** @class */ (function () {
    function PetCreateComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.title = "Know of a pet needing a home?";
        this.newpet = { name: "", type: "", description: "", skills: [], likes: 0 };
    }
    PetCreateComponent.prototype.ngOnInit = function () {
    };
    PetCreateComponent.prototype.createPet = function () {
        var _this = this;
        if (this.newpet.name.length > 2 && this.newpet.type.length > 2 && this.newpet.description.length > 2) {
            this.newpet.skills.push(this.skill1);
            this.newpet.skills.push(this.skill2);
            this.newpet.skills.push(this.skill3);
            console.log(this.newpet);
            var obs = this._httpService.addPet(this.newpet);
            obs.subscribe(function (data) {
                console.log("Created", data);
                if (data['error']) {
                    console.log("Any Errors", data['error']);
                    _this.uniqueName = data['error']['errors']['name']['message'];
                    console.log(_this.uniqueName);
                }
                if (!_this.uniqueName) {
                    _this.redirectHome();
                }
            });
        }
    };
    PetCreateComponent.prototype.redirectHome = function () {
        this._router.navigate(['/']);
    };
    PetCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-create',
            template: __webpack_require__(/*! ./pet-create.component.html */ "./src/app/pet-create/pet-create.component.html"),
            styles: [__webpack_require__(/*! ./pet-create.component.css */ "./src/app/pet-create/pet-create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PetCreateComponent);
    return PetCreateComponent;
}());



/***/ }),

/***/ "./src/app/pet-details/pet-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n  list-style-type: none;\r\n}\r\n.home{\r\n  margin-top: -20px\r\n}\r\n.skills{\r\n  vertical-align: top;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-lg btn-link float-right home\" routerLink = \"/\">Home</button>\n<div *ngIf=\"pet\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"h3\">{{title}} {{pet.name}}</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <strong class=\"text-center col-sm-4 h3\">Pet type:</strong>\n      <span class=\"col-sm-8 font-weight-light h3\">{{pet.type}}</span><br>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <strong class=\"text-center col-sm-4 h3\">Description:</strong>\n      <span class=\"col-sm-8 font-weight-light h3\">{{pet.description}}</span><br>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <strong class=\"text-center col-sm-4 h3 skills\">Skills:</strong>\n      <ul class=\"col-sm-8 d-sm-inline-block\">\n        <li *ngIf=\"pet.skills[0]\" class=\"h3 font-weight-light\">{{pet.skills[0]}}</li><br *ngIf=\"pet.skills[0]\">\n        <li *ngIf=\"pet.skills[1]\" class=\"h3 font-weight-light\">{{pet.skills[1]}}</li><br *ngIf=\"pet.skills[1]\">\n        <li *ngIf=\"pet.skills[2]\" class=\"h3 font-weight-light\">{{pet.skills[2]}}</li>\n      </ul>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <strong class=\"text-center col-sm-4 h3\">Likes:</strong>\n      <span class=\"col-sm-8 font-weight-light h3\">{{pet.likes}}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <br>\n      <button *ngIf=\"!liked\" class=\"btn btn-primary\" (click)=\"likePet()\">Like this pet</button>\n      <span class=\"col-sm-1\"></span>\n      <button class=\"btn btn-success\" (click)=\"deletePet()\">Adopt this pet!</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.ts ***!
  \******************************************************/
/*! exports provided: PetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDetailsComponent", function() { return PetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetDetailsComponent = /** @class */ (function () {
    function PetDetailsComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "Details about";
        this.liked = false;
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.paramId = params['id'];
        });
        this.getPetFromService();
    };
    PetDetailsComponent.prototype.getPetFromService = function () {
        var _this = this;
        var obs = this._httpService.getPet(this.paramId);
        obs.subscribe(function (data) {
            console.log("DATA PET", data);
            console.log("Any Errors", data['error']);
            _this.pet = data['pet'];
        });
    };
    PetDetailsComponent.prototype.deletePet = function () {
        var obs = this._httpService.deletePet(this.paramId);
        obs.subscribe(function (data) {
            console.log("DATA DELETE", data);
            console.log("Any Errors?", data['error']);
        });
        this.redirectHome();
    };
    PetDetailsComponent.prototype.redirectHome = function () {
        this._router.navigate(['/']);
    };
    PetDetailsComponent.prototype.likePet = function () {
        this.liked = true;
        this.pet.likes++;
        console.log(this.pet);
        var obs = this._httpService.likePet(this.paramId, this.pet);
        obs.subscribe(function (data) {
            console.log("Like Data", data);
            console.log("Any Errors", data['error']);
        });
    };
    PetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-details',
            template: __webpack_require__(/*! ./pet-details.component.html */ "./src/app/pet-details/pet-details.component.html"),
            styles: [__webpack_require__(/*! ./pet-details.component.css */ "./src/app/pet-details/pet-details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PetDetailsComponent);
    return PetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pet\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>{{title}}</h3>\n    </div>\n  </div>\n  <div class=\"border border-seconday col-sm-10\">\n    <form (submit)=\"updatePet()\">\n      <span *ngIf=\"pet.name.length < 3\" class=\"text-danger\">Pet Name must be at least 3 characters</span>\n      <p *ngIf=\"uniqueName\" class=\"text-danger\">{{uniqueName}}</p>\n      <p class=\"h4\">Pet Name:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"pet.name\" [(ngModel)]=\"pet.name\"></p>\n      <span *ngIf=\"pet.type.length < 3\" class=\"text-danger\">Pet Type must be at least 3 characters</span>\n      <p class=\"h4\">Pet type:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"pet.type\" [(ngModel)]=\"pet.type\"></p>\n      <span *ngIf=\"pet.description.length < 3\" class=\"text-danger\">Pet Description must be at least 3 characters</span>\n      <p class=\"h4\">Description:<input class=\"form-control col-sm-8\" type=\"text\" required minlength=\"3\" name=\"pet.description\" [(ngModel)]=\"pet.description\"></p>\n      <h4>Skills (optional):</h4>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 1:</span>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill1\" [(ngModel)]=\"skill1\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 2:</span>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill2\" [(ngModel)]=\"skill2\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <span class=\"col-sm-1\"></span>\n        <span class=\"h4 col-sm-3\">Skill 3:</span>\n        <div class=\"form-group col-sm-6\">\n          <input class=\"form-control\" type=\"text\" name=\"skill3\" [(ngModel)]=\"skill3\">\n        </div>\n      </div>\n      <div class=\"col text-center\">\n        <button class=\"btn btn-lg btn-primary\">Edit pet</button><span class=\"col-sm-1\"></span>\n        <button class=\"btn btn-lg btn-primary\" routerLink=\"/details/{{pet._id}}\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.ts ***!
  \************************************************/
/*! exports provided: PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return PetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "Edit this pet";
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.paramId = params['id'];
        });
        this.getPetFromService();
    };
    PetEditComponent.prototype.getPetFromService = function () {
        var _this = this;
        var obs = this._httpService.getPet(this.paramId);
        obs.subscribe(function (data) {
            console.log("PET UPDATE DATA", data);
            console.log("Any Errors?", data['error']);
            _this.pet = data['pet'];
            _this.skill1 = _this.pet.skills[0];
            _this.skill2 = _this.pet.skills[1];
            _this.skill3 = _this.pet.skills[2];
        });
    };
    PetEditComponent.prototype.updatePet = function () {
        var _this = this;
        if (this.pet.name.length > 2 && this.pet.type.length > 2 && this.pet.description.length > 2) {
            this.pet.skills[0] = this.skill1;
            this.pet.skills[1] = this.skill2;
            this.pet.skills[2] = this.skill3;
            console.log(this.pet);
            var obs = this._httpService.editPet(this.paramId, this.pet);
            obs.subscribe(function (data) {
                console.log("Update data", data);
                console.log("Any Errors", data['error']);
                if (data['error']) {
                    _this.uniqueName = data['error']['errors']['name']['message'];
                    console.log(_this.uniqueName);
                }
                if (!_this.uniqueName) {
                    _this.redirectPetDetails();
                }
            });
        }
    };
    PetEditComponent.prototype.redirectPetDetails = function () {
        this._router.navigate(['/details/' + this.paramId]);
    };
    PetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-edit',
            template: __webpack_require__(/*! ./pet-edit.component.html */ "./src/app/pet-edit/pet-edit.component.html"),
            styles: [__webpack_require__(/*! ./pet-edit.component.css */ "./src/app/pet-edit/pet-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PetEditComponent);
    return PetEditComponent;
}());



/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>{{title}}</h3>\n      <button class=\"btn btn-lg btn-link col-sm-8 text-left\" routerLink = \"/new\">Add a pet to the shelter</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <th class=\"h3\"><strong>Name</strong></th>\n        <th class=\"h3\"><strong>Type</strong></th>\n        <th class=\"h3\"><strong>Actions</strong></th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let p of pets\">\n          <td class=\"h3\">{{p.name}}</td>\n          <td class=\"h3\">{{p.type}}</td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-primary col-sm-5\" routerLink = \"/details/{{p._id}}\">Details</button><span class=\"d-none d-sm-inline col-sm-1\"></span>\n            <button class=\" btn btn-warning col-sm-5\" routerLink = \"/edit/{{p._id}}\">Edit</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetsComponent = /** @class */ (function () {
    function PetsComponent(_httpService) {
        this._httpService = _httpService;
        this.title = "These pets are looking for a home!";
    }
    PetsComponent.prototype.ngOnInit = function () {
        this.getPetsFromService();
    };
    PetsComponent.prototype.getPetsFromService = function () {
        var _this = this;
        var obs = this._httpService.getPets();
        obs.subscribe(function (data) {
            console.log("Pets", data);
            console.log("Any Errors", data["error"]);
            _this.pets = data['pets'];
            console.log(_this.pets);
        });
    };
    PetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            styles: [__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], PetsComponent);
    return PetsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Javier Gonzalez\Documents\CodingDojo\Bootcamp\MEAN\BeltExam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map