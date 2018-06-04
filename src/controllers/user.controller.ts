import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from "../models/login";

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {
  }

  @get('/user')
  async getAllUsers(): Promise<Array<User>> { 
    return await this.userRepo.find(); 
  }

  @post("/user/:id")
  async postUserId (@requestBody() id: number) {
    var users = await this.userRepo.find();
    for (var i=0; i < users.length; i++) {
      var user = users[i];
      if(id == user.id) {
        return [
          user.username,
          user.email,
          user.password
        ]
        }
      }
  }
}