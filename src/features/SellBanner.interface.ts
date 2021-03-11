export interface ISellBannerProps {
  revenue: number,
  storage: number,
  decreaseStorage: (amount: number, price: number) => void
};
