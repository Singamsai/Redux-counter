
export const count = (value, setvalue) => {
  return {
    type: "count",
    number: value,
    setnumber: setvalue,
  };
};

export default count;
