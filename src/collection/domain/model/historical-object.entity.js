/**
 * use a class from de objects
 * @summary create Historical Object
 * @author Piero Francisco Montes Chang
 */
export class HistoricalObject{
    /**
     *
     * @param param0
     * @param param0.id
     * @param param0.name
     * @param param0.CoinId
     * @param param0.collectionTypeId
     * @param param0.yearProduction
     * @param param0.coinCollectionId
     * @param param0.summary
     * @param param0.legends
     * @param param0.price
     * @param param0.registeredAt
     */
    constructor({
                    id = null, name = '', CoinId = null, coinId = null, collectionTypeId = null,
                    yearProduction = 0, coinCollectionId = null, summary = '',
                    legends = '', price = 0, registeredAt = ''
                } = {}) {
        this.id = id;
        this.name = name;
        this.CoinId = CoinId ?? coinId;
        this.collectionTypeId = collectionTypeId;
        this.yearProduction = yearProduction;
        this.coinCollectionId = coinCollectionId;
        this.summary = summary;
        this.legends = legends;
        this.price = price;
        this.registeredAt = registeredAt;
    }
}