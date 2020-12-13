Este projeto é uma aplicação web com o acervo de obras de [Allan Kardec](https://pt.wikipedia.org/wiki/Allan_Kardec).

## :rocket: Tecnologias ##
Este projeto é desenvolvido com as seguintes tecnoogias:

- [Next.js](https://nextjs.org/): [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [Typescript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [VSCode](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :smiley: Começando ##

Primeiro, rode o servidor de desenvolvimento:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Você pode começar editando a página ao modificar `pages/index.js`. A página atualiza automáticamente conforme você vai editando.

## :books: Aprenda Mais ##

Para aprender mais sobre Next.js, de uma olhada nas seguintes fontes:

- [Documentação Next.js](https://nextjs.org/docs) - Aprenda sobre características e API's de Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode verificar o [repositório no GitHub do Next.js](https://github.com/vercel/next.js/) - comentários e contribuições serão bem vindas!

## Deploy na Vercel

A forma mais simples de fazer o deploy de Next.js é utilizando a [Plataforma Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos mesmos criadores do Next.js.

Verifique nossa [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

> **Clique na imagem para ver o deploy atual**
<p align="center">
    <a href="https://allankardec2.vercel.app/" target="_blank"> 
        <img alt="Allan Kardec" src="/public/assets/img/logos/logo.png" >
    </a>
</p>

>

## Setup do projeto

Esse Projeto é baseado no video:

- [Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components](https://www.youtube.com/watch?v=1nVUfZg2dSA)

>

## *Checklist para subir o código*

1. Ir na master pois é preciso verficar se tem código novo e baixa-los para deixar tudo compátivel.
```
$git checkout master`
$git pull
```
2. Voltar para a feature que estava trabalhando
```
$git checkout nome_da_feature
```
3. É necessário dar um merge para juntar o código da master com a sua feature. e caso ocorra algum problema resolver os conflitos.
```
$git merge master
```
4. Agora a feature esta pronta para subir, então é necessário abrir uma release olhando o x.y.z.
```
$git checkout -b release/x.y.z
```
5. Atualizar no package.json para a versão da release.
6. Fazer um commit para subir essa alteração
```
$git add .
$git commit -m "release x.y.z"
```
7. Enviar essa branche
```
$git push --set-upstream origin release/x.y.z
```
8. Para fazer o Pull Request entra no site do github e clica em: compare && pull request
9. Coloca alguém para dar review, coloca quem participou das alterações como assigners, coloca a label e o projeto. Coloca algum commentário dizendo o que foi feito e clica em create pull request.
10. Caso seja aceita, edita a tag da branch master para ficar de acordo com a release. A tag agora deve ser **x.y.z**.

>

Desenvolvido por [Pedro Duarte](https://github.com/phdduarte), [Alifer Duarte](https://github.com/aliferds), [Pedro Carvalho](https://github.com/pedropas21) e [Marcus Lamounier](https://github.com/marcuslamounier).