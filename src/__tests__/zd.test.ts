/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  ZeroDevEthersProvider,
  convertEthersSignerToAccountSigner,
} from '@zerodevapp/sdk';
import { ethers } from 'ethers';

describe('first', () => {
  it('can get a wallet address', async () => {
    const randomWallet = ethers.Wallet.createRandom();
    const owner = convertEthersSignerToAccountSigner(randomWallet);
    console.debug(`owner is ${owner}`);
    const provider = await ZeroDevEthersProvider.init('ECDSA', {
      projectId: process.env.ZERODEV_PROJECT_ID!,
      owner,
      opts: {
        paymasterConfig: {
          policy: 'VERIFYING_PAYMASTER',
        },
      },
    });

    const zdSigner = provider.getAccountSigner();
    const zdSignerAddress = await zdSigner.getAddress();
    console.debug(zdSignerAddress);
  });
});
