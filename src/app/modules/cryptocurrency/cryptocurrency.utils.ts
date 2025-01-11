export const calculateDeviation = (prices: number[]): number => {
  const n = prices.length;
  const mean = prices.reduce((sum, price) => sum + price, 0) / n;
  const variance =
    prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / n;
  const standardDeviation = Math.sqrt(variance);
  return parseFloat(standardDeviation.toFixed(2));
};
