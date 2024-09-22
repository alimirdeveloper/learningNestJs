

import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";
import { PartialType } from "@nestjs/mapped-types";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({
        description: "the id of the post that need to be updated",
        example: 1
    })
    id: number
}