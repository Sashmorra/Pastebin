import { Injectable } from '@nestjs/common';
import { LinksRepository } from './repository/links.repository';
import { hash,  } from 'bcrypt';

@Injectable()
class LinksService {
  constructor(private linksRepository: LinksRepository) {}
  
  async hashLink(text: string) {
    const hashLink = await hash(text, Number(process.env.SALT) || 10);
    const link = `http://${process.env.HOST}/text/:${hashLink}`;
    
    await this.linksRepository.createLink(link);
    return link
  }

  //async unHashLink(hashId: string) {
    //const id = Number(unhash(hashId, Number(process.env.SALT) || 10)); 
    //const text = await this.linksRepository.getLink(id);
  //}
}

export { LinksService };
