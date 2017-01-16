import angular from 'angular';
import angularMeteor from 'angular-meteor';
import FestasAPI from '../../../api/FestasAPI';

import templateUrl from './festaAdd.html';

class FestaAdd {

    constructor($scope, FestasAPI){
        'ngInject';
        this.FestasAPI = FestasAPI;
        this.$scope = $scope;
    }

    saveEvento(novoEvento){
        

        this.FestasAPI.insert(novoEvento);
        delete this.$scope.novoEvento;
    }


}

const name = 'festaAdd';

export default angular.module(name,[
    angularMeteor,
    FestasAPI.name
]).component(name,{
    templateUrl,
    controllerAs: name,
    controller:FestaAdd
});
