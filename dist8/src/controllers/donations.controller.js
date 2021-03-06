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
const donations_repository_1 = require("../repositories/donations.repository");
const donations_1 = require("../models/donations");
const charities_repository_1 = require("../repositories/charities.repository");
let DonationsController = class DonationsController {
    constructor(donationsRepo, charitiesRepo) {
        this.donationsRepo = donationsRepo;
        this.charitiesRepo = charitiesRepo;
    }
    async findDonationsByUser(userId) {
        return await this.donationsRepo.find({ where: { userId: userId } });
    }
    async getAllDonations() {
        return await this.donationsRepo.find();
    }
    async makeDonation(donation) {
        return await this.donationsRepo.create(donation);
    }
    async findCharitiesByUser(userId) {
        var donations = await this.donationsRepo.find({ where: { userId: userId } });
        var userCharityIds = [];
        for (var i = 0; i < donations.length; i++) {
            userCharityIds.push(donations[i].charityId);
        }
        var userCharityInfo = [];
        for (var i = 0; i < userCharityIds.length; i++) {
            var intermediateCharity = await this.charitiesRepo.findOne({ where: { id: userCharityIds[i] } });
            userCharityInfo.push(intermediateCharity);
        }
        {
            return userCharityInfo;
        }
    }
    async findDonationsByCharity(charityId) {
        return await this.donationsRepo.find({ where: { charityId: charityId } });
    }
};
__decorate([
    rest_1.get('/donations/{userId}'),
    __param(0, rest_1.param.query.number('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "findDonationsByUser", null);
__decorate([
    rest_1.get('/allDonations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "getAllDonations", null);
__decorate([
    rest_1.post('/donations'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donations_1.Donations]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "makeDonation", null);
__decorate([
    rest_1.get('/donations/{userId}/charityId'),
    __param(0, rest_1.param.query.string('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "findCharitiesByUser", null);
__decorate([
    rest_1.get('/donations/{charityId}'),
    __param(0, rest_1.param.query.number('charityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "findDonationsByCharity", null);
DonationsController = __decorate([
    __param(0, repository_1.repository(donations_repository_1.DonationsRepository.name)),
    __param(1, repository_1.repository(charities_repository_1.CharitiesRepository.name)),
    __metadata("design:paramtypes", [donations_repository_1.DonationsRepository,
        charities_repository_1.CharitiesRepository])
], DonationsController);
exports.DonationsController = DonationsController;
//# sourceMappingURL=donations.controller.js.map