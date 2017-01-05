import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Festas } from '../../collections/parties';

class FestasAPI {


    todas() {
        return Festas.find();
    }

    insert(evento){
        Festas.insert(angular.copy(evento));
    }

    remove(festa){
        Festas.remove({_id:festa._id});

    }
}

const name = 'FestasAPI';

export default angular.module(name,[
    angularMeteor
]).service(name, FestasAPI);
