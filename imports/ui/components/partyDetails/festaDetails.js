import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import FestasAPI from '../../../api/FestasAPI';


import templateUrl from './festaDetails.html';

class FestaDetails {
    constructor($stateParams, $scope, $reactive, FestasAPI){
        'ngInject';
        $reactive(this).attach($scope);

        this.festaId = $stateParams.festaId;
        this.helpers({
            festa(){
                console.log(this.festaId);
                return FestasAPI.getById(this.festaId);
            }

        });

        this._FestasAPI = FestasAPI;
    }

    update(){

        this._FestasAPI.update(this.festa);
    }



}

const name = 'festaDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  FestasAPI.name
]).component(name, {
  templateUrl,
  controllerAs: name,
  controller: FestaDetails
})
.config(config)
.run(run);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('festaDetails',{
        url:'/festas/:festaId',
        template:'<festa-details></festa-details>',
        resolve:{
            currentUser($q){
                if(!!Meteor.userId()){
                    return $q.resolve();
                }else{
                    return $q.reject('AUTH_REQUIRED');
                }
            }
        }
    });
}


function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('festas');
      }
    }
  );
}
