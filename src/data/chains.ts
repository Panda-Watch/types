export const chains = {
  BSC: {
    mainnet: {
      chainId: 56,
      token: {
        symbol: 'BNB',
        wrappedAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      },
    },
    testnet: {
      chainId: 97,
      token: {
        // ToDO: Setup testnets
        symbol: 'tBNB',
        wrappedAddress: '',
      },
    },
  },
  Polygon: {
    mainnet: {
      chainId: 137,
      token: {
        symbol: 'MATIC',
        wrappedAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      },
    },
    testnet_mumbai: {
      chainId: 80001,
      token: {
        // ToDO: Setup testnets
        symbol: 'tMATIC',
        wrappedAddress: '',
      },
    },
  },
};

export default chains;
