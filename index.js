// export default console.log(
//   "Hello World I Wil Check is number palindrome or not!"
// );
export const isPalindrome = (number) => {
  const str = number.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};
