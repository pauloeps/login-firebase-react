# Login Firebase React

Login utilizando o Firebase como backend e React como frontend. Baseado no vídeo: https://www.youtube.com/watch?v=PKwu15ldZ7k 

Para rodar, é necessário cirar um arquivo que ficará na raiz do projeto chamado `.env.local`. Ele deve ter o seguinte formato:

```
REACT_APP_FREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGIN_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

Onde depois do `=` você deve colocar os parâmetros de configuração do firebase. Esse arquivo ficará local na sua máquina e será ignorado pelo git.