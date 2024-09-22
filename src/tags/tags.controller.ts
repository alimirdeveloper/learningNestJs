import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTagParamDto } from './dtos/get-tag-param.dto';
import { CreateTagDto } from './dtos/tag.create.dto';
import { PatchTagDto } from './dtos/tag.patch.dto';

@Controller('tags')
@ApiTags('Tags')
export class TagsController {

    @Get('/:id?')
    @ApiResponse({
        status: 200,
        description: 'Get the tag successfulyF'
    })
    @ApiOperation({
        summary: 'get tag'
    })
    public getTag(@Param() getTagParamDto: GetTagParamDto) {
        console.log('getTagParamDto : ', getTagParamDto)
    }



    @Post()
    @ApiOperation({
        summary: 'creates new tag'
    })
    @ApiResponse({
        status: 200,
        description: "tag created successfuly"
    })
    @ApiBody({
        type: CreateTagDto,
        description: "new Tag item"
    })
    public createTag(@Body() createTag: CreateTagDto) {
        console.log('createTag :', createTag);
    }

    @Patch()
    @ApiOperation({
        summary: "updates specific tag"
    })
    @ApiBody({
        type: PatchTagDto,
        description: " tag item"
    })
    public patchTag(@Body() patchTagDto: PatchTagDto) {
        console.log('patchTagDto : ', patchTagDto);
    }
}
