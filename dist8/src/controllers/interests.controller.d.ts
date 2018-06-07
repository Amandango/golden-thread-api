import { InterestsRepository } from '../repositories/interests.repository';
import { Interests } from '../models/interests';
import { InterestUserMapRepository } from '../repositories/interestUserMap.repository';
export declare class InterestsController {
    private interestsRepo;
    private interestUserMapRepo;
    constructor(interestsRepo: InterestsRepository, interestUserMapRepo: InterestUserMapRepository);
    selectInterests(interest: Interests): Promise<Interests>;
}
