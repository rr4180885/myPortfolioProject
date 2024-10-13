
import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"

interface SocialBtns {
    containerStyles: string;
    iconStyles: string;
}


const socials = [
    {
        icon: <FaGithub/>, path:""
    },
    {
        icon: <FaLinkedinIn/>, path:""
    },
    {
        icon: <FaYoutube/>, path:""
    },
    {
        icon: <FaTwitter/>, path:""
    },

];
const Social: React.FC<SocialBtns> = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
            <Link 
                key = {index} 
                href={item.path} 
                className={iconStyles}
            >
                {item.icon}
            
            </Link>
            );
        })}
    </div>
}

export default Social