const FormatProductId = (originalId) => {
  const digits = originalId.replace(/\D/g, "");
  return digits.slice(0, 4);
};

export default FormatProductId;
