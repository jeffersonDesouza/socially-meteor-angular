import { Mongo } from 'meteor/mongo';

export const Festas = new Mongo.Collection('festas');

Festas.allow({ 
    insert: function(userId, festa) {

        return userId && festa.dono === userId; 
    }, 
    update: function(userId, festa, fields, modifier) { 
        return userId && festa.dono === userId;  
    }, 
    remove: function(userId, festa) { 
        return userId && festa.dono === userId; 
    } 
});
