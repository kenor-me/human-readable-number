module.exports = function toReadable (num) {
   // const singleNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   const singleNum = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
   }
   // const tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tn = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
   }
   // const ty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const ty = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
   }
   const th = ['hundred', 'thousand', 'million', 'billion', 'trillion'];

   (!Number.isInteger(num) || num < 0) ? console.log('not a number'): false;

   let result = '';
   num = num.toString();

   const findSingleNumFunc = (num) => {
      for (let key in singleNum) {
         if (num === key) {
            return singleNum[key]
         }
      }
   }

   const findDoubleNumFunc = (num) => {
      for (let key in tn) {
         if (num === key) {
            return tn[key];
         }
      }
   }

   const findTyNumberFunc = (num) => {
      if (num[0] !== '0') {
         for (let key in ty) {
            if (num[0] === key) {
               result = ty[key];
            }
         }
         if (num[1] !== '0') {
            result += ' ' + findSingleNumFunc(num[1]);
         }
      }
      return result;
   }

   if (num >= 0 && num < 10) {
      result = findSingleNumFunc(num);
   }

   if (num > 9 && num < 20) {
      result = findDoubleNumFunc(num);
   }

   if (num > 19 && num < 100) {
      result = findTyNumberFunc(num);
   }

   if (num > 99 && num < 1000) {
      let oneNum = num.split('').splice(2,1).join().replace(',','');
      let double = num.split('').splice(1,2).join().replace(',','');
      (double > 0 && double < 10) ? result = findSingleNumFunc(num[0]) + ' hundred ' + findSingleNumFunc(oneNum) :
      (double < 20 && double > 0) ? result = findSingleNumFunc(num[0]) + ' hundred ' + findDoubleNumFunc(double) : 
      (double === '00') ? result = findSingleNumFunc(num[0]) + ' hundred':
      result = findSingleNumFunc(num[0]) + ' hundred ' + findTyNumberFunc(double);
   }

   return result;
}



