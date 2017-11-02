webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_module__ = __webpack_require__("../../../../../src/app/contacts/contacts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail_component__ = __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // để sd ngFor ngIf...

// import { ContactsComponent } from './contacts/contacts.component';



var routesConfig = [
    // { path: 'contacts', component: ContactsComponent},// se viet rieng ContactModule nên se k dung ở day nữa
    // { path: 'detail', component: ContactDetailComponent},
    { path: 'detail/:id/:name/:phoneNumber', component: __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */] },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routesConfig),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_module__["a" /* ContactsModule */]
        ],
        declarations: [
            // ContactsComponent,
            __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-word>/</app-word>\r\n<app-book>/</app-book>-->\r\n<!--<app-user-form></app-user-form>-->\r\n<!--<app-struct></app-struct>-->\r\n<!--<app-words></app-words>-->\r\n<!--<app-person name = \"Qúy Đào\" age = \"24\"></app-person>\r\n<app-person name = \"Tầng Tạ\" age = \"28\"></app-person>-->\r\n<!--<app-list-person></app-list-person>-->\r\n<!--<app-parent></app-parent>-->\r\n<!--<app-card>\r\n    <p class=\"card-header\">Tìm hiểu directive ngContent</p>\r\n    <h1 class=\"card-body\">Tìm hiểu directive ngContent</h1>\r\n</app-card>-->\r\n\r\n<!--<app-learn-pipe></app-learn-pipe>-->\r\n<!--<app-ip></app-ip>-->\r\n<!--<app-weather></app-weather>-->\r\n<!--<app-sign-in></app-sign-in>-->\r\n<!--<app-sign-up></app-sign-up>-->\r\n\r\n<!--<a routerLink=\"/contacts\">Contacts</a>-->\r\n<!--<br>-->\r\n<!--<a routerLink=\"/detail\">Detail</a>-->\r\n<!--router-outlet: để lấy nội dung của component hiển thị ra-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Learn Angular4';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__word_word_component__ = __webpack_require__("../../../../../src/app/word/word.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__struct_struct_component__ = __webpack_require__("../../../../../src/app/struct/struct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__words_words_component__ = __webpack_require__("../../../../../src/app/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__person_person_component__ = __webpack_require__("../../../../../src/app/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_person_list_person_component__ = __webpack_require__("../../../../../src/app/list-person/list-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parent_component__ = __webpack_require__("../../../../../src/app/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__child_component__ = __webpack_require__("../../../../../src/app/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sub_component__ = __webpack_require__("../../../../../src/app/sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__card_component__ = __webpack_require__("../../../../../src/app/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__learn_pipe_learn_pipe_component__ = __webpack_require__("../../../../../src/app/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ip_component__ = __webpack_require__("../../../../../src/app/ip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__round_pipe__ = __webpack_require__("../../../../../src/app/round.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ip_service__ = __webpack_require__("../../../../../src/app/ip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // kbao them ReactiveFormsModule để sử dụng Reactive form

/*import { Routes,RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'detail', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];*/ // k viet ơ day nưa mà viêt riêng AppRoutingModule

















// pipe

//service 


// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__word_word_component__["a" /* WordComponent */],
            __WEBPACK_IMPORTED_MODULE_7__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__struct_struct_component__["a" /* StructComponent */],
            __WEBPACK_IMPORTED_MODULE_10__words_words_component__["a" /* WordsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_12__list_person_list_person_component__["a" /* ListPersonComponent */],
            __WEBPACK_IMPORTED_MODULE_13__parent_component__["a" /* ParentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sub_component__["a" /* SubComponent */],
            __WEBPACK_IMPORTED_MODULE_16__card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__learn_pipe_learn_pipe_component__["a" /* LearnPipeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ip_component__["a" /* IpComponent */],
            __WEBPACK_IMPORTED_MODULE_21__round_pipe__["a" /* RoundPipe */],
            __WEBPACK_IMPORTED_MODULE_23__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_19__sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_20__sign_up_component__["a" /* SignUpComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            // RouterModule.forRoot(routesConfig),
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__ip_service__["a" /* IpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookComponent = (function () {
    function BookComponent() {
    }
    /*
     ngOnInit là 1 cycle hooks https://angular.io/guide/lifecycle-hooks
    */
    BookComponent.prototype.ngOnInit = function () {
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book/book.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookComponent);

//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardComponent = (function () {
    function CardComponent() {
    }
    return CardComponent;
}());
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-card',
        template: "\n        <div class=\"card\">\n            <div class=\"header\">\n                <ng-content select=\".card-header\"></ng-content>\n            </div>\n            <div class=\"body\">\n                <ng-content select=\".card-body\"></ng-content>\n            </div>\n        </div>\n    ",
        styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 500px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
    })
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = (function () {
    function ChildComponent() {
        //khai bao kieu boolean để addForParent() và subForParent() phai truyền vào kiểu boolen k thì sẽ thông báo lỗi
        this.myClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    //btn add (+)
    ChildComponent.prototype.addForParent = function () {
        this.myClick.emit(true);
    };
    //btn sub (-)
    ChildComponent.prototype.subForParent = function () {
        this.myClick.emit(false);
    };
    return ChildComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "myClick", void 0);
ChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-child',
        template: "\n        <button (click)=\"addForParent();\" class=\"btn btn-primary\"> + </button>\n        <button (click)=\"subForParent();\" class=\"btn btn-danger\">  - </button>\n    "
    })
], ChildComponent);

//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ID: {{ id }}\n</p>\n<p>Ten: {{ name }}</p>\n<p>SDT: {{ phoneNumber }}</p>\n<a routerLink=\"/contacts\">Contacts</a>"

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactDetailComponent = (function () {
    function ContactDetailComponent(route) {
        this.route = route;
        this.id = '';
        this.name = '';
        this.phoneNumber = '';
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
            /*const id = params.get('id');
            const name = params.get('name');
            const phoneNumber = params.get('phoneNumber');*/ // neu viet the nay thi chi hien thi ở template ở tai trang này 
            console.log(_this.id);
        });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-detail',
        template: __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ContactDetailComponent);

var _a;
//# sourceMappingURL=contact-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<p> List Contact : </p>\n<div *ngFor=\"let contact of contacts\">\n  <a routerLink=\"/detail/{{ contact.id }}/{{ contact.name }}/{{ contact.phoneNumber }}\">{{ contact.name }}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '0456' },
            { id: 3, name: 'Tun', phoneNumber: '0789' }
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // de su dung ngIf ngFor

var routesConfig = [
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_3__contacts_component__["a" /* ContactsComponent */] }
];
var ContactsModule = (function () {
    function ContactsModule() {
    }
    return ContactsModule;
}());
ContactsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routesConfig)
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__contacts_component__["a" /* ContactsComponent */]]
    })
], ContactsModule);

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ "../../../../../src/app/ip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip_service__ = __webpack_require__("../../../../../src/app/ip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
var IpComponent = (function () {
    /*constructor(private http: Http) {
        this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(res => res.json())
            .then(resJson => this.ip = resJson.ip)
            .catch(err => console.log(err));
    }*/
    function IpComponent(ipService) {
        this.ipService = ipService;
    }
    IpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getIp()
            .then(function (ip) { return _this.ip = ip; })
            .catch(function (err) { return console.log(err); });
    };
    return IpComponent;
}());
IpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ip',
        template: '<h3>{{ ip }}</h3>',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]) === "function" && _a || Object])
], IpComponent);

