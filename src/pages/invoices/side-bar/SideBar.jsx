import logo from "../../../../public/assets/images/logo.svg"
import imageAvatar from "../../../../public/assets/images/image-avatar.jpg"
import darkIcon from "../../../../public/assets/images/icon-moon.svg"

export const SideBar = () =>{
    return (
        <div className="side-bar">


            <div className="side-bar-logo">
                <img className="side-bar-logo-svg" src={logo} />
                <div className="side-bar-logo-light-purple"></div>
            </div>

            <div className="side-bar-settings">
                <div className="side-bar-settings-mode">
                    <img className="mode-icon" src={darkIcon}/>
                </div>
                <div className="side-bar-settings-user">
                    <img className="user-avatar" src={imageAvatar}/>
                </div>
            </div>
        </div>
    )
}