// Alice wants to deposit to zksync
// transfer smth to bob
// withdraw after to eth again

(async () => {
  const ethers = require('ethers')
  const zksync = require('zksync')
  const utils = require('./utils')
  const token = process.env.TOKEN || "ETH"
  const amountToDeposit = '0.05'  // 6
  const amountToTransfer = '0.02'  // 2
  const amountToWithdraw = '0.002'  // 2
  const registerFee = 0.001

  const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME)
  const ethersProvider = await utils.getEthereumProvider(ethers, process.env.NETWORK_NAME)
  console.log('Creating a new Rinkeby wallet for Alice')
  const aliceRinkebyWallet = new ethers.Wallet(process.env.ALICE_PRIVATE_KEY, ethersProvider)
  console.log(`Alice's Rinkeby address is: ${aliceRinkebyWallet.address}`)

  console.log('Creating a zkSync wallet for Alice')
  const aliceZkSyncWallet = await utils.initAccount(aliceRinkebyWallet, zkSyncProvider, zksync)

  const tokenSet = zkSyncProvider.tokenSet
  const aliceInitialRinkebyBalance = await aliceZkSyncWallet.getEthereumBalance(token)
  console.log(`Alice's initial balance on Rinkeby is: ${tokenSet.formatToken(token, aliceInitialRinkebyBalance)}`)

  try {
    await aliceZkSyncWallet.approveERC20TokenDeposits(token)
  } catch (error) {
    console.log("Could not register erc20 token, pass it...")
    console.log(error)
  }

  console.log('Depositing')
  await utils.depositToZkSync(aliceZkSyncWallet, token, amountToDeposit, tokenSet)
  await utils.displayZkSyncBalance(aliceZkSyncWallet, tokenSet)
  await utils.registerAccount(aliceZkSyncWallet, token, tokenSet, registerFee)

  console.log('Transferring')
  const transferFee = await utils.getFee('Transfer', process.env.BOB_ADDRESS, token, zkSyncProvider, tokenSet)
  console.log('Transfer fee = ', transferFee) // specify receiver instead of sender
  await utils.transfer(aliceZkSyncWallet, process.env.BOB_ADDRESS, amountToTransfer, transferFee, token, zksync, tokenSet)

  console.log('Withdrawing')
  const withdrawalFee = await utils.getFee('Withdraw', aliceRinkebyWallet.address, token, zkSyncProvider, tokenSet)
  console.log('withdrawal fee = ', withdrawalFee)
  await utils.withdrawToEthereum(aliceZkSyncWallet, amountToWithdraw, withdrawalFee, token, zksync, tokenSet)
})()
