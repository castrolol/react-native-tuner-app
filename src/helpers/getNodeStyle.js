export default function getNodeStyle(node) {
  const style = node?.props?.style;

  if (!style) return null;
  if (style instanceof Array) {
    return style.reduce((merged, curr) => ({...merged, ...curr}), {});
  }
  return style;
}
