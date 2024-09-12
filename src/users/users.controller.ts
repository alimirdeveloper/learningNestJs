import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller(`users`)
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe,) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    console.log(`id :  and type is `, getUserParamDto);
    console.log(`page : ${page} and type  is ${typeof (page)}`);
    console.log(`limit : ${limit} and type  is ${typeof (limit)}`);
    return `You sent a get request to users endpoint`;
  }

  @Post()
  public createUsers(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto) { // nest
    console.log('request : ', createUserDto)
    return `you sent a post request to users endpoint`;
  }


  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
  }
}