var _a;
//# sourceMappingURL=ip.component.js.map

/***/ }),

/***/ "../../../../../src/app/ip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpService = (function () {
    function IpService(http) {
        this.http = http;
    } //variable is http type is Http
    IpService.prototype.getIp = function () {
        return this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.ip; });
    };
    return IpService;
}());
IpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])() //same component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IpService);

var _a;
//# sourceMappingURL=ip.service.js.map

/***/ }),

/***/ "../../../../../src/app/learn-pipe/learn-pipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/learn-pipe/learn-pipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Tìm hiểu về Pipe</h1>\n<p>\n  Thông thường 1 công việc có 3 bước chính <br>\n  - lấy dữ liệu <br>\n  - Tranform dữ liệu (từ dữ liệu thô nó sẽ chuyển đổi để ng dùng có thể đọc hiểu đc dữ liệu đó)<br>=> Pipe sẽ can thiệp vào bước này <br>\n  - Show dữ liệu<br>\n</p>\n<h1>Xem cách sử dụng PIPE tại đây :\n  <a href=\"https://angular.io/api?type=pipe\" target=\"_blank\">PIPE</a> \n</h1>\n<h4>Your birth day : {{birthday | date}}</h4>\n<h4>Your birth day : {{birthday | date:'fullDate'}} su dụng fullDate</h4>\n<h4>Your birth day : {{birthday | date:'medium'}} su dung medium</h4>\n<h4>Your birth day : {{birthday | date:'shortTime'}} su dung short time</h4>\n<h4>Your birth day : {{birthday | date:'mmss'}} su dung mmss</h4>\n<h3>Person : {{ person | json}}</h3>\n<h3>Name Person : {{ person.name }}</h3>\n<h3>Name Person Uppercase: {{ person.name | uppercase }}</h3>\n<h3>Cac pipe co the được gọi liên tiếp nhau : {{ person | json | uppercase}}</h3>\n<h3>Sử dụng AsynPipe : {{address | async}}</h3>\n<h3>Tìm hiểu thêm về tại đây:\n  <a href=\"http://online.khoapham.vn/nodejs/11-xu-ly-bat-dong-bo-trong-javascript-voi-promise-va-async-%E2%80%93-await.html\" target=\"_blank\">Xử lý bất đồng bộ trong Javascript với Promise và Async – Await</a>\n</h3><br><br>\n\n<h3>Custom pipe</h3>\n<h4>Làm tròn lên 1.9 => cộng thêm value là : {{ 1.9 | roundNum : true : 10}}</h4>\n<h4>Làm trò xuống 3.5 => cộng thêm value là :{{ 3.5 | roundNum : false : 15}}</h4>"

