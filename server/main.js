import { Meteor } from 'meteor/meteor';
import { Festas } from '../collections/parties';


Meteor.startup(() => {


    if(!Festas.findOne()){

        let festas = [
            {
                name: 'Metal law',
                description: 'Metal all the night'
            },
            {
                name: 'MOA',
                description: 'Big metal festival'
            },
            {
                name: 'Basil Metal',
                description: 'Metal nacional'
            },
            {
                name: 'Movimento do Metal Nativo',
                description: 'Metal nativo'
            },
            {
                name: 'Metal Sertão',
                description: 'Metal nativo'
            }
        ];


        festas.forEach(festa => Festas.insert(festa));


    }


});
