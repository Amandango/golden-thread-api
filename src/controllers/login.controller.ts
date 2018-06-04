import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from "../models/login";
import { WSAEUSERS } from "constants";

export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {
  }

  @post("/login")
  async login (@requestBody() login: Login) {
    var users = await this.userRepo.find();
    var email = login.email;
    var password = login.password;
    for (var i=0; i < users.length; i++) {
      var user = users[i];
      if(email == user.email && password == user.password) {
        return "Successful!"
      }
      
    }
  } 
}
