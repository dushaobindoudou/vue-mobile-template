/**
 *
 * 简单的表单验证
 *
 * @export
 * @param {*} validObj
 * @returns
 */
export function simValidate(validObj, current) {
  let validResult = 1;
  const error = {};
  if (!current || !validObj) {
    return {
      validResult,
      error,
    };
  }
  Object.keys(validObj).forEach((v) => {
    if (validObj[v] === 0) {
      if (!current[v]) {
        validResult = 0;
        error[v] = 'error';
      }
    }
    if (validObj[v] === 1) {
      if (current[v] === '0' || current[v] === 0) {
        error[v] = 'error';
        validResult = 0;
      }
    }
    if (validObj[v] === 2) {
      // eslint-disable-next-line no-useless-escape
      if (current[v] === '' || !/^[0-9\.]*$/.test(current[v])) {
        error[v] = 'error';
        validResult = 0;
      }
    }
  });
  return {
    error,
    validResult,
  };
}

export function convertStringToNum(val) {
  const num = parseInt(val, 10);
  let result = 0;
  // eslint-disable-next-line no-restricted-globals
  if (!isFinite(num)) {
    result = 0;
  } else {
    result = num;
  }
  return result;
}

export default {};
