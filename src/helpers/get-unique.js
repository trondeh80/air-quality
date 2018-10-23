export default function getUniqueNames(list, name) {
  const unique = [];
  list.forEach((item) => {
    if (unique.indexOf(item[name]) === -1) {
      unique.push(item[name]);
    }
  });
  return unique;
}
