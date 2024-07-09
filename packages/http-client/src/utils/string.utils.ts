/**
 * 格式化金额
 * ```
 * export const formatAmount = (input: number): string => "12,300"
 * ```
 * @param {number} input 要格式化的金额
 * @returns 格式化后的金额
 */
export const formatAmount = (input: number): string => {
  if (input) {
    return String(input).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return "";
};
