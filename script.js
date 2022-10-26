//login button js code
const loginBtn = document.getElementById("click");
loginBtn.addEventListener('click',function(){
   var displayNoneHbe =document.getElementById('login-area')
   displayNoneHbe.style.display ='none';

   const transactionArea =document.getElementById("transaction-area");
   transactionArea.style.display = 'block';   //block mane tansaction area show korbe
})
//deposite button js code
const depositbtn = document.getElementById("clickme");
depositbtn.addEventListener('click',function(){


const depositinput = document.getElementById('depo').value;
 const Parse = parseFloat(depositinput);

 const curentdeposit = document.getElementById("depositnum").innerText;
 const depositNum = parseFloat(curentdeposit);

 const totaldeposit = Parse + depositNum;
 console.log(totaldeposit);

 document.getElementById("depositnum").innerHTML =totaldeposit;
 document.getElementById('depo').value ='';

//balance
 const currentbalance = document.getElementById('balancenum').innerText;
 const balancenum = parseFloat(currentbalance);
 const totalblance = Parse +balancenum;
 document.getElementById("balancenum").innerText = totalblance;



})
//withdraw button js code
const withdrawbtn = document.getElementById("withdrawbtn");
withdrawbtn.addEventListener('click',function(){
   
   const withdrawinput = document.getElementById("withdrawinput").value;
   const parse1 = parseFloat(withdrawinput);

   const withdrawnum = document.getElementById('withdrawnum').innerHTML;
   const parse2 = parseFloat(withdrawnum);

   const totalwithdraw = parse1 + parse2 ;
   console.log(totalwithdraw);

   document.getElementById('withdrawnum').innerHTML =totalwithdraw;
   document.getElementById("withdrawinput").value ='';


//balance
 const currentbalance = document.getElementById('balancenum').innerText;
 const balancenum = parseFloat(currentbalance);
 const totalblance = balancenum - parse1;
 document.getElementById("balancenum").innerText = totalblance;

   

})