/***/ }),

/***/ "../../../../../src/app/learn-pipe/learn-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnPipeComponent = (function () {
    function LearnPipeComponent() {
        this.birthday = Date.now(); //new Date(2015,7,25);
        this.person = { name: 'Quý Đào', age: 24 };
        // sử dụng AsyncPipe
        // address = '265 Cau Giay';
        // nhưng nếu lấy trên server về thì n có kiểu như sau 
        this.address = Promise.resolve('265 Cầu Giấy - Hà Nội');
    }
    LearnPipeComponent.prototype.ngOnInit = function () {
    };
    return LearnPipeComponent;
}());
LearnPipeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-learn-pipe',
        template: __webpack_require__("../../../../../src/app/learn-pipe/learn-pipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/learn-pipe/learn-pipe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LearnPipeComponent);

//# sourceMappingURL=learn-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ngFor kết hợp Input và kết hợp sử dụng lại các component</h1>\n<!--<div *ngFor=\"let person of arrPeople\">\n  <app-person [name]=\"person.name\" [age]=\"person.age\" (removePerson)=\"removePersonByName($event)\"></app-person>\n</div>-->\n<!--k muon dung div-->\n<ng-container *ngFor=\"let person of arrPeople\">\n  <app-person [name]=\"person.name\" [age]=\"person.age\" (removePerson)=\"removePersonByName($event)\"></app-person>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPersonComponent = (function () {
    function ListPersonComponent() {
        this.arrPeople = [
            { name: 'Ti', age: 10 },
            { name: 'Teo', age: 15 },
            { name: 'Tun', age: 7 }
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    return ListPersonComponent;
}());
ListPersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-person',
        template: __webpack_require__("../../../../../src/app/list-person/list-person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-person/list-person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListPersonComponent);

//# sourceMappingURL=list-person.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_component__ = __webpack_require__("../../../../../src/app/sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import ViewChild để sử dụng
var ParentComponent = (function () {
    function ParentComponent() {
        this.value = 0;
    }
    ParentComponent.prototype.changeValue = function (issAdd) {
        if (issAdd) {
            this.value = this.value + 1;
        }
        else {
            this.value = this.value - 1;
        }
    };
    ParentComponent.prototype.changeForSub = function () {
        this.mySub.value_view = this.mySub.value_view + this.mySub.value_view;
    };
    return ParentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__sub_component__["a" /* SubComponent */]) //gọi view mà mình sử dụng vào
    ,
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__sub_component__["a" /* SubComponent */] // gán biến vào view mà mình sử dụng
     !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__sub_component__["a" /* SubComponent */] // gán biến vào view mà mình sử dụng
    ) === "function" && _a || Object)
], ParentComponent.prototype, "mySub", void 0);
ParentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-parent',
        template: "\n        <h3> {{value}} </h3>\n        <app-child (myClick) = \"changeValue($event);\"></app-child><br><br>\n        \n        <app-sub></app-sub>\n        <button class=\"btn btn-warning\" (click) = \"changeForSub();\"> T\u0103ng (view sub Component)</button>\n    "
    })
], ParentComponent);

