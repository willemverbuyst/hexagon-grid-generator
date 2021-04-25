import { generateCSStext } from '../cssTextGenerator';
import { DOMInputElement } from './DOMInputElement';
import { root } from '../index';

class RootElement extends DOMInputElement {
  constructor(
    id: string,
    private rootElementName: string,
    private postFix: string = ''
  ) {
    super(id);
  }

  generateCSStextOnChange() {
    this.element.addEventListener('change', generateCSStext);
  }

  addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      changeRootValues(this.rootElementName, this.element.value + this.postFix);
    };
  }

  onInputChangeGapWidth() {
    this.element.oninput = (): void => {
      changeRootValues(
        this.rootElementName,
        100 - parseInt(this.element.value) + this.postFix
      );
    };
  }
}

const changeRootValues = (property: string, value: string): void => {
  root.style.setProperty(property, value);
  generateCSStext();
};

export const backgroundColor = new RootElement('bg-color', '--color-bg');
export const hexagonColor = new RootElement(
  'hexagon-color',
  '--color-inner-hexagon'
);
export const textColor = new RootElement('text-color', '--color-text');
export const hexagonSize = new RootElement(
  'hexagon-size',
  '--width-hexagon-outer',
  'vw'
);
export const containerSkewX = new RootElement(
  'container-skew-X',
  '--skew-X',
  'deg'
);
export const containerSkewY = new RootElement(
  'container-skew-Y',
  '--skew-Y',
  'deg'
);
export const hexagonRotation = new RootElement(
  'hexagon-rotation',
  '--hover-rotation',
  'deg'
);
export const hexagonTransition = new RootElement(
  'hexagon-transition',
  '--hover-transition',
  's'
);
export const hexagonScale = new RootElement('hexagon-scale', '--hover-scale');
export const hexagonGap = new RootElement(
  'hexagon-gap',
  '--size-hexagon-inner',
  '%'
);

backgroundColor.addEventListenerForRootChange();
hexagonColor.addEventListenerForRootChange();
textColor.addEventListenerForRootChange();
hexagonSize.addEventListenerForRootChange();
containerSkewX.addEventListenerForRootChange();
containerSkewY.addEventListenerForRootChange();
hexagonRotation.addEventListenerForRootChange();
hexagonTransition.addEventListenerForRootChange();
hexagonScale.addEventListenerForRootChange();
hexagonGap.onInputChangeGapWidth();
