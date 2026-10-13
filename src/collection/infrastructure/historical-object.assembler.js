import {HistoricalObject} from '../domain/model/historical-object.entity.js';

/**
 * Historical Object Assembler
 * @summary creates assembler 2
 * @author Piero Francisco Montes Chang
 *
 */


export class HistoricalObjectAssembler{

    static toEntityFromResource(resource){
        return new HistoricalObject({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status!==200){
            console.error(`${response.status},${response.statusText}`);
            return [];
        }
        const resources = response.data instanceof Array? response.data : response.data['historicalobjects'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}