import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private _usersRepository: Repository<User>
    ) { }

    public async createUser(createUserDto: CreateUserDto) {

        // check is user exists with same email

        // const exisingUser = await this._usersRepository.findOne({
        //     where: { email: createUserDto.email }
        // });
        // handle exception

        // create a new user
        let newUser = this._usersRepository.create(createUserDto); // this line not save on databse as of now
        newUser = await this._usersRepository.save(newUser);

        return newUser;
    }
}
