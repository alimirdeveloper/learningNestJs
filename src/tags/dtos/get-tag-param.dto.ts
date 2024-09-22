import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetTagParamDto {
    @ApiPropertyOptional({
        description: 'Get Specific Tag by id',
        example: 1234
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id: number
}