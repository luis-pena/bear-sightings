export const isFormValid = form => {
  const { numberOfDaves, zipCode, notes, daveType } = form;
  const formValidity =
    isZipCodeValid(zipCode) &&
    isNumberValid(numberOfDaves) &&
    isParagraphValid(notes) &&
    isDropDownValid(daveType);
  return formValidity;
};

// ^ = Start of the string.
// \d{5} = Match 5 digits (for condition 1, 2, 3)
// (?:…) = Grouping
// [-\s] = Match a space (for condition 3) or a hyphen (for condition 2)
// \d{4} = Match 4 digits (for condition 2, 3)
// …? = The pattern before it is optional (for condition 1)
// $ = End of the string.
export const isZipCodeValid = zipCode => {
  const zipCodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;
  return zipCode.match(zipCodeRegEx) != null;
};

// (?=.*\d) Asserts that a digit is anywhere within the string.
// .{1,} Asserts that the entire string is a composition of at least 1 "anything, except new line".
export const isNumberValid = number => {
  const numberRegEx = /^(?=.*\d).{1,}$/;
  return number.match(numberRegEx) != null;
};

export const isParagraphValid = paragraph => {
  const wordsRegEx = /^(?!\s*$).+/;
  return paragraph.match(wordsRegEx) != null;
};

export const isDropDownValid = daveType => {
  return daveType != "Dave Type";
};
