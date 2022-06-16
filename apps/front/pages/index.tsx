import { Article } from '@nx-nestjs-nextjs-reactadmin/model';

export function Index() {
 
  const article = new Article()
  article.title = "My title"
  article.content = "My content"

  return (
    <div>
      <div>{article.title}</div>
      <div>{article.content}</div>
    </div>
  );
}

export default Index;
