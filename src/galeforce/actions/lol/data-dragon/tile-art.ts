import Action from '../../action';
import { ENDPOINTS } from '../../../../riot-api';
import SubmoduleMap from '../../../interfaces/submodule-map';
import { TakesSkin, TakesChampion } from '../../mixins';

const BaseAction = TakesSkin(
    TakesChampion(
        Action,
    ),
);

export default class GetDataDragonTileArt extends BaseAction<Buffer> {
    constructor(submodules: SubmoduleMap) {
        super(submodules);
        this.payload.endpoint = ENDPOINTS.LOL_DATA_DRAGON.TILE_ART;
        this.payload.type = 'lol-ddragon-buffer';
        this.payload.method = 'GET';
    }
}
