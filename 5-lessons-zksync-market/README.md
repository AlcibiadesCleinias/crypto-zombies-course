## Start
```
docker build -t zksync-market .
docker container run --rm -v $(pwd):/opt --env-file ./.env --name zksync-market -e -t zksync-market
```

To spin apps: market (Bob) and buyer (Alice) accrodingly:
```bash
docker exec -ti zksync-market sh -c "cd src && node bob.js"
docker exec -ti zksync-market sh -c "cd src && node alice.js"
```
