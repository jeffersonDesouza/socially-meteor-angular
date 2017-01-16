import { Festas } from '../../../collections/parties';

Meteor.methods({ 
    insert:function(evento){
        Festas.insert(angular.copy(evento));
    }
});