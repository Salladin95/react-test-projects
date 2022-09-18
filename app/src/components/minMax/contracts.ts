export type MinMaxProps = {
  min?: number;
  max: number;
  current: number;
  updateCnt: (number: number) => void;
};
