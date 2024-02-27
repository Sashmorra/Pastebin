import { Controller, Post, Body, Get, Req, Param } from '@nestjs/common';
import { TextService } from './text.service';
import { CreateTextDto } from './dto/text.dto';

@Controller('text')
export class TextController {
  constructor(private textService: TextService) {}

 @Post()
 createText(@Body() data: CreateTextDto){
    const link = this.textService.createText(data);
    return link
  }

  @Get('/:id')
  viewText(@Param('id') id: string) {
    const text = this.textService.viewText(id);
    return text
  }
}
