const cron=require("node-cron");
let shell = require("shelljs");

cron.schedule('* * * * * ', () => {
  console.log('running a task every minute');
  if(shell.exec("node hello.js").code!==0){
      console.log("something wrong");

  }
});
