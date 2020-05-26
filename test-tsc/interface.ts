import { ethers } from 'ethers';

export interface ContractJson {
  abi: ethers.ContractInterface;
  evm: {
    bytecode: string;
  };
}

export interface GanacheServer {
  listen(port: number, callback: (err: any, blockchain: any) => void): void;
  close(): void;
  ganacheProvider: any;
  provider: any;
  allowHalfOpen: boolean;
  pauseOnConnect: boolean;
  httpAllowHalfOpen: boolean;
  timeout: number;
  keepAliveTimeout: number;
  maxHeadersCount: number | null;
  headersTimeout: number;
}