var _a;
//# sourceMappingURL=parent.component.js.map

/***/ }),

/***/ "../../../../../src/app/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Tên: {{ name }}</h3>\n<p>Tuổi: {{ age }}</p>\n"

/***/ }),

/***/ "../../../../../src/app/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    return PersonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PersonComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PersonComponent.prototype, "age", void 0);
PersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-person',
        template: __webpack_require__("../../../../../src/app/person/person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/person/person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);

//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "../../../../../src/app/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper, addTo) {
        if (isUpper) {
            return Math.ceil(value + addTo);
        }
        return Math.floor(value + addTo);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'roundNum' })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_service__ = __webpack_require__("../../../../../src/app/sign-in.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // import SignInService vào để sử dụng 

var SignInComponent = (function () {
    function SignInComponent(signInService, http) {
        this.signInService = signInService;
        this.http = http;
    } // khai báo thêm biến signInService
    SignInComponent.prototype.onSubmit = function (formSignIn) {
        // gửi cả đoạn dữ liệu lên form
        /*const url = "http://localhost:3000/signin";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(formSignIn.value);
        this.http.post(url, body, { headers })
            .toPromise()
            .then(res => res.json())
            .then(resJson => console.log(resJson));*/
        // k viết ở đây nữa mà viết service để dùng (sign-in.service.ts)
        this.signInService.sendPost(formSignIn.value)
            .then(function (result) { return console.log(result); })
            .catch(function (err) { return console.log(err); });
        console.log(formSignIn);
    };
    SignInComponent.prototype.postToExpress = function () {
        var url = "http://localhost:3000/signin";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify({ name: "QuyDao939602" });
        this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.text(); })
            .then(function (resText) { return console.log(resText); });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-sign-in',
        template: "\n        <h3>\n            <a href=\"https://angular.io/guide/forms\" target=\"_blank\">T\u00ECm hi\u1EC3u v\u1EC1 Form</a>\n        </h3>\n        <p>template variable formSignIn kie ngForm \u0111\u1EC3 l\u1EA5y ra c\u00E1c gi\u00E1 tr\u1ECB trong form</p>\n        <form (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\n            <input placeholder=\"Email\" ngModel  #txtEmail=\"ngModel\" name=\"email\" required email>\n            <h4>kiem tra xem txtEmail c\u00F3 l\u1ED7i hay k . c\u00F3 l\u1ED7i r\u1ED3i th\u00EC ki\u1EC3m tra xem c\u00F3 l\u1ED7i required hay k . n\u1EBFu c\u00F3 th\u00EC show ra text \u1EDF th\u1EBB p</h4>\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">\n                Email is required\n            </p>\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">\n                Email is not valid\n            </p>\n            <br><br>\n            <input type=\"password\" placeholder=\"Password\" ngModel #txtPassword=\"ngModel\" name=\"password\" minlength=\"6\" pattern=\"[a-z]*\">\n            <br><br>\n            <div ngModelGroup=\"subjects\">\n                <label><input type=\"checkbox\" [ngModel]=\"true\" name=\"NodeJS\"> NodeJS</label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\"> Angular</label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"ReactJS\"> ReactJS</label>\n            </div>\n            <br><br>\n            <button [disabled]=\"formSignIn.invalid\" class=\"btn btn-primary\">Submit</button>\n        </form>\n        <br>\n        <button (click) = \"postToExpress()\">POST</button>\n        <p>{{ txtEmail.errors | json }}</p>\n        <p>{{ txtPassword.errors | json }}</p>\n        <p>{{ formSignIn.value | json }}</p>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__sign_in_service__["a" /* SignInService */]] //thêm  SignInService vào  providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__sign_in_service__["a" /* SignInService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sign_in_service__["a" /* SignInService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInService = (function () {
    function SignInService(http) {
        this.http = http;
    }
    SignInService.prototype.sendPost = function (value) {
        var url = 'http://localhost:3000/signin';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return SignInService;
}());
SignInService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SignInService);

