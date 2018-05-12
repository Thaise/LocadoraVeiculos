webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nheader, footer{\r\n    background: #007bff;\r\n    color:white;\r\n}\r\n\r\nheader{\r\n    height: 70px;\r\n    padding: 5px;\r\n}\r\n\r\nheader h2{\r\n    margin: 1%;\r\n    font-size: 1.5em !important;\r\n}\r\n\r\n.content{\r\n    margin: 2% 2% 2% 0;\r\n    margin-left: 2%;\r\n\tmin-height: 100%;\r\n\tposition: relative;\r\n}\r\n\r\nfooter{\r\n    position: absolute;\r\n    /*bottom: 0;*/\r\n    width: 100%;\r\n    height: 30px;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h2>Veiculos - Locadora X</h2>\n</header>\n<div class=\"container content\">\n  <router-outlet></router-outlet>\n</div>\n<footer>@Copyright 2018 - Veículos Locadora X</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__veiculo_veiculo_module__ = __webpack_require__("../../../../../src/app/veiculo/veiculo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_mask__ = __webpack_require__("../../../../ngx-mask/esm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__veiculo_veiculo_module__["a" /* VeiculoModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__veiculo_veiculo_report_veiculo_report_component__ = __webpack_require__("../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_veiculo_cadastro_veiculo_cadastro_component__ = __webpack_require__("../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.ts");



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__veiculo_veiculo_report_veiculo_report_component__["a" /* VeiculoReportComponent */] },
    { path: 'veiculos', component: __WEBPACK_IMPORTED_MODULE_0__veiculo_veiculo_report_veiculo_report_component__["a" /* VeiculoReportComponent */] },
    { path: 'veiculo/cadastro/:id', component: __WEBPACK_IMPORTED_MODULE_2__veiculo_veiculo_cadastro_veiculo_cadastro_component__["a" /* VeiculoCadastroComponent */] },
    { path: 'veiculo/visualizacao/:id', component: __WEBPACK_IMPORTED_MODULE_2__veiculo_veiculo_cadastro_veiculo_cadastro_component__["a" /* VeiculoCadastroComponent */] },
    { path: 'veiculo/cadastro', component: __WEBPACK_IMPORTED_MODULE_2__veiculo_veiculo_cadastro_veiculo_cadastro_component__["a" /* VeiculoCadastroComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/veiculo/contantes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contantes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");

var Contantes = /** @class */ (function () {
    function Contantes() {
    }
    Contantes.httpOptions = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };
    return Contantes;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.filtro = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.filtroAtual = this.filtro.asObservable();
    }
    DataService.prototype.setFiltro = function (filter) {
        this.filtro.next(filter);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form.submitted input.ng-invalid , form.submitted select.ng-invalid{\r\n    border:1px solid #f00;\r\n}\r\n\r\ninput.ng-valid, select.ng-valid{\r\n    border: 1px solid #ccc !important;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched, input.erro-validacao{\r\n    border: 1px solid red !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"span8\">\n\n    <h4>Cadastro de Veículos</h4>\n\n    <form #veiculoForm (ngSubmit)=\"enviaDados(veiculoForm)\" [class.submitted]=\"veiculoForm.submitted && veiculoForm.invalid\">\n      <fieldset [disabled]=\"camposDesabilitados\">\n        <div class=\"alert alert-{{tipoMsgRetorno}}\" [hidden]=\"mensagemRetorno == null\">{{mensagemRetorno}}</div>\n\n        <div class=\"form-group\">\n          <label>Placa *</label>\n          <input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"veiculo.placa\" name=\"placa\" title=\"Placa\" required pattern=\"\\w{3}-\\d{4}\"\n            [dropSpecialCharacters]=\"false\" mask=\"AAA-0000\" maxlength=\"8\" (blur)=\"validaPlaca()\" #placaInput/>\n        </div>\n        <div class=\"form-group\">\n          <label>Chassi *</label>\n          <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"\" [(ngModel)]=\"veiculo.chassi\" name=\"chassi\" title=\"Chassi\"\n            required pattern=\"\\w{11}\\d{6}\" maxlength=\"17\" (blur)=\"validaChassi()\" #chassiInput/>\n        </div>\n        <div class=\"form-group\">\n          <label>Categoria *</label>\n          <select [(ngModel)]=\"veiculo.categoria\" name=\"categoria\" class=\"form-control form-control-lg\" required>\n            <option value=\"ENTRADA\">Entrada</option>\n            <option value=\"HACTH_PEQ\">Hatch Pequeno</option>\n            <option value=\"HATCH_MEDIO\">Hatch Médio</option>\n            <option value=\"SEDAN_PEQ\">Sedan Pequeno</option>\n            <option value=\"SEDAN_COMP\">Sedan Compacto</option>\n            <option value=\"SEDAN_MED\">Sedan Médio</option>\n            <option value=\"SEDAN_GRANDE\">Sedan Grande</option>\n            <option value=\"SUV\">SUV</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Marca *</label>\n          <input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"veiculo.marca\" name=\"marca\" title=\"Marca\" required maxlength=\"10\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label>Modelo *</label>\n          <input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"veiculo.modelo\" name=\"modelo\" title=\"Modelo\" required\n            maxlength=\"50\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Ano *</label>\n          <input type=\"number\" class=\"form-control form-control-lg\" [(ngModel)]=\"veiculo.ano\" name=\"ano\" placeholder=\"AAAA - Ex.: 2018\"\n            title=\"Ano\" required min=\"2008\" max=\"{{anoAtual()}}\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>Potência(cv) *</label>\n          <input type=\"number\" class=\"form-control form-control-lg\" [(ngModel)]=\"veiculo.potencia\" name=\"nomeResp\" title=\"Nome do responsável\"\n            required  min=\"70\" max=\"500\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>Airbag</label>\n          <select [(ngModel)]=\"veiculo.possuiAirbag\" name=\"possuiAirbag\" class=\"form-control form-control-lg\">\n            <option value=\"true\">Sim</option>\n            <option value=\"false\">Não</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Ar condicionado</label>\n          <select [(ngModel)]=\"veiculo.possuiArCond\" name=\"possuiArCond\" class=\"form-control form-control-lg\">\n            <option value=\"true\">Sim</option>\n            <option value=\"false\">Não</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Vidros Elétricos</label>\n          <select [(ngModel)]=\"veiculo.possuiVidrosElet\" name=\"possuiVidrosElet\" class=\"form-control form-control-lg\">\n            <option value=\"true\">Sim</option>\n            <option value=\"false\">Não</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Status</label>\n          <select [(ngModel)]=\"veiculo.status\" name=\"status\" class=\"form-control form-control-lg\">\n            <option value=\"DISPONIVEL\">Disponível</option>\n            <option value=\"ALUGADO\">Alugado</option>\n            <option value=\"EM_REPARO\">Em reparo</option>\n          </select>\n        </div>\n      </fieldset>\n      <button type=\"submit\" *ngIf=\"!camposDesabilitados\"  class=\"btn btn-success\">Salvar</button>\n      <button type=\"button\" *ngIf=\"veiculo.idVeiculo && !camposDesabilitados\" class=\"btn btn-danger\" (click)=\"remove()\">Remover</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancela()\">{{ camposDesabilitados ? 'Voltar' : 'Cancelar' }}</button>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoCadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__veiculo__ = __webpack_require__("../../../../../src/app/veiculo/veiculo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_service__ = __webpack_require__("../../../../../src/app/veiculo/veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VeiculoCadastroComponent = /** @class */ (function () {
    function VeiculoCadastroComponent(veiculoService, routerParams, router) {
        this.veiculoService = veiculoService;
        this.routerParams = routerParams;
        this.router = router;
        this.tipoMsgRetorno = "";
        this.veiculo = new __WEBPACK_IMPORTED_MODULE_0__veiculo__["a" /* Veiculo */]();
        setTimeout(function () { }, 1);
    }
    VeiculoCadastroComponent.prototype.ngOnInit = function () {
        var id = null;
        this.routerParams.params.subscribe(function (params) {
            if (params['id']) {
                id = +params['id'];
            }
        });
        if (this.router.url.indexOf('visualizacao') >= 0) {
            this.camposDesabilitados = true;
        }
        if (id != null) {
            this.buscaPeloId(id);
        }
    };
    VeiculoCadastroComponent.prototype.enviaDados = function () {
        if (!this.veiculoForm.nativeElement.classList.contains("ng-invalid") && !this.veiculoForm.nativeElement.classList.contains("erro-validacao")) {
            if (this.veiculo.idVeiculo) {
                this.atualiza();
            }
            else {
                this.insere();
            }
        }
        else {
            this.tipoMsgRetorno = "danger";
            this.mensagemRetorno = "O formulário não foi preenchido corretamente!";
        }
    };
    VeiculoCadastroComponent.prototype.validaChassi = function () {
        var _this = this;
        if (this.veiculo.chassi) {
            this.veiculoService.validaChassi(this.veiculo).subscribe(function (data) { _this.resposta = data; }, function (error) {
                _this.erro = error.error;
                console.error(_this.erro);
                _this.tipoMsgRetorno = "danger";
                _this.mensagemRetorno = _this.erro.msg;
                _this.chassiInput.nativeElement.classList.add("erro-validacao");
                _this.veiculoForm.nativeElement.classList.add("erro-validacao");
            }, function () {
                _this.veiculo.chassi = _this.veiculo.chassi.toUpperCase();
                _this.tipoMsgRetorno = "";
                _this.mensagemRetorno = null;
                _this.chassiInput.nativeElement.classList.remove("erro-validacao");
                _this.veiculoForm.nativeElement.classList.remove("erro-validacao");
            });
        }
    };
    VeiculoCadastroComponent.prototype.validaPlaca = function () {
        var _this = this;
        if (this.veiculo.placa) {
            this.veiculoService.validaPlaca(this.veiculo).subscribe(function (l) { return _this.resposta = l; }, function (error) {
                _this.erro = error.error;
                console.error(_this.erro);
                _this.tipoMsgRetorno = "danger";
                _this.mensagemRetorno = _this.erro.msg;
                _this.placaInput.nativeElement.classList.add("erro-validacao");
                _this.veiculoForm.nativeElement.classList.add("erro-validacao");
            }, function () {
                _this.veiculo.placa = _this.veiculo.placa.toUpperCase();
                _this.tipoMsgRetorno = "";
                _this.mensagemRetorno = null;
                _this.placaInput.nativeElement.classList.remove("erro-validacao");
                _this.veiculoForm.nativeElement.classList.remove("erro-validacao");
            });
        }
    };
    VeiculoCadastroComponent.prototype.insere = function () {
        var _this = this;
        this.veiculoService.insere(this.veiculo).subscribe(function (l) { return _this.resposta = l; }, function (error) {
            _this.erro = error.error;
            console.error("Erro " + _this.erro.status + ": " + _this.erro.msg);
            _this.tipoMsgRetorno = "danger";
            _this.mensagemRetorno = "Erro ao inserir veiculo '" + _this.veiculo.modelo + "': " + _this.erro.msg;
        }, function () {
            _this.tipoMsgRetorno = "success";
            _this.mensagemRetorno = "Sucesso ao inserir veiculo '" + _this.veiculo.modelo + "'";
            _this.veiculo = new __WEBPACK_IMPORTED_MODULE_0__veiculo__["a" /* Veiculo */]();
            _this.navegaParaReport();
        });
    };
    VeiculoCadastroComponent.prototype.atualiza = function () {
        var _this = this;
        this.veiculoService.atualiza(this.veiculo).subscribe(function (l) { return _this.resposta = l; }, function (error) {
            _this.erro = error;
            console.error(_this.erro);
            console.error("Erro " + _this.erro.status + ": " + _this.erro.msg);
            _this.tipoMsgRetorno = "danger";
            _this.mensagemRetorno = "Erro ao atualizar veiculo '" + _this.veiculo.modelo + "': " + _this.erro.msg;
        }, function () {
            _this.tipoMsgRetorno = "success";
            _this.mensagemRetorno = "Sucesso ao atualizar veiculo '" + _this.veiculo.modelo + "'";
            _this.navegaParaReport();
        });
    };
    VeiculoCadastroComponent.prototype.remove = function () {
        var _this = this;
        this.veiculoService.remove(this.veiculo).subscribe(function (l) { return _this.resposta = l; }, function (error) {
            _this.erro = error;
            console.error("Erro " + _this.erro.status + ": " + _this.erro.msg);
            _this.tipoMsgRetorno = "danger";
            _this.mensagemRetorno = "Erro ao remover veiculo '" + _this.veiculo.modelo + "': " + _this.erro.msg;
        }, function () {
            _this.tipoMsgRetorno = "success";
            _this.mensagemRetorno = "Sucesso ao remover veiculo '" + _this.veiculo.modelo + "'";
            _this.navegaParaReport();
        });
    };
    VeiculoCadastroComponent.prototype.anoAtual = function () {
        var now = new Date();
        return now.getFullYear();
    };
    VeiculoCadastroComponent.prototype.buscaPeloId = function (id) {
        var _this = this;
        this.veiculoService.getPeloId(id).subscribe(function (l) {
            _this.veiculo = l;
        }, function (error) {
            console.error(_this.erro);
            _this.tipoMsgRetorno = "danger";
            _this.mensagemRetorno = "Erro ao buscar veiculo pelo id: " + id;
        }, function () { });
        if (this.veiculo == null) {
            this.tipoMsgRetorno = "warning";
            this.mensagemRetorno = "Veiculo não encontrada!";
            this.navegaParaReport();
        }
    };
    VeiculoCadastroComponent.prototype.cancela = function () {
        this.navegaParaReport();
    };
    VeiculoCadastroComponent.prototype.navegaParaReport = function () {
        this.router.navigateByUrl('/veiculos');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('chassiInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], VeiculoCadastroComponent.prototype, "chassiInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('placaInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], VeiculoCadastroComponent.prototype, "placaInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('veiculoForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], VeiculoCadastroComponent.prototype, "veiculoForm", void 0);
    VeiculoCadastroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-veiculo-cadastro',
            template: __webpack_require__("../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__veiculo_service__["a" /* VeiculoService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], VeiculoCadastroComponent);
    return VeiculoCadastroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-report/veiculo-busca.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoBusca; });
var VeiculoBusca = /** @class */ (function () {
    function VeiculoBusca() {
    }
    return VeiculoBusca;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination{\r\n    margin: 0 auto;\r\n    max-width: 500px;\r\n}\r\n\r\n.pagination button{\r\n    margin-right: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n.info-pag p{\r\n    margin-top: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.controle-max-pag{   \r\n    margin-right: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.tabela{\r\n    margin-top: 30px\r\n}\r\n\r\n.btn-danger{\r\n    color:white !important\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .extra{\r\n        display: none;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Veiculos</h4>\n\n<section class=\"filtros\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Placa\" [(ngModel)]=\"filtro.placa\" name=\"placa\" title=\"Placa\" pattern=\"\\w{3}-\\d{4}\"\n          [dropSpecialCharacters]=\"false\" mask=\"AAA-0000\" #placaInput />\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Modelo\" [(ngModel)]=\"filtro.modelo\" name=\"modelo\" title=\"Modelo\" />\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Marca\" [(ngModel)]=\"filtro.marca\" name=\"marca\" title=\"Marca\" />\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <button type=\"submit\" class=\"btn\" (click)=\"buscaRegistros(true)\">Filtrar</button>\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"limpa()\">Limpar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</section>\n<section class=\"tabela\">\n  <div class=\"alert alert-{{tipoMsgRetorno}}\" [hidden]=\"mensagemRetorno == null\">{{mensagemRetorno}}</div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Marca</th>\n        <th scope=\"col\">Placa</th>\n        <th scope=\"col\" class=\"extra\">Modelo</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\">Ações</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of registros\">\n        <td>{{item.marca}}</td>\n        <td>{{item.placa}}</td>\n        <td class=\"extra\">{{item.modelo}}</td>\n        <td>{{getDescricao(item.status)}}</td>\n        <td>\n          <a class=\"btn btn-info\" routerLink=\"/veiculo/visualizacao/{{item.idVeiculo}}\">\n            <i class=\"fa fa-eye\"></i>\n          </a>\n          <a class=\"btn btn-primary\" routerLink=\"/veiculo/cadastro/{{item.idVeiculo}}\">\n            <i class=\"fa fa-edit\"></i>\n          </a>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"selecionaParaRemover(item, modalRemover)\">\n            <i class=\"fa fa-times\"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n\n<nav class=\"paginacao\">\n  <ul class=\"pagination\">\n    <li class=\"controle-max-pag\">\n      <select name=\"qtdPorPagina\" [disabled]=\"qtdPorPagina == 5 && qtdPorPagina >= totalRegistros\" class=\"form-control form-control-sm\"\n        (change)=\"alteraMaxRegistros($event.target.value)\">\n        <option value=\"5\">5</option>\n        <option value=\"10\">10</option>\n        <option value=\"20\">20</option>\n        <option value=\"50\">50</option>\n      </select>\n    </li>\n    <li>\n      <button class=\"btn btn-secondary\" [disabled]=\"pagina==1\" (click)=\"executaPaginacao(1, $event)\">\n        < </button>\n    </li>\n    <li>\n      <button class=\"btn btn-secondary\" [disabled]=\"pagina==1\" (click)=\"executaPaginacao(pagina-1, $event)\">\n        << </button>\n    </li>\n    <li class=\"info-pag\">\n      <p>\n        <strong>{{pagina}}</strong> de {{qtdPaginas}}</p>\n    </li>\n    <li>\n      <button class=\"btn btn-secondary\" [disabled]=\"qtdPaginas==1 || pagina==qtdPaginas\" (click)=\"executaPaginacao(pagina+1, $event)\">\n        >>\n      </button>\n    </li>\n    <li>\n      <button class=\"btn btn-secondary\" [disabled]=\"qtdPaginas==1 || pagina==qtdPaginas\" (click)=\"executaPaginacao(qtdPaginas, $event)\">\n        >\n      </button>\n    </li>\n  </ul>\n  <p>Total de registros:\n    <strong>{{ totalRegistros }}</strong>\n</nav>\n<section id=\"opcoes\">\n  <a class=\"btn btn-success\" routerLink=\"/veiculo/cadastro\">Incluir Veiculo</a>\n</section>\n\n<ng-template #modalRemover let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Remover Veículo</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Confirma exclusão do veículo {{selecionado ? selecionado.placa : ''}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Não</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"remove();c('Close click')\">Sim</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_service__ = __webpack_require__("../../../../../src/app/veiculo/veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__veiculo_busca__ = __webpack_require__("../../../../../src/app/veiculo/veiculo-report/veiculo-busca.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/veiculo/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VeiculoReportComponent = /** @class */ (function () {
    function VeiculoReportComponent(veiculoService, routerParams, dataService, renderer, modalService) {
        this.veiculoService = veiculoService;
        this.routerParams = routerParams;
        this.dataService = dataService;
        this.renderer = renderer;
        this.modalService = modalService;
        this.onPaginate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.filtro = new __WEBPACK_IMPORTED_MODULE_3__veiculo_busca__["a" /* VeiculoBusca */]();
        this.registros = [];
        this.tipoMsgRetorno = "";
    }
    VeiculoReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qtdPaginas = 1;
        this.qtdPorPagina = 5;
        this.pagina = +this.routerParams.snapshot.queryParams['pagina'] || 1;
        setTimeout(function () { _this.buscaRegistros(false); }, 1);
        this.dataService.filtroAtual.subscribe(function (f) { return _this.filtro = f; });
        window.history.pushState({}, document.title, window.location.pathname);
    };
    VeiculoReportComponent.prototype.executaPaginacao = function ($event) {
        this.pagina = $event;
        this.buscaRegistros(false);
    };
    VeiculoReportComponent.prototype.alteraMaxRegistros = function ($event) {
        this.qtdPorPagina = $event;
        this.buscaRegistros(false);
    };
    VeiculoReportComponent.prototype.selecionaParaRemover = function (item, modal) {
        this.selecionado = item;
        this.modalService.open(modal);
    };
    VeiculoReportComponent.prototype.remove = function () {
        var _this = this;
        if (this.selecionado) {
            this.veiculoService.remove(this.selecionado).subscribe(function (data) {
                _this.tipoMsgRetorno = "success";
                _this.mensagemRetorno = "Veículo removido com sucesso";
                _this.buscaRegistros(false);
            }, function (error) {
                console.log(error);
                _this.tipoMsgRetorno = "danger";
                _this.mensagemRetorno = "Erro ao remover veículo";
            });
        }
    };
    VeiculoReportComponent.prototype.buscaRegistros = function (comFiltro) {
        var _this = this;
        if (comFiltro) {
            this.pagina = 1;
        }
        console.log(this.qtdPorPagina);
        this.filtro.maxItensRetorno = this.qtdPorPagina;
        this.filtro.pagina = this.pagina;
        this.dataService.setFiltro(this.filtro);
        this.veiculoService.getRegistros(this.filtro).subscribe(function (data) {
            console.log(data);
            _this.registros = data.veiculos;
            _this.totalRegistros = data.quantidade;
            _this.qtdPaginas = Math.ceil(_this.totalRegistros / _this.qtdPorPagina);
        }, function (error) {
            console.log(error);
            _this.tipoMsgRetorno = "danger";
            _this.mensagemRetorno = "Erro ao buscar registros";
        });
    };
    VeiculoReportComponent.prototype.getDescricao = function (status) {
        var desc;
        if (status === 'DISPONIVEL') {
            desc = "Disponível";
        }
        else if (status === "ALUGADO") {
            desc = "Alugado";
        }
        else {
            desc = "Em Reparo";
        }
        return desc;
    };
    VeiculoReportComponent.prototype.limpa = function () {
        this.filtro = new __WEBPACK_IMPORTED_MODULE_3__veiculo_busca__["a" /* VeiculoBusca */]();
        console.log(this.placaInput);
        this.renderer.setProperty(this.placaInput.nativeElement, 'value', '');
        console.log(this.filtro);
        this.pagina = 1;
        this.routerParams.queryParams = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */]();
        this.buscaRegistros(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('placaInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], VeiculoReportComponent.prototype, "placaInput", void 0);
    VeiculoReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-veiculo-report',
            template: __webpack_require__("../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__veiculo_service__["a" /* VeiculoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */]])
    ], VeiculoReportComponent);
    return VeiculoReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/veiculo/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__veiculo_service__ = __webpack_require__("../../../../../src/app/veiculo/veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_cadastro_veiculo_cadastro_component__ = __webpack_require__("../../../../../src/app/veiculo/veiculo-cadastro/veiculo-cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__veiculo_report_veiculo_report_component__ = __webpack_require__("../../../../../src/app/veiculo/veiculo-report/veiculo-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_mask__ = __webpack_require__("../../../../ngx-mask/esm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var VeiculoModule = /** @class */ (function () {
    function VeiculoModule() {
    }
    VeiculoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__veiculo_report_veiculo_report_component__["a" /* VeiculoReportComponent */],
                __WEBPACK_IMPORTED_MODULE_2__veiculo_cadastro_veiculo_cadastro_component__["a" /* VeiculoCadastroComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__veiculo_report_veiculo_report_component__["a" /* VeiculoReportComponent */],
                __WEBPACK_IMPORTED_MODULE_2__veiculo_cadastro_veiculo_cadastro_component__["a" /* VeiculoCadastroComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__veiculo_service__["a" /* VeiculoService */],
                __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]
            ]
        })
    ], VeiculoModule);
    return VeiculoModule;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contantes__ = __webpack_require__("../../../../../src/app/veiculo/contantes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeiculoService = /** @class */ (function () {
    function VeiculoService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/cadastrodeveiculos/rest/veiculo';
    }
    VeiculoService.prototype.insere = function (veiculo) {
        var veiculoJson = JSON.stringify(veiculo);
        console.log('Insere veiculo: ' + veiculo.modelo);
        return this.http.post(this.baseUrl + "/cadastra", veiculoJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.atualiza = function (veiculo) {
        var veiculoJson = JSON.stringify(veiculo);
        console.log('Atualiza veiculo: ' + veiculo.modelo);
        return this.http.post(this.baseUrl + "/atualiza", veiculoJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.remove = function (veiculo) {
        var veiculoJson = JSON.stringify(veiculo);
        console.log('Remove veiculo: ' + veiculo.modelo);
        return this.http.post(this.baseUrl + "/remove", veiculoJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.getPeloId = function (id) {
        console.log('Busca veiculo pelo ID: ' + id);
        return this.http.get(this.baseUrl + "/buscaPeloId/" + id, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.getRegistros = function (filtro) {
        var filtroJson = JSON.stringify(filtro);
        console.log('Busca veiculos (filtros) - página ' + filtro.pagina + " quantidade por página: " + filtro.maxItensRetorno);
        return this.http.post(this.baseUrl + "/buscaPorFiltros", filtroJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.validaChassi = function (veiculo) {
        var veiculoJson = JSON.stringify(veiculo);
        console.log('Valida Chassi do veiculo: ' + veiculo.modelo);
        return this.http.post(this.baseUrl + "/validaChassi", veiculoJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService.prototype.validaPlaca = function (veiculo) {
        var veiculoJson = JSON.stringify(veiculo);
        console.log('Valida Chassi do veiculo: ' + veiculo.modelo);
        return this.http.post(this.baseUrl + "/validaPlaca", veiculoJson, __WEBPACK_IMPORTED_MODULE_0__contantes__["a" /* Contantes */].httpOptions);
    };
    VeiculoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], VeiculoService);
    return VeiculoService;
}());



/***/ }),

/***/ "../../../../../src/app/veiculo/veiculo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Veiculo; });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    return Veiculo;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map