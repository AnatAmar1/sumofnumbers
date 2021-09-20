let arr = [1, 2, 3, 4];

function sumFor(nums){

  let sum = 0;
  for(let i= 0; i < arr.length; i++){
    sum = sum+ arr[i];
  }return sum;
}
//console.log(sumFor(arr));

function  sumWhile(nums) {
  let count =0;
  let sum=0;
  while(count <  arr.length){
    sum = sum + arr[count]

    count++;
  }
  return sum;
}

console.log(sumWhile(arr));

function sumRecursion(nums){

  if (arr.length < 1){

    return 0;
  }
  return arr.pop() + sumRecursion(arr);
}
console.log(sumRecursion(arr));


function sumTheSimpleWay(nums) {
  let sum = _.reduce(nums, function(memo, num){ return memo + num; }, 0);
  return sum;
}
console.log(sumTheSimpleWay(arr));