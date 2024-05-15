export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork =
  | eEthereumNetwork
  | ePolygonNetwork
  | eXDaiNetwork
  | eArbitrumNetwork
  | eOptimismNetwork
  | eModeNetwork;

export enum eEthereumNetwork {
  goerli = 'goerli',
  main = 'main',
  coverage = 'coverage',
  hardhat = 'hardhat',
  tenderlyMain = 'tenderlyMain',
  sepolia = 'sepolia',
}

export enum ePolygonNetwork {
  matic = 'matic',
  mumbai = 'mumbai',
}

export enum eXDaiNetwork {
  xdai = 'xdai',
}

export enum eArbitrumNetwork {
  arbitrum = 'arbitrum',
  arbitrumTestnet = 'arbitrum-testnet',
}

export enum eOptimismNetwork {
  main = 'optimism',
  testnet = 'optimisticSepolia',
}
export enum eModeNetwork {
main = 'mode',
testnet = 'modeSepolia'
}

export enum EthereumNetworkNames {
  goerli = 'goerli',
  main = 'main',
  matic = 'matic',
  mumbai = 'mumbai',
  xdai = 'xdai',
  sepolia = 'sepolia',
}

export type tEthereumAddress = string;

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>
  | iPolygonParamsPerNetwork<T>
  | iXDaiParamsPerNetwork<T>
  | iArbitrumParamsPerNetwork<T>
  | iOptimismParamsPerNetwork<T>
  | iModeParamsPerNetwork<T>;

export interface iParamsPerNetworkAll<T>
  extends iEthereumParamsPerNetwork<T>,
    iPolygonParamsPerNetwork<T>,
    iXDaiParamsPerNetwork<T> {}

export interface iEthereumParamsPerNetwork<eNetwork> {
  [eEthereumNetwork.coverage]: eNetwork;
  [eEthereumNetwork.sepolia]: eNetwork;
  [eEthereumNetwork.goerli]: eNetwork;
  [eEthereumNetwork.main]: eNetwork;
  [eEthereumNetwork.hardhat]: eNetwork;
  [eEthereumNetwork.tenderlyMain]: eNetwork;
}

export interface iPolygonParamsPerNetwork<T> {
  [ePolygonNetwork.matic]: T;
  [ePolygonNetwork.mumbai]: T;
}

export interface iXDaiParamsPerNetwork<T> {
  [eXDaiNetwork.xdai]: T;
}

export interface iArbitrumParamsPerNetwork<T> {
  [eArbitrumNetwork.arbitrum]: T;
  [eArbitrumNetwork.arbitrumTestnet]: T;
}

export interface iOptimismParamsPerNetwork<T> {
  [eModeNetwork.main]: T;
  [eModeNetwork.testnet]: T;
}

export interface iModeParamsPerNetwork<T> {
  [eModeNetwork.main]: T;
  [eModeNetwork.testnet]: T;
}

export interface ObjectString {
  [key: string]: string;
}
