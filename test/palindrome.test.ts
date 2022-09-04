import { findLongestPalindrome } from "..";

interface TestCase {
  case: string;
  expected: string;
}

const testCases: TestCase[] = [
  { case: "", expected: "" },
  { case: "babad", expected: "bab" },
  { case: "cbbd", expected: "bb" },
  { case: "Anna", expected: "anna" },
  { case: "kayak", expected: "kayak" },
  { case: "abbad", expected: "abba" },
  { case: "aaabbad", expected: "abba" },
  { case: "aabbaada", expected: "aabbaa" },
  { case: "uoiasaduio", expected: "asa" },
  { case: "iouoijKiouoiKpiouoi", expected: "kiouoik" },
];

testCases.forEach((e) => {
  test(`test case ${e.case}`, () => {
    const result = findLongestPalindrome(e.case);
    expect(result).toEqual(e.expected);
  });
});
