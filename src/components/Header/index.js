import { IoMdMenu } from "react-icons/io";

import './index.css'

const Header = ()=> (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
            <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738901540/Group_160_nm7yng.jpg" alt="company-logo" />
          <button type="button" className="nav-menu-mobile">
            <IoMdMenu/>
          </button>
        </div>
        <div className="nav-bar-large-container">
            <div className="nav-image-items-container">
            <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738901540/Group_160_nm7yng.jpg" alt="company-logo" />
                <ul className="nav-menu">
                    <li className="nav-menu-item nav-link">
                        Home
                    </li>

                    <li className="nav-menu-item nav-link">
                        <select className="border-none">
                        <option>Products</option>
                        </select>
                    </li>

                    <li className="nav-menu-item nav-link">
                        <select className="border-none">
                        <option>Resource</option>
                        </select>
                    </li>

                    <li className="nav-menu-item nav-link">
                        Pricing
                    </li>
                </ul>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dhmwU2FF9R3XNNIVqlq8xSl5RLJJvZkx1MRVy7YdrmZA9y7Doytt5gP2HGPgZFQeH4XxhA4SivECgd1Y7i4vyHFacVwR8-xp95W5PdYRZ3CINHcenCPs7XevfQxaK8-uj28j35ubZAnTgTLRa7WD2YFLVAkQbJMsSMPn0xTmW0LazjYXkKxEk5c4mmpmXKwDt67r4gGVtQiLrjyyghkVToFXy9U6sFA4WjpJpeaHrCCvhEzxYyUT8jrTt9s5EKKEZMfMSrHSPY2JcoiY-gZnye9nQ2mLFfaF6-igpQU-VmYWAdCxhTCRJkoIK5KCiFtXwyTh9mT4WkWZKVMeHCJiIQ__" alt="image" className="drop-down-image" />
            </div>
        </div>
      </div>
    </nav>
)

export default Header
