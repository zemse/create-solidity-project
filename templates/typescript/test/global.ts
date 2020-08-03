import { ethers } from 'ethers';
import { GanacheServer } from './interface';

declare global {
  namespace NodeJS {
    interface Global {
      server: GanacheServer;
      provider: ethers.providers.JsonRpcProvider;
      accounts: string[];
    }
  }
}
