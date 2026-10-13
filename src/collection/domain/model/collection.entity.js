/**
 * @summary Creates the class Collection
 * @author Piero Francisco Montes Chang
 */

export class Collection {
    /**
     *
     * @param param0
     * @param param0.id id of collection
     * @param param0.title title of collection
     * @param param0.country city
     * @param param0.state status of collection
     * @param param0.collectionTypeId type
     * @param param0.size size of the collection
     */

    constructor({id=null, title='',country='', state='', collectionTypeId=null,size=0}={}) {

        this.id = id;
        this.title = title;
        this.country = country;
        this.state = state;
        this.collectionTypeId = collectionTypeId;
        this.size = size;
    }
}