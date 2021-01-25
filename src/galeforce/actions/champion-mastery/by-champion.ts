import { Action } from '../action';
import { Payload } from '../payload';
import { ChampionMasteryInterface } from '../../interfaces/dto';
import { ENDPOINTS, LeagueRegion } from '../../../riot-api';
import { SubmoduleMapInterface } from '../../interfaces/submodule-map';
import { TakesChampionId, TakesRegion, TakesSummonerId } from '../mixins';

const BaseAction =
TakesSummonerId(
    TakesChampionId(
        TakesRegion<LeagueRegion>(
            Action)));

export class GetMasteryByChampion extends BaseAction<ChampionMasteryInterface> {
    constructor(SubmoduleMap: SubmoduleMapInterface) {
        super(SubmoduleMap);
        this.payload.endpoint = ENDPOINTS.CHAMPION_MASTERY.SUMMONER_ID.CHAMPION;
        this.payload.type = 'lol';
        this.payload.method = 'GET';
    }
}