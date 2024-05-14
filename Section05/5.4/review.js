const thisArr = ["This string", "That string", "Another string"];

for (let i = 0; i < thisArr.length; i++) {
  console.log(
    `This is the ${i} position Item  and it's value says ${thisArr[i]}`
  );
}

thisArr.foreach((theItem, i) => {
  console.log(
    `This is the ${i} position Item and it's value says ${thisArr[i]}`
  );
});
