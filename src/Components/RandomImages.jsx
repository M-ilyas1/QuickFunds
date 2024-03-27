import { useState} from 'react';
import Card from '../Images/Card.png';
import Illustartion from '../Images/illustartion.png';
import Left_hand from '../Images/Left_hand.png';
import Mobile from '../Images/mobile.png';
import Speech_bubble from '../Images/Speech_bubble.png'
import Button from './Button/Button';

function RandomImages() {

  const [random, setRandom] = useState(0);

    let images = [Card , Illustartion, Left_hand, Mobile, Speech_bubble];
  
    function RandomImageGenerator(){
      setRandom(Math.floor(Math.random() * images.length))
    }
    
  return (
    <div className='h-screen flex justify-center items-center text-center'>
        <div>
            <img src={images[random]} className='w-[300px] h-[300px]'/>
            <div onClick={RandomImageGenerator}>
                <Button value="Clink" variant="Primary" />
            </div>
        </div>
    </div>
  )
}

export default RandomImages