import Action from '../../action';
import RiotAPIModule, { ENDPOINTS } from '../../../../riot-api';
import DatabaseInternal from '../../../databases/database';

class VerifyThirdPartyCode extends Action {
    private summonerId: string;

    private server: string;

    private verify: string;

    constructor(RiotAPI: RiotAPIModule, database: DatabaseInternal, server: string, summonerId: string, verify: string) {
        super(RiotAPI, database);
        this.server = server;
        this.summonerId = summonerId;
        this.verify = verify;
    }

    public async run(): Promise<boolean> {
        try {
            // We convert TPCData to a string because we can guarantee the result is of type string (as detailed by the Riot API docs).
            const TPCData: string = await this.RiotAPI.request(ENDPOINTS.THIRD_PARTY.CODE, { server: this.server, 'summoner-id': this.summonerId }).get() as unknown as string;
            return TPCData === this.verify;
        } catch (e) {
            return false; // If there was a query error, return false.
        }
    }
}

export default VerifyThirdPartyCode;
