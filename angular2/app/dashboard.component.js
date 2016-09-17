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
var router_1 = require('@angular/router');
var pokemon_service_1 = require('./pokemon.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, pokemonService) {
        this.router = router;
        this.pokemonService = pokemonService;
        this.pokemons = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getPokemons()
            .then(function (pokemons) { return _this.pokemons = pokemons.slice(0, 3); });
    };
    DashboardComponent.prototype.gotoDetail = function (pokemon) {
        var link = ['/detail', pokemon.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, pokemon_service_1.PokemonService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map