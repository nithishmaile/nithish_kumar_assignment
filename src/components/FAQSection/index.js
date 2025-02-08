

import './index.css'

const FAQSection=()=>(
    <div className="faq-container">
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing.</p>
        <div className="list-items-container">
            <div className="extra-faq-item">
                <div className="extra-faq-item-text-container">
                    <h1 className="list-heading">Is there a free trial available?</h1>
                    <p className="list-paragraph">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919541/Icon_wrap_dvbpvf.png" alt="image"/>
            </div>
            <div className="faq-item">
                <h1 className="list-heading">Can I change my plan later?</h1>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919668/Icon_wrap_1_uuwkof.png" alt="plus-image"/>
            </div>
            <div className="faq-item">
                <h1 className="list-heading">What is your cancellation policy?</h1>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919668/Icon_wrap_1_uuwkof.png" alt="plus-image"/>
            </div>
            <div className="faq-item">
                <h1 className="list-heading">Can other info be added to an invoice?</h1>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919668/Icon_wrap_1_uuwkof.png" alt="plus-image"/>
            </div>
            <div className="faq-item">
                <h1 className="list-heading">How does billing work?</h1>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919668/Icon_wrap_1_uuwkof.png" alt="plus-image"/>
            </div>
            <div className="faq-item">
                <h1 className="list-heading">How do I change my account email?</h1>
                <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738919668/Icon_wrap_1_uuwkof.png" alt="plus-image"/>
            </div>
        </div>
        <div className="still-have-question-container">
            <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738923156/Avatar_group_cjtma7.png" alt="avatar" />
            <h1 className="still-have-questions-heading">Still have questions?</h1>
            <p className="still-hava-questions-paragraph">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button type="button" className="get-in-touch-button">Get in touch</button>
        </div>
        <hr/>
    </div>
)

export default FAQSection