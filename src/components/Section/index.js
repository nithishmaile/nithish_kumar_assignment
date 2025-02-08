
import { FaArrowRight } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import './index.css'

const Section=()=>(
    <div className="section-mobile-container">
        <div className="badge-group-conatainer">
            <p className="badge">New Feature</p>
            <div className="text-arrow-container">
                <p>Check out the team dashboard</p>
                <FaArrowRight className="margin-left"/>
            </div>
        </div>
        <h1 className="heading">Beautiful analytics to grow smarter</h1>
        <p className="paragraph">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="button-groups">
            <button type="button" className="sign-up">Sign up</button>
            <button type="button" className="demo-button">
                <FaRegPlayCircle/>
                Demo
            </button>
        </div>
        <div className="image-container">
            <img src="https://s3-alpha-sig.figma.com/img/77d8/9fa1/a69b18701253a32f7e394acfc433d49b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZA~SdEl53nLcfsE6LzTwCveIangt5PHstAWH72IU0f6LTAuSVtQ0s3-HH4qzi5ub4TxPEhRSUtyzYCL9aG-yboIGRX4RvsNFW3J3FPzB4J9NSUDMQBEPpyeRIqVsnHj2GgcADC1WfeoIukuYr7-a~3DImldidknaeux8fm0x-qkQPb1nwvrssQ01FX03PrEcIhdhg8av6024vZm--AcoZNdvSkxBLq2D70acpW05t60WoThMDT5BdgehIAqjiugHxGyRFTischUCJsYVYwUXpnHuY~fGZVHkS9XKFj-wmRXbgpGi5nttQM9TLGW0llwwISQWxBjedCeP8~vEajVyuw__" alt="image" className="image"/>
        </div>
    </div>
)

export default Section