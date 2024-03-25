import Illustartion from '../../Images/illustartion.png'
import Button from '../Button/Button'

function HeroCard() {
  return (
    <>
      <div className="h-[550px] flex justify-center items-center">
        <div className="h-[420px] w-[100%] flex justify-center flex-wrap">
            <div className="w-[40%]">
              <h1 className='text-7xl font-semibold text-[#2A6877]'>Quick and Easy Loans for Your Financial Needs.</h1>
              <p className='text-[#424545] py-4 px-2'>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
              <Button value="Get started" variant="Secondary"/>
            </div>
            <div className="w-[40%]">
                <img src={Illustartion} alt='Illustartion' />
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard