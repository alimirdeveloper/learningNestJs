import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreateTagDto } from "./tag.create.dto";


export class PatchTagDto extends PartialType(CreateTagDto) {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({
        description: 'id of existing tag',
        type: 'number'
    })
    id: number
}