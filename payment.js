function processpayment(amount){
  if(amount<=0){
    console.log("invalid amount");
    return;
  }
  if(amount < 500){
    console.log("processing basic payment of $"+amount);
  }else{
        console.log("processing premium payment of $"+amount);
  }
  console.log("payemnt successfull");
}
processpayment(700)
