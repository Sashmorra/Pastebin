import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
class LinksRepository {
  constructor(private prisma: PrismaService) {}

  async createLink(link: string) {
    return await this.prisma.linkToText.create({
      data:{
        data: link
      }
    })
  }
  async getLinkData(link: string) {
    return await this.prisma.linkToText.findMany({
      where: {
        data: link
      }
    })
  }
}


export { LinksRepository }
