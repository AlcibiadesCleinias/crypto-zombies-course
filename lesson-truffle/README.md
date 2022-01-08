# Work with Truffle

## Requirement
Use node version v14.18.1

Init project
```
truffle init
```

Compile sol to json, before check the pragma version in `truffle-config.js`.
```bash
truffle compile
```

Publish on rinkeby (before setup `truffle-config.js` accordingly)
```bash
truffle migrate --network rinkeby
```