var _a;
//# sourceMappingURL=sign-in.service.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // sdung FormBuilder để gom nhóm lại cho ngắn gọn 
var SignUpComponent = (function () {
    function SignUpComponent(fb) {
        this.fb = fb;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        /*this.formSignUp = new FormGroup({
            //email: new FormControl(), // đặt tên là email thì formControlName="email"
            email: new FormControl('gvn@gmail.com'),// gán gtri mặc định cho  FormControl là input text
            password: new FormControl(),
            subjects: new FormGroup({
                nodeJS: new FormControl(true),// gán gtri mặc định cho  FormControl là checkbox
                angular: new FormControl(false),
                reactJS: new FormControl(false),
            }),
            
        })*/
        //Thay đoạn trên bằng cách sử dụng FormBuilder để viết ngắn gọn hơn 
        // k nên viết đoạn khởi tạo này trong constructor nên ta se sư dụng ngOninit
        this.formSignUp = this.fb.group({
            //email: 'gvn@gmail.com',// gán gtri mặc định cho  FormControl là input text
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, gmailValidator]],
            password: '',
            subjects: this.fb.group({
                nodeJS: true,
                angular: false,
                reactJS: false,
            }),
        });
    };
    SignUpComponent.prototype.onSubmit = function () {
        console.log(this.formSignUp.value);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-up',
        template: "\n        <form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\n            <input placeholder=\"Email\" formControlName=\"email\">\n            <p *ngIf=\"formSignUp.get('email').invalid && formSignUp.get('email').touched\">Email is required</p>\n            <br><br>\n            <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <br><br>\n            <div formGroupName=\"subjects\">\n                <label><input type=\"checkbox\" name=\"NodeJS\" formControlName=\"nodeJS\"> NodeJS</label>\n                <label><input type=\"checkbox\" name=\"Angular\" formControlName=\"angular\"> Angular</label>\n                <label><input type=\"checkbox\" name=\"ReactJS\" formControlName=\"reactJS\"> ReactJS</label>\n            </div>\n            <button [disabled]=\"formSignUp.invalid\">Submit</button>\n        </form>\n        <code>{{ formSignUp.controls.email.errors | json }}</code>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], SignUpComponent);

// custom validator
function gmailValidator(formControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null; // k co lỗi
    }
    return { gmail: true };
}
var _a;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf = \"isShow\">\n  struct works!\n</p>\n<ul>\n  <li *ngFor = \"let subject of arrSubjects \">\n    <p>{{ \"Subject: \" + subject}}</p>\n  </li>\n</ul>\n<button (click) = \"clickToggle()\"> Toggle</button>"

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StructComponent = (function () {
    function StructComponent() {
        this.isShow = true;
        //sử dụng ngFor đơn giản 
        this.arrSubjects = ['Angular', 'Nodejs', 'React'];
    }
    StructComponent.prototype.ngOnInit = function () {
    };
    StructComponent.prototype.clickToggle = function () {
        this.isShow = !this.isShow;
    };
    return StructComponent;
}());
StructComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-struct',
        template: __webpack_require__("../../../../../src/app/struct/struct.component.html"),
        styles: [__webpack_require__("../../../../../src/app/struct/struct.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StructComponent);

//# sourceMappingURL=struct.component.js.map

/***/ }),

/***/ "../../../../../src/app/sub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubComponent = (function () {
    function SubComponent() {
        this.value_view = 2;
    }
    return SubComponent;
}());
SubComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sub',
        template: "\n        <h3>T\u00ECm hi\u1EC3u v\u1EC1 ViewChild</h3>\n        <h4>Gi\u00E1 tr\u1ECB \u1EDF view child : {{value_view}}</h4>\n    "
    })
], SubComponent);

