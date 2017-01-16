import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './navigation.html';

class Navigation {
    constructor() {

    }
}

name = 'navigation';

export default angular.module(name,[
    angularMeteor
]).component(name,{
    templateUrl,
    controllerAs: name,
    controller: Navigation
});
