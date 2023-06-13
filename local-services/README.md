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




https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
https://spring.io/guides/gs/rest-service-cors/
https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js
https://www.javaguides.net/2020/07/react-js-fetch-api-to-consume-spring.html
https://www.youtube.com/watch?v=TOHBWWREVcA
https://www.tutussfunny.com/registation-form-using-react-js-and-spring-boot/


https://snack.expo.dev/?platform=web
https://snack.expo.dev/?platform=android
https://zetcode.com/springboot/controlleradvice/
https://github.com/RameshMF/React-Hooks-Spring-Boot-CRUD-Full-Stack-App/blob/main/react-hooks-frontend/src/services/EmployeeService.js
https://reactjs.org/docs/jsx-in-depth.html#child-expressions
https://www.baeldung.com/spring-data-mongodb-tutorial
https://attacomsian.com/blog/http-requests-resttemplate-spring-boot
