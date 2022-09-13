export type MinMaxProps = {
  min?: number;
  max: number;
  current: number;
  updateCnt: (number: number) => void;
};

export type ButtonProps = {
  innerButton: string;
  className: string;
  onClick: () => void;
};

export interface IGood {
  id: number;
  title: string;
  price: number;
  rest: number;
  cnt: number;
}

export type ModalProps = {
  showDetails: boolean;
  onClose: () => void;
  deleteProduct: () => void;
  title: string;
};
