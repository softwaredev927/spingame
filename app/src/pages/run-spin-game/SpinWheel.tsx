import React, {useEffect,useState} from 'react';
import { easeInCubic, easeInOutBounce } from 'easing-utils'
import { Button } from 'components/Button.js';
import {Wheel} from './themes/dist/spin-wheel-esm.js';
import {loadFonts} from './themes/scripts/util.js';
import {props} from './themes/js/props.js';
import './themes/css/index.css'

const SpinWheelGame: React.FC = () => {
    const [spinWheel, setSpinWheel] = useState <any> ();
    const [spinFlag, setSpinFlag] = useState<boolean>(true);

    useEffect(()=>{
        loadFonts(props.map(i => i.itemLabelFont));
        const wheel = new Wheel(document.querySelector('.wheel-wrapper'));
        wheel.init({
        ...props[0],
        rotation: wheel.rotation, // Preserve value.
        });
        setSpinWheel(wheel);
    },[])

    const handleSpin = async () => {
        setSpinFlag(false);
        const winningItemIndex:number = 10;//await fetchWinningItemIndex();
        const duration = 10000;
        const easing = easeInCubic(1);
        await spinWheel.spinToItem(winningItemIndex, duration, true, 7, easing)
        if (winningItemIndex===10) {
            setSpinFlag(true)
        }
    }



  return (
    <>
        <div className="wheel-wrapper"></div>
        <div>
            <Button onClick={handleSpin} disabled={spinFlag?false:true}>Spin</Button>
        </div>
    </>
  )
};

export default SpinWheelGame;