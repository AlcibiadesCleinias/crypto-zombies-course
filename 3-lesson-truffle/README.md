# Work with Truffle

## Requirement
- Use node version v14.18.1
- `chai` installed (`npm -g install chai && npm install --save-dev chai`)
- loop provider installed (`npm install loom-truffle-provider@0.15.0`)

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

Deploy to Basenet - merely read a bunch of txt https://loomx.io/developers/en/deploy-loom-mainnet.html#deploying-to-basechain

