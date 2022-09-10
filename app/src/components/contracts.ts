export type CounterProps = {
  min?: number;
  max: number;
};

export type ButtonProps = {
  innerButton: string;
  className: string;
  callback: () => void;
};
