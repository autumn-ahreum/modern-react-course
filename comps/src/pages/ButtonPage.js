import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";



function ButtonPage () {
    const handleClick = () => {
    }; 

    return (
    <div>
         <div>
            <Button className="mb-5" >
                <GoCloudDownload />
                Click me!!
            </Button>
        </div>
        <div>
            <Button primary rounded onClick={handleClick} >
                <GoBell />
                Check out!
            </Button>
        </div>
        <div>
            <Button secondary outline onMouseEnter={handleClick}>
                <GoDatabase />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button success >See Deal!</Button>
        </div>
        <div>
            <Button warning >Hide Ads!</Button>
        </div>
        <div>
            <Button danger rounded outline >Something!</Button>
        </div>

    </div>
    );
}

export default ButtonPage;