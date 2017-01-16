import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import FestasList from '../partiesList/partiesList';
import Navigation from '../navigation/navigation';
import FestaDetails from '../partyDetails/festaDetails';


import templateUrl from './socially.html';

class Socially {}
const name = 'socially';

export default angular.module(name,[
    angularMeteor,
    uiRouter,
    'accounts.ui',
    FestasList.name,
    Navigation.name,
    FestaDetails.name
]).component(name,{
    templateUrl,
    controllerAs:name,
    controller:Socially
}).config(config);

function config($locationProvider, $urlRouterProvider) {
     'ngInject';
      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('/festas');
}
