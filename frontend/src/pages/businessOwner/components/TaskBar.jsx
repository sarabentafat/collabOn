import addGreeen from "../../../assets/icons/addGreen.svg"
const TaskBar = () => {
    return ( 
        <div className=" flex w-full gap-6 my-6">
            <div className=" w-[32%] p-4 flex items-center justify-between bg-gray-100 rounded-3xl border-t-[6px] border-orange-300">
                <div className=" flex gap-4 items-center">
                <h1 className=" text-xl font-bold">Today's Tasks</h1>
                <span className=" text-xl py-2 px-4 font-medium rounded-full bg-gray-50">3</span>
                </div>
                <img src={addGreeen} alt="" />
                
            </div>
            <div className=" w-[32%] p-4 flex items-center justify-between bg-gray-100 rounded-3xl border-t-[6px] border-blue-400">
                <div className=" flex gap-4 items-center">
                <h1 className=" text-xl font-bold">Upcoming Tasks</h1>
                <span className=" text-xl py-2 px-4 font-medium rounded-full bg-gray-50">3</span>
                </div>
                <img src={addGreeen} alt="" />
                
            </div>
            <div className=" w-[32%] p-4 flex items-center justify-between bg-gray-100 rounded-3xl border-t-[6px] border-primaryGreen">
                <div className=" flex gap-4 items-center">
                <h1 className=" text-xl font-bold">Completed Tasks</h1>
                <span className=" text-xl py-2 px-4 font-medium rounded-full bg-gray-50">3</span>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default TaskBar;