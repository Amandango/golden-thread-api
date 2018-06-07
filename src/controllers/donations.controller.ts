import { get, post, requestBody, HttpErrors, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { DonationsRepository } from '../repositories/donations.repository';
import { Donations } from '../models/donations';
import { Charities } from '../models/charities';
import { CharitiesRepository } from '../repositories/charities.repository';

export class DonationsController {
  constructor(
    @repository(DonationsRepository.name) private donationsRepo: DonationsRepository,
    @repository(CharitiesRepository.name) private charitiesRepo: CharitiesRepository
  ) {
  }

  @get('/donations/{userId}')
  async findDonationsByUser(
    @param.query.number('userId') userId: number,
  ) {
    return await this.donationsRepo.find({ where: { userId: userId } });
  }

  @get('/allDonations')
  async getAllDonations() {
    return await this.donationsRepo.find();
  }

  @post('/donations')
  async makeDonation(@requestBody() donation: Donations) {
    return await this.donationsRepo.create(donation);
  }

  @get('/donations/{userId}/charityId')
  async findCharitiesByUser(@param.query.string('userId') userId: number, ) {
    var donations = await this.donationsRepo.find({ where: { userId: userId } });
    var userCharityIds: number[] = [];
    for (var i = 0; i < donations.length; i++) {
      userCharityIds.push(donations[i].charityId)
    }
    var userCharityInfo: Charities[] = [];
    for (var i = 0; i < userCharityIds.length; i++) {
      var intermediateCharity = await this.charitiesRepo.findOne({ where: { id: userCharityIds[i] } });
      userCharityInfo.push(intermediateCharity);
    }
    {
      return userCharityInfo
    }
  }

  @get('/donations/{charityId}')
  async findDonationsByCharity(
    @param.query.number('charityId') charityId: number,
  ) {
    return await this.donationsRepo.find({ where: { charityId: charityId } });
  }



}