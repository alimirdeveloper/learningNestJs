import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class PatchUserDto extends PartialType(CreateUserDto) {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({
        description: 'set it to find specific user',
        example: 1234
    })
    id: number
}