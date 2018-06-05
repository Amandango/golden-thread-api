import { CharitiesRepository } from '../repositories/charities.repository';
import { Charities } from '../models/charities';
export declare class LoginController {
    private charitiesRepo;
    constructor(charitiesRepo: CharitiesRepository);
    allCharities(): Promise<Charities[]>;
}
