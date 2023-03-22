const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [
        { value: 5 },
        { value: 6 },
        { value: 9, children: [{ children: [{ value: 12 }] }] },
      ],
    },
  ],
};

function getTreeValues(tree) {
  const stack = [tree];

  const result = [];
  while (stack.length) {
    const node = stack.pop();

    if (node.value !== undefined) {
      result.push(node.value);
    }

    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return result;
}

console.log(getTreeValues(tree));
