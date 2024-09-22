import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostParamDto } from './dtos/get-post-param.dto';

/**
 * class to control posts routes
 */
@Controller('posts')
@ApiTags('Posts')
export class PostController {
    /**
     * creates new post
     * @param createPostDto 
     */
    @Post()
    @ApiResponse({
        status: 201,
        description: "You get a 201 response if your post is created successfully"
    })
    @ApiOperation({
        summary: "Creates a new blog post"
    })
    public createPost(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto);
    }


    @Patch()
    @ApiOperation({
        summary: "Updates an existing blog postg"
    })
    @ApiResponse({
        status: 200,
        description: "your particular post is updated"
    })
    UpdatePost(@Body() patchPostDto: PatchPostDto) {
        console.log(patchPostDto);
    }


    @Get('/:id?')
    @ApiResponse({
        status: 200,
        description: 'post fetch successfuly'
    })
    @ApiOperation({
        summary: 'Fetch  post'
    })
    public getPost(@Param() getPostParamDto: GetPostParamDto) {
        console.log('getPostParamDto : ', getPostParamDto);
    }
}

