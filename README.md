#### Step 1: 
install: yarn
#### Step 2:
run server : yarn run dev-server
#### Step 3:
run app: yarn start
#### Step 4:
goto http://localhost:3000

#### test:
yarn test


Cors off in package.json:  "dev-server": "json-server -p 8080 --nc json/sample-data.json"
cors on so sharing enabled:  "dev-server": "json-server -p 8080 json/sample-data.json"