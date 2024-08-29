## win-on-earth-webui
Front end implementation for Windows on Earth website

## Development

Run the dev server:
```bash
npm i
npm run dev
```

Go to [http://localhost:3000/](http://localhost:3000/) to see the current progress for the web UI

## Docker
To build the production image:
```bash
make build-production
```

To run the production container:
```bash
make start-production
```

To stop the production container:
```bash
make stop-production
```

Versions used:
- npm v10.7.0
- node v20.15.0
- NextJS v14.2.4
- clsx 2.1.1  
- @nextui-org/react v2.4.6
- lodash v4.17.21