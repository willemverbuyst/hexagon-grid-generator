export function bindInput(
  input: HTMLInputElement,
  listener: (event: Event) => void,
): void {
  input.addEventListener("input", listener);
}
