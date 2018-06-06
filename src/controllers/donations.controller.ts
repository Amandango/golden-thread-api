import { get, post, requestBody, HttpErrors, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { DonationsRepository } from '../repositories/donations.repository';
import { Donations } from '../models/donations';
import { User } from '../models/user';

export class DonationsController {
  constructor(
    @repository(DonationsRepository.name) private donationsRepo: DonationsRepository
  ) {
  }

  @get('/donations/{userId}')
  async findDonationsByUser(
    @param.query.string('userId') userId: number,
  ) {
    return await this.donationsRepo.find({ where: { userId: userId } });
  }

  @post('donations')
  async makeDonation(@requestBody() donation: Donations) {
    return await this.donationsRepo.create(donation);
  }

  @get('/donations/{userId}/{charityId}')
  async findCharitiesByUser(
    @param.query.string('userId') userId: number,
    @param.query.string('charityId') charityId: number,
  ) {
    return await this.donationsRepo.find({ 
      where: { 
        and: [
          { userId: userId }, 
          { charityId: charityId }
        ],
      }
    })
  }
}


