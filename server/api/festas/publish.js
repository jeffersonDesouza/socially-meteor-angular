import { Meteor } from 'meteor/meteor';
import { Festas } from '../../../collections/parties';


Meteor.publish('festas', function() {
    const selector ={
        $or:[{
            public:true
        },{
            public:{
                $exists:true
            }
        },
        {
            $and:[{
                dono:this.userId
            },{
                dono:{
                    $exists:true
                }
            }]
        }]
    };

    return Festas.find(selector);
    
});