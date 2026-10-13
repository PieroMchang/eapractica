import { BaseApi } from "../../shared/infrastructure/base-api.js";
import { BaseEndpoint } from "../../shared/infrastructure/base-endpoint.js";

const collectionEndpointPath = import.meta.env.VITE_COLLECTION_ENDPOINT_PATH;
const historicalObjectsEndpointPath = import.meta.env.VITE_HISTORICAL_OBJECTS_ENDPOINT_PATH;

/**
 * Collection API Service.
 * @summary Manages HTTP requests to local json-server endpoints for collection.
 * @author Piero Francisco Montes Chang
 */
export class CollectionApi extends BaseApi {
    #collectionEndpoint;
    #historicalObjectsEndpoint;

    constructor() {
        super();
        this.#collectionEndpoint = new BaseEndpoint(this, collectionEndpointPath);
        this.#historicalObjectsEndpoint = new BaseEndpoint(this, historicalObjectsEndpointPath);
    }

    getCollections() { return this.#collectionEndpoint.getAll(); }
    getCollectionById(id) { return this.#collectionEndpoint.getById(id); }

    getHistoricalObjects() { return this.#historicalObjectsEndpoint.getAll(); }
    createHistoricalObject(resource) { return this.#historicalObjectsEndpoint.create(resource); }
    updateHistoricalObject(resource) { return this.#historicalObjectsEndpoint.update(resource.id, resource); }
    deleteHistoricalObject(id) { return this.#historicalObjectsEndpoint.delete(id); }
}