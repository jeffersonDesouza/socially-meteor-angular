import angular from 'angular';
import angularMeteor from 'angular-meteor';
import FestasList from '../partiesList/partiesList';

import templateUrl from './socially.html';

class Socially {}
const name = 'socially';

export default angular.module(name,[
    angularMeteor,
    FestasList.name
]).component(name,{
    templateUrl,
    controllerAs:name,
    controller:Socially
});
