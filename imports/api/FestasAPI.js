import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Festas } from '../../collections/parties';

class FestasAPI {

    constructor(){
        Meteor.subscribe('festas');
    }

    todas() {
        return Festas.find();
    }

    getById(festaId){
        return Festas.findOne({_id:festaId});
    }

    insert(evento){
        //Meteor.call('insert', evento);
        evento.dono = Meteor.userId();
        Festas.insert(angular.copy(evento));
    }

    remove(festa){
        Festas.remove({_id:festa._id});
    }

    update(festa){
        Festas.update({_id:festa._id}, {$set:{
            name: festa.name,
            description:festa.description,
            public:festa.public

        }});
    }




}

const name = 'FestasAPI';

export default angular.module(name,[
    angularMeteor
]).service(name, FestasAPI);
