<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png?raw=true" width="150px" align="right" />

# challenge Podcast
In this challenge I solve the proposed statement, which consists of creating a webapp that allows users to listen to podcast music

Below, I leave you the link to visit a small mockup that I have made in figma to use as a design guide.
[Figma Mockup](https://www.figma.com/file/sXI0I2XZaDtfcHmUze2e82/Challenge-PODCAST?node-id=0%3A1)

In this project I have applied clean architecture, and other good practices to maintain a clean code.

**Readme sections**

- [Decitions](#exchange-provider)
- [Stack](#stack)
- [Configuration](#configuration)
- [Commands](#commands)
- [Architecture](#architecture)

### Exchange provider:
For this challenge, I was instructed to use an itunes url and obtain the list of the top 100 podcasts, and additionally read the details of the podcasts through xml calls and then transform them into json format.

A main page was designed that contains the 100 podcasts, where you can use a filter to search for the podcast by title or by author, then you can explore the details of each podcast and obtain the episodes, title and duration of each one.

And finally navigate to the playback of the selected episode

## **Stack - Libraries**:
- **Nodejs v16.17**
- React/Typescript
- React Query
- Axios
- xml-js
- Sass
- express.js

## **Configuration**:
The project uses .env files to handle the configuration, the format is as follows.

```console
#Itunes Top Podcast URL
REACT_APP_ITUNES_URL=https://itunes.apple.com/us/rss/toppodcasts

#Numbers of podcast to get
REACT_APP_PODCAST_LIMIT=100

#Genre 
REACT_APP_PODCAST_GENRE=1310

#URL to get details of a selected podcast 
REACT_APP_PODCAST_DETAIL_URL=https://itunes.apple.com/lookup?

#Proxy to evit cors blocked
REACT_APP_PROXY=https://api.allorigins.win/get?

#Cache time to React Query --- this represent is 24hours
REACT_APP_CACHE_TIME=86400000

```

## **Commands**:
These are several useful commands to run the project.

- Install Dependecies:
```console
adelysbelen@challenge:~$ npm install
```

- Run unit test:
```console
adelysbelen@challenge:~$ npm test
```

- Run app local:
```console
adelysbelen@challenge:~$ npm start
```

- Build app:
```console
adelysbelen@challenge:~$ npm run build:client
```

- Run server app:
```console
adelysbelen@challenge:~$ npm run server
```

## **Architecture**:
The project is divided into several layers, each with different responsibilities. **applying clean architecture**

- **Adapters**: data transfer object to each responsability component, and Layout components
- **Infra**: Libraries with external's dependencies
- **Services (in components)**: in this layer apply services to get data using depencies external. 
- **BaseComponents**: Reusable components in the application
- **Utilis:** Cross functionality.

