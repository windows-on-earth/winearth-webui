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
If you want to build the Docker image, run the following command
```bash
docker build -t winearth-webui -f docker/production/Dockerfile .
```

Versions used:
- npm v10.7.0
- node v20.15.0
- NextJS v14.2.4
- clsx 2.1.1  
