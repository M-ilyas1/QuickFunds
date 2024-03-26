import Card from '../Images/Card.png';
import Illustartion from '../Images/illustartion.png';
import Left_hand from '../Images/Left_hand.png';
import Mobile from '../Images/mobile.png';
import Speech_bubble from '../Images/Speech_bubble.png'

function RandomImages() {
    let images = [Card , Illustartion, Left_hand, Mobile, Speech_bubble]
  return (
    <div>
        <img src={images[Math.floor[]]} alt='Random Images'/>
    </div>
  )
}

export default RandomImages