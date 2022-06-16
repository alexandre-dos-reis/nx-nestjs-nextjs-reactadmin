import { Injectable } from '@nestjs/common';
import { Article } from '@nx-nestjs-nextjs-reactadmin/model';

@Injectable()
export class AppService {
  getData(): { article: Article } {
    const article = new Article()
    article.title = "My title"
    article.content = "My content"
    return { article };
  }
}
