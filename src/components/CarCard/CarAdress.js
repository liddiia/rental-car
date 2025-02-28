const CarAddress = (address) => {
  const arr = address.split(",");
  const country = arr[arr.length - 1].trim();
  const city = arr[arr.length - 2].trim();
  
  return { city, country };
};

export default CarAddress;
