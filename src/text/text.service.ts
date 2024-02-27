import { Injectable } from '@nestjs/common';
import { TextRepository } from './repository/text.repository';
import { CreateTextDto } from './dto/text.dto';
import { LinksService } from 'src/links/links.service';
@Injectable()
export class TextService {
  constructor(private readonly textRepository: TextRepository,
              private readonly linksSerivce: LinksService) {}

  async createText(data: CreateTextDto) {
    const { text } = await this.textRepository.createText(data);
    const link = this.linksSerivce.hashLink(text);
    return link
  }

  async viewText(textId: string) {
  //  const text = await this.linksSerivce.unhashLink(textId);
  }
}
