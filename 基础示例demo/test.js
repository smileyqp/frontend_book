const first = () =>(new Promise((resolve,reject)=>{
    console.log(3)
    let p = new Promise((resolve,reject)=>{
      console.log(7)
      setTimeout(()=>{
        console.log(5)
        resolve(6)		//一个promise值能执行一个resolve；这个在定时器中，比下面后执行，因此是执行下面的
      },0)
      resolve(1)
    })
    resolve(2)
    p.then((arg)=>{
      console.log(arg)
    })
  }))
  
  first().then((arg)=>{
    console.log(arg)
  })
  console.log(4)
  
  
  //3 7 4 1  2 5