import './App.css';

function App() {
  return (
    <div className="w-screen h-auto flex justify-center items-start flex-col">
      <div className='w-full h-screen  flex justify-center items-center'>
        <div className='flex flex-col  justify-center items-center pb-16'>
          <div className='text-[13vw]  tracking-widest font-semibold font-header'>DROPOUT</div>
          <div className='flex justify-between px-4 text-center w-full text-[2vw] tracking-[3vw] font-sub-header'>
            <div>ANALYSIS</div>
            <div>&nbsp;&nbsp;</div>
            <div>DASHBOARD </div>
          </div>
        </div>
      </div>
    <div className='w-screen h-screen flex justify-center items-center'>
      <video className='w-3/4 h-3/5 rounded-xl object-cover' src="https://media.wearemotto.com/app/uploads/2022/11/14104333/home-hero-opt.mp4" alt="video" autoPlay muted loop playsInline />
    </div>
    <div className='space w-screen h-[20vh]'></div>
    <div className='w-screen flex justify-center items-center flex-col'>
      <h1 className=' text-[8vw] font-header'>Data Breakdown</h1>
      <div className=' w-[60%] h-[100vh] flex flex-col relative justify-between items-center mt-[20vh]'>
         <div className='h-full w-[1px] bg-[#fff] absolute top-0 left-[50%] flex flex-col justify-between'>
            <div className='w-6 h-6 rounded-full bg-green-400 -ml-3'></div>
            <div className='w-6 h-6 rounded-full bg-green-400 -ml-3'></div>
            <div className='w-6 h-6 rounded-full bg-green-400 -ml-3'></div>
         </div>
         <div className=' w-full flex justify-end items-start -mt-3'>
          <div className='w-[30%] '>
            <h2 className=' text-[3vw] font-bold font-header'>BY SCHOOLS</h2>
            <p className=' text-[1.5vw] font-thin '>Compare Dropout Rates Among different Schools</p>
          </div>
         </div>
         <div className=' w-full flex justify-start items-start -mt-3'>
          <div className='w-[30%] '>
            <h2 className=' text-[3vw] font-bold font-header'>BY LOCATION</h2>
            <p className=' text-[1.5vw] font-thin '>Examine regional differences to allocate resources wisely</p>
          </div>
         </div>
         <div className=' w-full flex justify-end items-start -mt-3'>
          <div className='w-[30%] '>
            <h2 className=' text-[3vw] font-bold font-header'>BY DEMOGRAPHICS</h2>
            <p className=' text-[1.5vw] font-thin '>Breakdown by gender,caste and age/standard</p>
          </div>
         </div>
         
      </div>
    </div>
    <div className='space w-screen h-[30vh]'></div>
    <div className='w-full h-[80vh] bg-slate-200 flex justify-center items-center relative' >
    <img src='https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="img" className='object-cover w-full h-full bg-slate-200 flex justify-center items-center' />
    <div className='w-full h-full bg-[#000000c8] absolute top-0 z-10 left-0'></div>
    <div className=' w-[80%] h-full text-center font-sub-header tracking-wider z-20 absolute flex justify-center items-center text-[4vw]'>"Education is the most powerful weapon which you can use to change the world."</div>
    </div>
    <div className='space w-screen h-[30vh]'></div>
    <div className='w-full flex justify-around items-center px-[5%]'>
    <div className='w-[30%] '>
            <h2 className=' text-[6vw] font-bold font-header text-red-600'>40%</h2>
            <p className=' text-[1.5vw] font-sub-header tracking-wider'>More likely to be a part of this problem, as they belong to low income community.*</p>
          </div>
          <div className='w-[30%] '>
            <h2 className=' text-[6vw] font-bold font-header text-red-600'>15%  </h2>
            <p className=' text-[1.5vw] font-sub-header tracking-wider'>Students don't complete their Primary Education due to cultural norms or lack of sanitary facilities.*</p>
          </div>
    </div>
    <div className='space w-screen h-[30vh]'></div>
    <div className='w-full bg-slate-400 flex justify-center items-center relative'>sjlsajhfd
      
    </div>
    </div>
  );
}

export default App;
