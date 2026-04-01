export type AppInputs = {
  numberOfHexagons: HTMLInputElement;
  hexagonsFirstRow: HTMLInputElement;
  backgroundColor: HTMLInputElement;
  hexagonColor: HTMLInputElement;
  textColor: HTMLInputElement;
  hexagonSize: HTMLInputElement;
  containerSkewX: HTMLInputElement;
  containerSkewY: HTMLInputElement;
  hexagonRotation: HTMLInputElement;
  hexagonTransition: HTMLInputElement;
  hexagonScale: HTMLInputElement;
  hexagonGap: HTMLInputElement;
  mediaQuery_1: HTMLInputElement;
  mediaQuery_2: HTMLInputElement;
  mediaQuery_3: HTMLInputElement;
};

export type AppButtons = {
  css: HTMLButtonElement;
  html: HTMLButtonElement;
  dialogClose: HTMLButtonElement;
  dialogCopy: HTMLButtonElement;
};

export type AppDialogElements = {
  element: HTMLDialogElement;
  text: HTMLElement;
  title: HTMLElement;
};

export type AppPreviewElements = {
  hexagonContainer: HTMLElement;
};

export type AppElements = {
  inputs: AppInputs;
  buttons: AppButtons;
  dialog: AppDialogElements;
  preview: AppPreviewElements;
};
