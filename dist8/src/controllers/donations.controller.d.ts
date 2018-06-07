import { DonationsRepository } from '../repositories/donations.repository';
import { Donations } from '../models/donations';
import { Charities } from '../models/charities';
import { CharitiesRepository } from '../repositories/charities.repository';
export declare class DonationsController {
    private donationsRepo;
    private charitiesRepo;
    constructor(donationsRepo: DonationsRepository, charitiesRepo: CharitiesRepository);
    findDonationsByUser(userId: number): Promise<Donations[]>;
    getAllDonations(): Promise<Donations[]>;
    makeDonation(donation: Donations): Promise<Donations>;
    findCharitiesByUser(userId: number): Promise<Charities[]>;
    findDonationsByCharity(charityId: number): Promise<Donations[]>;
}
