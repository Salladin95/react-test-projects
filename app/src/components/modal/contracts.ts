export type ModalProps = {
  title: string;
  onOkay: () => void;
  onClose: () => void;
  isShow: boolean;
  children?: React.ReactNode | null;
};
