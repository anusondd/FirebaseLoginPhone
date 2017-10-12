webpackJsonp([0],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.PhoneNumber = {};
        //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.RecaptchaVerifier('recaptcha-container');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.PhoneNumber.countryCode = '+66';
        this.PhoneNumber.phoneNumber = '940282690';
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signIn = function (PhoneNumber) {
        var _this = this;
        //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        this.countryCode = this.PhoneNumber.countryCode;
        this.phoneNumber = this.PhoneNumber.phoneNumber;
        var appVerifier = this.recaptchaVerifier;
        var phoneNumberString = this.countryCode + this.phoneNumber;
        console.log(phoneNumberString);
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then(function (confirmationResult) {
            var prompt = _this.alertCtrl.create({
                title: 'Enter the Confirmation code',
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    { text: 'Cancel',
                        handler: function (data) { console.log('Cancel clicked'); }
                    },
                    { text: 'Send',
                        handler: function (data) {
                            confirmationResult.confirm(data.confirmationCode)
                                .then(function (result) {
                                // User signed in successfully.
                                console.log(result.user);
                                this.navCtrl.push('HomePage');
                                // ...
                            }).catch(function (error) {
                                // User couldn't sign in (bad verification code?)
                                // ...
                            });
                        }
                    }
                ]
            });
            prompt.present();
        })
            .catch(function (error) {
            console.error("SMS not sent", error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Ionic\FirebaseLoginPhone\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="recaptcha-container"></div>\n\n  \n\n    <ion-item>\n\n      <ion-label stacked>Country Code</ion-label>\n\n      <ion-input type="text" [(ngModel)]="PhoneNumber.countryCode"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label stacked>Phone Number</ion-label>\n\n        <ion-input type="number" [(ngModel)]="PhoneNumber.phoneNumber"></ion-input>\n\n    </ion-item>\n\n   \n\n    \n\n      <button ion-button id="sign-in-button" (click)="signIn(PhoneNumber)">\n\n        Sign In\n\n      </button>\n\n      \n\n    \n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic\FirebaseLoginPhone\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map