for (let id = 1; id <= 100; id++) {
  const bookIdGenerator = (ids) => {
    let pattern = "SQ-BK-";
    var arr = ids.toString().split("");
    if (arr.length === 1) {
      return pattern + "00" + ids;
    } else if (arr.length === 2) {
      return pattern + "0" + ids;
    } else {
      return pattern + ids;
    }
  };
  const pattern = bookIdGenerator(id);
  console.log(pattern);
}
