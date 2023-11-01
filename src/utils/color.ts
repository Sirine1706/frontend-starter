function convertColorToRGBA(color: string, alpha: number): string | null {
  const element = document.createElement("div");
  element.style.backgroundColor = color;
  document.body.appendChild(element);

  const computedColor = getComputedStyle(element).backgroundColor;
  document.body.removeChild(element);

  const matches = computedColor.match(/rgba?\((\d+), (\d+), (\d+)/);
  if (matches) {
    const [, r, g, b] = matches;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return null;
}

export default convertColorToRGBA;
