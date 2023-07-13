import { Link } from 'react-router-dom';
import classes from './StartCard.module.css'
import Button from './Button';

function StartCard(props) {
    return (
        <div className={classes.startPageLayout}>
            <div>울룩불룩 울퉁불퉁 뾰쪽길쭉 야채 친구들 </div>
            <div>나는 무슨 야채일까?</div>
            <div className={classes.mainImg}>
                <img src ="https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-cute-anthropomorphic-fruits-vegetables-and-vegetables-png-image_2840786.jpg"></img>
            </div>
            <div className={classes.startBtn}>
                <Link to='/test'><Button>시작하기</Button></Link>
            </div>
      </div>
    );
}

export default StartCard;