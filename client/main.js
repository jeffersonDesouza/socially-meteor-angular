import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Festas } from '../collections/parties';

import FestasList from '../imports/ui/components/partiesList/partiesList';

angular.module('socially',[
    angularMeteor,
    FestasList.name
]);
