import angular from 'angular';
import angularMeteor from 'angular-meteor';
import FestasAPI from '../../../api/FestasAPI';
import FestaAdd from '../festaAdd/festaAdd';
import FestaRemove from '../festaRemove/festaRemove';

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
    FestasAPI.name,
    FestaAdd.name,
    FestaRemove.name
]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: FestasList
});
