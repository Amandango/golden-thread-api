import { DonationsRepository } from '../repositories/donations.repository';
import { Donations } from '../models/donations';
export declare class DonationsController {
    private donationsRepo;
    constructor(donationsRepo: DonationsRepository);
    findDonationsByUser(userId: number): Promise<Donations[]>;
    makeDonation(donation: Donations): Promise<Donations>;
    findCharitiesByUser(userId: number, charityId: number): Promise<Donations[]>;
}
