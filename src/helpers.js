const hasOnlyDigits = str => /^[0-9]*$/ig.test(str);

const yearIsLessThanCurrent = str => {
    const date = new Date(str).getTime();
    const currentDate = Date.now();
    return date <= currentDate && str.length === 10;
};

const isNotEmpty = str => str.trim().length > 0;

export {
    hasOnlyDigits,
    yearIsLessThanCurrent,
    isNotEmpty
};
