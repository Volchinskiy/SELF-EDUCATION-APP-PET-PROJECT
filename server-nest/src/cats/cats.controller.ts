import {
  Controller,
  Get,
  All,
  Post,
  Req,
  HttpCode,
  Redirect,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get(':id')
  f1(@Param() params): string {
    return `This action returns a #${params.id} cat`;
  }

  @Get()
  f2(@Req() request: Request): string {
    const rr = request.body.rr;
    return rr
      ? `This action returns all cats ${rr}`
      : 'This action returns all cats';
  }

  @Post()
  f3(@Body() CreateCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }
}
