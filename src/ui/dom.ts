// Tiny DOM helper. No framework: create an element, assign props, append children.

type Child = Node | string;

interface ElProps {
  class?: string;
  text?: string;
  html?: string;
  onClick?: (ev: Event) => void;
  disabled?: boolean;
  [attr: string]: unknown;
}

const KNOWN_KEYS = new Set(['class', 'text', 'html', 'onClick', 'disabled']);

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: ElProps = {},
  children: Child[] = [],
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);

  if (props.class !== undefined) node.className = props.class;
  if (props.text !== undefined) node.textContent = props.text;
  if (props.html !== undefined) node.innerHTML = props.html;
  if (props.onClick) node.addEventListener('click', props.onClick);
  if (props.disabled !== undefined && 'disabled' in node) {
    (node as HTMLButtonElement).disabled = props.disabled;
  }

  for (const [key, value] of Object.entries(props)) {
    if (KNOWN_KEYS.has(key)) continue;
    if (value === undefined || value === null || value === false) continue;
    node.setAttribute(key, value === true ? '' : String(value));
  }

  for (const child of children) {
    node.append(typeof child === 'string' ? document.createTextNode(child) : child);
  }

  return node;
}

/** Replace the entire contents of a mount point with a single view node. */
export function mount(root: HTMLElement, view: Node): void {
  root.replaceChildren(view);
}
