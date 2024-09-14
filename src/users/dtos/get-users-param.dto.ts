import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto {
    @ApiPropertyOptional({
        description : "Get User specific id",
        example:1234
    })
    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    id?: number;
}