//# sourceMappingURL=sub.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".circle {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background-color: blue;\r\n}\r\n.square {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 2px;\r\n    background-color: blue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>Tìm hiểu về các kiểu binding (tiếp):Two-way data binding </h1>-->\n<!--<input placeholder=\"Enter name\" (keyup) = showEvent($event)>-->\n\n<!--<h2>Tìm hiểu về Template reference variable</h2>\n<input placeholder=\"Enter name\" [(ngModel)] = \"name\" #txtUser>\n<h3>Your name is : {{name}}</h3>\n<code>{{txtUser.value | json}}</code>-->\n\n<!--Lập trình Angular 4 - Bài 14: Style binding và class binding-->\n<h2>Bài 14: Style binding và class binding</h2>\n<!--Style binding-->\n<input placeholder=\"Enter name\" [(ngModel)] = \"name\" #txtUser>\n<h3 [style.color] =\" name.length % 2 === 0 ? 'red' : 'blue' \">Your name is : {{name}}</h3>\n<h4 [style.color] =\" isHighLight ? 'green' : 'pink' \">Your name is hightlight : {{name}}</h4>\n<!--class binding-->\n<div [class]=\"isHighLight ? 'circle' :'square'\"></div>\n<div [class.circle]=\"!isHighLight\" [class.square]=\"isHighLight\"></div>   \n\n<h2>Bài 15: Cơ bản về directive,ngStyle</h2>\n<h4 [ngStyle] = \"name.length % 2 === 0 ? evenStyle : oddStyle\">Sử dụng ngStyle</h4>\n<h5>Sử dụng ngClass</h5>\n<!--2 cách này tương đương nhau -->\n<div [ngClass] = \"{ circle: !isHighLight, square: isHighLight}\"></div>\n<div [class.circle]=\"!isHighLight\" [class.square]=\"isHighLight\"></div>   \n<!--{ circle: !isHighLight, square: isHighLight} là đoạn javascript nên ta co the viêt trong .ts-->\n<div [ngClass] = \"currentStyle\"></div>"

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = (function () {
    function UserFormComponent() {
        this.name = '';
        this.isHighLight = false;
        //biến sử dụng ngStyle
        this.evenStyle = {
            color: 'red',
            fontSize: '40px'
        };
        this.oddStyle = {
            color: 'black',
            fontSize: '20px'
        };
        // sử dụng ngClass
        this.currentStyle = { circle: !this.isHighLight, square: this.isHighLight };
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.showEvent = function (event) {
        console.log(event);
        this.name = event.target.value;
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__("../../../../../src/app/user-form/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-form/user-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserFormComponent);

//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{ getMessage() }}</h3>\n<input placeholder=\"Enter your city name\" [(ngModel)]=\"txtCityName\">\n<br><br>\n<button (click)=\"getWeather();\">Get weather</button>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//viet WeatherService de lay nhiet do cua 1 thanh pho nao do

var WeatherComponent = (function () {
    //khai bao bien weatherService voi kieu la WeatherService de su dung
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = '';
        this.cityName = ''; //lấy ra biến city name sau khi nhập xong input city name
        this.temp = null;
        this.isLoading = false;
    }
    WeatherComponent.prototype.ngOnInit = function () { };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName)
            .then(function (temp) {
            _this.cityName = _this.txtCityName;
            _this.temp = temp;
            _this.isLoading = false;
            _this.txtCityName = ''; //sau khi hien thị ra nhiet do cua thanh pho thi trả lại input là rỗng
        })
            .catch(function (err) {
            alert('Cannot find your city!');
            _this.isLoading = false;
            _this.cityName = '';
            _this.txtCityName = '';
        });
    };
    WeatherComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'Loading...';
        }
        return this.cityName === '' ? 'Please Enter your city name' : (this.cityName + ' is now ' + this.temp);
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]] //import service do vao
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getTemp = function (cityName) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.main.temp; });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/app/word/word.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n    color: red;\r\n    font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/word/word.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Tìm hiểu về các kiểu binding-->\r\n<h3 [hidden]=\"forgot\">{{ en }}</h3>\r\n<!--1:string interpolation : đây là ràng buộc từ Component lên DOM-->\r\n<p>{{ vn }}</p> \r\n\r\n<!--2:property binding : đây là ràng buộc từ Component lên DOM-->\r\n<!--cách 1: sử dụng string interpolation để show url-->\r\n<!--<img src=\"https://angular.io/assets/images/logos/angular/shield-large.svg\" alt=\"\"> -->\r\n<!--cách 2: sử dụng property binding để show url => Nên dùng theo cách này-->\r\n<img [src]=\"imageUrl\" alt=\"\">\r\n\r\n<!--3: event binding : đây là ràng buộc từ Component lên DOM và DOM tương tác ngược lại Component-->\r\n<button (click)=\"toggleForgot()\">Toggle forgot</button>\r\n<!--Test laod bootstrap-->\r\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>"

/***/ }),

