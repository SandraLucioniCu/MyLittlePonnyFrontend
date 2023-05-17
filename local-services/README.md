# REALIZACIÓN DEL DESPLIEGUE

1.
```cmd
docker build -t /my-little-ponny-game-app .
```

```yml
version: '3.9'

services:
  react-game:
    container_name: react-game
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - "80:80"
```

pages:
https://mherman.org/blog/dockerizing-a-react-app/
https://collabnix.com/creating-your-first-react-app-using-docker/
https://app.diagrams.net/
https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/
https://spring.io/guides/tutorials/react-and-spring-data-rest/
https://www.npmjs.com/package/axios