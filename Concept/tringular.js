const num = 9;
const isTriangular = (num) => {
   let i = 4;
   if(num === 1){
      return true;
   };
   if(num === 3){
      return true;
   };
   while(((3 * 1) - 3) <= num){
      if((3 * i) - 3 === num){
         return true;
      };
      i++;
   }
   return false;
};
console.log(isTriangular(3));