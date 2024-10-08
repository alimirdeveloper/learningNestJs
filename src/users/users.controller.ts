import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';


@Controller(`users`)
@ApiTags('Users')
export class UsersController {

  constructor(
    private readonly userService: UsersService
  ) {

  }

  @Get('/:id?')
  @ApiOperation({
    summary: "Fetches of user which registered in application"
  })
  @ApiResponse({
    status: 200,
    description: "Users fetched successfully"
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: "The number of entries returned per query",
    example: 10
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: "The position of the page number that you want (start from zero)",
    example: 0
  })
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
    return this.userService.createUser(createUserDto)
  }

  @ApiQuery({
    type: 'PatchUserDto',
    description: 'user properties'
  })
  @ApiResponse({
    status: 200,
    description: "your particular user is updated"
  })
  @ApiOperation({
    summary: 'Updates existing user'
  })
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
  }
}
