import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Festas } from '../../collections/parties';

class FestasAPI {
    todas() {
        return Festas.find();
    }
}

const name = 'FestasAPI';

export default angular.module(name,[
    angularMeteor
]).service(name, FestasAPI);
