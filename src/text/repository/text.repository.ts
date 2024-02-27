import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service"; 
import { CreateTextDto } from "../dto/text.dto";
@Injectable()
class TextRepository {
  constructor(private prisma: PrismaService) {}
  
  async createText(data: CreateTextDto) {
    return await this.prisma.text.create({
      data:{
        text: data.text,
        isFamous: data.isFavorite
      }
    })
  }
}

export { TextRepository }
