import  { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault()
    
    const copyTask =[...task]
    copyTask.push({title,detail})
    setTask(copyTask)

    console.log(task);
    
    setTitle('')
    setDetail('')
  }
  const deletNote=(idx)=>{
  const copyTask = [...task];
  copyTask.splice(idx,1)
  setTask(copyTask)
  console.log(idx)
  }
 

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
         submitHandler(e)
      }}className='flex  items-start lg:w-1/2 flex-col gap-5 p-10'> 
        <h1 className='text-3xl font-bold '>Add Notes</h1>

        {/* Pehla Input for heading*/}
          <input 
          type="text" 
          className='px-5 py-2 w-full border-2 font-medium  rounded-xl' 
          placeholder='enter Notes heading' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
            />

          {/* Detailed vala input  */}
        <textarea 
        type="text" 
        className='px-5 h-40 w-full py-2  border-2 font-medium  rounded-xl ' 
        placeholder='Write Details' 
        value={detail}
        onChange={(e)=>{
            setDetail(e.target.value)
        }}
        />
              <button className='bg-white active:scale-95 text-black w-full  px-5 py-2 font-medium  rounded'>Add Notes</button>
        
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='text-3xl font-bold '>Recent Notes</h1>
          <div className='flex flex-wrap items-start gap-5 overflow-auto h-[90%]  mt-5'>
           {task.map(function(elem,idx){
            return  <div key={idx} className="h-50 w-40 flex justify-between flex-col items-start relative rounded-2xl  pb-4 py-6 px-5 text-black bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMfoQPHaEQUaRnnM6E--12-wgzEyykngXQF88B0aluQ&s=10')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.detail}</p>
              </div>
              <button onClick={()=>{
                deletNote(idx)
              }} className='w-full cusror-pointer bg-red-500 py-1 cursor-pointer active:scale-95  text-xs rounded font-bold text-white'>Delete</button>

            </div>
      
          
           })}
          
          </div>
        </div>
    </div>
  )
}

export default App