/***/ "../../../../../src/app/word/word.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WordComponent = (function () {
    function WordComponent() {
        this.en = 'Hello';
        this.vn = 'Xin chao';
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
        this.forgot = false;
    }
    WordComponent.prototype.toggleForgot = function () {
        this.forgot = !this.forgot;
    };
    return WordComponent;
}());
WordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // template: '<h3>QuyDao</h3>',//chỉ là 1 đoạn html
        template: __webpack_require__("../../../../../src/app/word/word.component.html"),
        selector: 'app-word',
        styles: [__webpack_require__("../../../../../src/app/word/word.component.css")],
    })
], WordComponent);

//# sourceMappingURL=word.component.js.map

/***/ }),

/***/ "../../../../../src/app/words/words.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".word {\r\n  background-color: #EDEDF5;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  width: 250px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/words/words.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShowForm\">\r\n  <input placeholder=\"English\" [(ngModel)]=\"newEn\" /><br>\r\n  <input placeholder=\"Vietnamese\" [(ngModel)]=\"newVn\" />\r\n  <br>\r\n  <button (click)=\"addWord()\">Thêm từ mới</button>\r\n</div>\r\n<button (click)=\"isShowForm = !isShowForm\" *ngIf=\"!isShowForm\">Thêm từ mới</button>\r\n\r\n<br><br>\r\n<!--Cách 1: lọc mảng hiển thị-->\r\n<!--<select [(ngModel)]=\"filterStatus\">\r\n  <option value=\"XEM_TAT_CA\">Xem tất cả</option>\r\n  <option value=\"XEM_DA_NHO\">Xem từ đã nhớ</option>\r\n  <option value=\"XEM_CHUA_NHO\">Xem từ chưa nhớ</option>\r\n</select>-->\r\n\r\n<!--Cách 2: lọc mảng hiển thị-->\r\n<select [(ngModel)]=\"filter\">\r\n  <option *ngFor=\"let i of selectItems\" [value]=\"i.id\">{{i.value}}</option>\r\n</select>\r\n\r\n<div *ngFor=\"let word of arrWords\" >\r\n  <div class=\"word\" *ngIf=\"getShowStatus(word.memorized)\">\r\n    <h4 [ngStyle]=\" { color: word.memorized ? 'green' : 'blue'}\">\r\n      {{ word.id +' - ' + word.en }}\r\n    </h4>\r\n    <p>{{ word.vn }}</p>\r\n    <button (click)=\"delWord(word.id)\">Xóa</button>\r\n    <button (click) = \"word.memorized = !word.memorized\">\r\n      {{word.memorized ? \"chưa thuộc\" : \"đã thuộc\"}}\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/words/words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsComponent = (function () {
    function WordsComponent() {
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
        this.newEn = "";
        this.newVn = "";
        this.isShowForm = false;
        this.filterStatus = 'XEM_TAT_CA';
        // cách 2 :lọc mảng hiển thị
        this.selectItems = [
            { id: 1, value: "Xem tất cả" },
            { id: 2, value: "Xem chưa nhớ" },
            { id: 3, value: "Xem đã nhớ" }
        ];
        this.filter = this.selectItems[0].id;
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent.prototype.addWord = function () {
        // thêm vào đầu mảng
        // this.isShowForm = true;
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        });
        // thêm vào cuối mảng
        // this.arrWords.push() 
        // sau khi thêm xong thì xoa trang input
        this.newEn = "";
        this.newVn = "";
        // sau khi tem xong thi cung an form 
        this.isShowForm = false;
    };
    WordsComponent.prototype.delWord = function (id) {
        //lấy ra index của id đó trong mảng
        var index = this.arrWords.findIndex(function (word) { return word.id === id; });
        //or dung cach nay de lay id
        // const index = this.arrWords.indexOf(id);
        // xóa
        this.arrWords.splice(index, 1);
    };
    WordsComponent.prototype.getShowStatus = function (memorized) {
        /*const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
        const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
        const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
        return dkXemTatCa || dkXemDaNho || dkXemChuaNho;*/
        console.log(this.filter);
        // Cách 2
        var showAll = this.filter == 1;
        var showMemorized = this.filter == 2 && memorized;
        var showUnMemorized = this.filter == 3 && !memorized;
        return showAll || showMemorized || showUnMemorized;
    };
    return WordsComponent;
}());
WordsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-words',
        template: __webpack_require__("../../../../../src/app/words/words.component.html"),
        styles: [__webpack_require__("../../../../../src/app/words/words.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WordsComponent);

//# sourceMappingURL=words.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map