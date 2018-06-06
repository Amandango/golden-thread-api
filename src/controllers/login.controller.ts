import { get, post, requestBody, HttpErrors } from "@loopback/rest";
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

  @post('/login')
  async loginUser (@requestBody() user: User): Promise<User> {
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email } ,
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    return await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      }
    })
  } 
}
