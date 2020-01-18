# Semana-OmniStack-10

Este repositorio e dedicado ao desenvolvimento de codigo para os desafios da semana OmniStack de numero 10 desenvolvida pela RocketSeat 

No qual sera utilizado, JavaScript, React, ReactNative e NodeJS, como o objetivo de criar um software de relacionamento entre dev's, capaz de exibir a localizacao deles ao redor do mundo filtrar baseado em tecnologias diferentes de cada dev e exibir o seu perfil no Github.

### Utilizacao

Este projeto foi desenvolvido de forma local, para sua utilizacao e necessario rodar os seguintes comandos via terminal em cada pasta.

#### Backend

Utilizando mongoDB para salvar e gerenciar os dados e a pesquisa

```
yarn dev
```

#### Web

Responsavel para o gerenciamento de usuarios, utilizando a api do github para preencher informacoes de cada usuario recem cadastrado.

```
yarn start
```

or

```
npm start
```

#### Mobile

Resposavel por visualizar e pesquisar dev's, sendo atualizado em tempo real em relacao ao cadastro via web

```
expo start
```

or

```
npm start
```

## Vizualizacao

[1] - App sem devs

![](/Screenshots/empty%20map.jpg)
 
[2] - Vizualizacao dos devs no mapa

![](/Screenshots/devs%20at%20the%20map.jpg)

[3] - Popup de informacao sobre o dev

![](/Screenshots/Dev%20popup.jpg)

[4] - Vizualizacao do Github do dev em navegador dentro do app

![](/Screenshots/github%20perfil.jpg)

[5] - Cadastro do dev dentro da interface web

![](/Screenshots/Insert%20new%20user.mp4)

[6] - Pesquisa de devs baseado na tecnologia

![](/Screenshots/search%20by%20tech.jpg)
