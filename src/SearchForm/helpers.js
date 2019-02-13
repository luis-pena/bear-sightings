export const isFormValid = form => {
  const { zipCode } = form;
  const formValidity = isZipCodeValid(zipCode);
  return formValidity;
};

export const isZipCodeValid = zipCode => {
  const zipCodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;
  return zipCode.match(zipCodeRegEx) != null;
};
