import Button from "./Button/Button";

function CRUD() {
  return (
    <div className="flex justify-center border-2  bg-[#2A6877] p-10" >
        <form action="" className="w-[40%] flex flex-col justify-center items-center gap-2">
            <input type="text" placeholder="Enter Item Name" className="w-full border-2 border-[#2A6877] rounded-xl p-[10px] shadow-xl" />
            <input type="number" placeholder="Enter Item Price" className="w-full border-2 border-[#2A6877] rounded-xl p-[10px] shadow-xl" />
            <div>
                <Button value="SUBMIT DATA" variant="Secondary"/>
            </div>
        </form>
    </div>
  )
}

export default CRUD;