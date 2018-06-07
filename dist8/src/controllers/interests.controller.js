"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const interests_repository_1 = require("../repositories/interests.repository");
const interests_1 = require("../models/interests");
const interestUserMap_repository_1 = require("../repositories/interestUserMap.repository");
let InterestsController = class InterestsController {
    constructor(interestsRepo, interestUserMapRepo) {
        this.interestsRepo = interestsRepo;
        this.interestUserMapRepo = interestUserMapRepo;
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
    async selectInterests(interest) {
        return await this.interestsRepo.create(interest);
    }
};
__decorate([
    rest_1.post('/interests'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interests_1.Interests]),
    __metadata("design:returntype", Promise)
], InterestsController.prototype, "selectInterests", null);
InterestsController = __decorate([
    __param(0, repository_1.repository(interests_repository_1.InterestsRepository.name)),
    __param(1, repository_1.repository(interestUserMap_repository_1.InterestUserMapRepository.name)),
    __metadata("design:paramtypes", [interests_repository_1.InterestsRepository,
        interestUserMap_repository_1.InterestUserMapRepository])
], InterestsController);
exports.InterestsController = InterestsController;
//# sourceMappingURL=interests.controller.js.map