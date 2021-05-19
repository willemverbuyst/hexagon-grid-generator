import { RootInput } from './RootInput';

export class RootInputGap extends RootInput {
  constructor(id: string, rootElementName: string, postFix: string = '') {
    super(id, rootElementName, postFix);
  }

  // Different implementation of this method
  addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      this.changeRootValues(
        this.rootElementName,
        100 - this.valueAsNumber + this.postFix
      );
    };
  }
}
