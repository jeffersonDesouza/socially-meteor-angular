import angular from 'angular';
import angularMeteor from 'angular-meteor';
import FestasAPI from '../../../api/FestasAPI';

import templateUrl from './partiesList.html';

class FestasList {
    constructor($scope, $reactive, FestasAPI){
        'ngInject';
        $reactive(this).attach($scope);

        this.helpers({
            festas(){
                return FestasAPI.todas();
            }
        });
    }
}

const name = 'festasList';

export default angular.module(name,[
    angularMeteor,
    FestasAPI.name
]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: FestasList
});
