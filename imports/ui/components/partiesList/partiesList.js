import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
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
    uiRouter,
    FestasAPI.name,
    FestaAdd.name,
    FestaRemove.name
]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: FestasList
}).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('festas',{
        url:'/festas',
        template:'<festas-list></festas-list>'
    });
}
