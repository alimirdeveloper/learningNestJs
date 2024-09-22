import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateTagDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'title of the tag',
        type: 'string'
    })
    title: string;
}