export function getCaip10Account(address: string, chainId: number) {
  return `eip155:${chainId}:${address}`;
}
