import { Article } from "@nx-nestjs-nextjs-reactadmin/model";

export function App() {

  const article = new Article()
  article.title = "My title"
  article.content = "My content"

  return (
    <>
      
      <div>{article.title}</div>
      <div>{article.content}</div>
    </>
  );
}

export default App;
