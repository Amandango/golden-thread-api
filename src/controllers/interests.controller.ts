import { get, post, requestBody, HttpErrors, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { InterestsRepository} from '../repositories/interests.repository';
import { Interests } from '../models/interests';
import { InterestUserMap } from '../models/interestUserMap';
import { InterestUserMapRepository } from '../repositories/interestUserMap.repository';

export class InterestsController {
  constructor(
    @repository(InterestsRepository.name) private interestsRepo: InterestsRepository,
    @repository(InterestUserMapRepository.name) private interestUserMapRepo: InterestUserMapRepository
  ) {
  }
  
  /*@get('/interestUserMap/{userId}') //Still working on this endpoint, it doesn't work currently
  async getInterestsByUserId(@param.path.number('userId') userId: number,) {
    var userInterests =  await this.interestUserMapRepo.findOne({where: {userId: userId}});
    var interestProfile: Interests[] = [];
    var allInterests = await this.interestsRepo.find();
    for (var i = 0; i < allInterests.length; i++) {
      let interestProfile = await this.interestsRepo.findOne({ where: { id: userInterests.interestId } });
    }
    {
      return interestProfile
    }
  }
  */

  @post('/interests')
  async selectInterests(@requestBody() interest: Interests) {
    return await this.interestsRepo.create(interest);
  }

}
