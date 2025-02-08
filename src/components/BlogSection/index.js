
import './index.css'

const BlogSection=()=>(
    <div className="blogs-section-container">
        <div className="latest-blogs-container">
            <div className="latest-blogs-text-container">
                <h1 className="our-blogs-heading">Our blog</h1>
                <h1 className="latest-blogs-post-heading">Lastest blog posts</h1>
                <p className="latest-blogs-para">Tool and strategies modern teams need to help their companies grow.</p>
            </div>
            <button type="button" className="view-all-post-button-mobile">View all posts</button>
        </div>
        <div className="blogs-card-container">
            <div className="blogs-card">
                <img src="https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LJN--Bmz5~N-ckcmyR2OLmWkqBfTbV0Al036vJ8f2c2JdOmbxDfLJl204Qj-Xvml1tq6Obn~nZ2Ex8x8Vdkj5GMEVpPchT5iwpOmvggfGUgVgIjTJZxhFZ38EsUFWdO8~HBRwKThwu16KWHA-Q9h6qH8kW9j7U4FVx6Dh0WFQ6LXJcFaslSsj7knUkSfvKZGjNo0lxXY2lLy9omJ7wx8pm8s12WDAgJTIhK8jYZwumnDlKOgrq-7RTpQ6jHnw1hO3e8rQd8JNEUvCdlzTWq~hHX7CD1yz~M7z3F1bLgFlZV0g9aQakY7aCdsey4F36GzoDR29CqRxAEg3zyGRhz-Ig__" alt="blogs-image" className="blogs-card-image"/>
                <p className="card-label">Design</p>
                <div className="blogs-card-heading-arrow">
                    <h1 className="blogs-card-heading">UX review presentations</h1>
                    <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738925957/Icon_wrap_2_nnyr89.png" alt="arrow-image"/>
                </div>
                <p className="blogs-card-para">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                <div className="avatar-label-container">
                    <img src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jjIKbEW5PkHa-AmvjYbnvCbgrnx9bTMcIkDokbGU0SgnBlj3R-Q649VAMUihPCjICHeWuzWiE4FkrZ3bTonoUDjVpXYbPNqH06n3VJUdTOAMTbLBCYXAcfvs3kUVvjcBV5UsPpa7lVO7PiL0sLeoPbX~t5av6ZTC2NeJam3NaRydNDOxgBnVBmS534A-h0BFV0kaMCsdZ1BnS~udq6QVbcpzM5CWTsWoAXFyuljyzMY9QhMEilwltDtG6Th7LbuDKEChQMxE~V3YeBV3cnejY5edfARmpnuDRDxUEINTkbqhJlv~yoAW8tb-HBSrmk6EnQ5~djVczoxMHTTGqO2phw__" alt="profile" className="profile-image" />
                    <div>
                        <h1 className="avatar-label-heading">Olivia Rhye</h1>
                        <p className="avatar-label-para">20 Jan 2024</p>
                    </div>
                </div>
            </div>
            <div className="blogs-card">
                <img src="https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MtdElJ6LXFgT4eQxO0UWavfijizQ~bpWTUrP9mDCR~oFD5UrW-u6kqfJq1K6UWHPWtF2LrtHbJxz3nPGbV5j5KgHdhIdSp0FHuLytqc5omeNbdmB5BTES3M2jHYS0niwiQAjp5X6yh6fGfpgUErbFiGEKHSAeaunGwSBE9Akl85u4jdQ~WpG7DByeC9bZcQoszzchVQ8HjbhGn5LFQtazYg7dm1hI99GFoM7cNuX0UHXNjuBzc53J-kTGoRYwUgMXmRMTq8XgAjwrd5TPFErpOWTmBwQQV-WVroViF6Y86PWpZBbEY-~uyybGmdFhkIwUP8qI74oIbWVV2zSSk24-Q__" alt="blogs-image" className="blogs-card-image"/>
                <p className="card-label">Product</p>
                <div className="blogs-card-heading-arrow">
                    <h1 className="blogs-card-heading">Migrating to Linear 101</h1>
                    <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738925957/Icon_wrap_2_nnyr89.png" alt="arrow-image"/>
                </div>
                <p className="blogs-card-para">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                <div className="avatar-label-container">
                    <img src="https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qlg1lWcJ6Wg76OVOkMIufaEqi94LW27yAPO28qi0ziMFpTJI-avDRen2uc4rBWUgrpAAIGppKggzCuGv4rPAKSCl~ZPSNfjJMVgHyDSgcF31~Gm80Hd3AuanS0dOiYmomvYByKPFgJ9IZXLJkKih-avdmnUPlYFwKL2dkLazAtlSaIR9JeRKUp5GLcicdDMbREiD5hUG11ZhxZVDJxIfS4awUABgBJJaDmw~B5Ilv6AENyXQdoUZcfqa~U2LeGHtb7EuCkKA2XsyL5PrrhcwHKtXr46M2eIqu8a-E1U~4IwBTCo1IgmEErEVC2YFAghpo6mYolQ~xJJrkFpsv0o8Gw__" alt="profile" className="profile-image" />
                    <div>
                        <h1 className="avatar-label-heading">Phoenix Baker</h1>
                        <p className="avatar-label-para">19 Jan 2024</p>
                    </div>
                </div>
            </div>
            <div className="blogs-card">
                <img src="https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hccfhYsF~gfscuiBwDA-MlE0j6HHYXkkbPNd0HpDrLsGh7VQTtZqJoTNTp-N47HVVMAVZAFnGyI1phBp47UEWteJBPUa8L2DvMAI-X1DWdCWvzE8Ub6SHq2GrWZ94wq6-mTj0zu8YWzmQopJL0AlNPwVcmdWqahCVk4yoBQuHmS6Top-dFZ3wffgwMNm10EUw9xh9aGsc3KZ-~I~DUw~ZYxMFj4TIG2Si5Lpm19BwYlURMcQ2kCSyirDdv3lCUTm-U35fHoSQvXs6jXiPUqFyHSCvEYXlJAmNeRtVE71CxFd-KVfZnGXza8IlwzdorrGGRoGfKHnywAC3OvOl6n22A__" alt="blogs-image" className="blogs-card-image"/>
                <p className="card-label">Software Engineeromg</p>
                <div className="blogs-card-heading-arrow">
                    <h1 className="blogs-card-heading">Building your API stack</h1>
                    <img src="https://res.cloudinary.com/dvwi9soek/image/upload/v1738925957/Icon_wrap_2_nnyr89.png" alt="arrow-image"/>
                </div>
                <p className="blogs-card-para">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                <div className="avatar-label-container">
                    <img src="https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tyBxthU~6p012Kz6VdmsjS7pasbZekk29HiCFSmmb-XgbdopRTi2qTOj6YWPQghIJ7cFcDk98h2SUTYNx5gxciuTRioi6t~T0b9b5pAgpYKkqhEUcSMeTZaXj7jheuEiHSpR2vv73JgrgVoqluC8mUOxdS6bOs~Z8Or5uYN6RK32W7HkjNO2nHy82PGTG49GzkNv6nde9LcX2P1-EV1Imjx17mi6eypEUw31eXlDUaYBROq4s1q1Aqpghx1FXfLQwwJkYGhOcUOQF6uX7zQyft8K83x0-rk15Y4gwlj24CUsg3pt7fAOJ5LQMsPwOBJ9lcpRu2NIXYCcgfd3tkWPmw__" alt="profile" className="profile-image" />
                    <div>
                        <h1 className="avatar-label-heading">Lana Steiner</h1>
                        <p className="avatar-label-para">18 Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="view-all-post-button-desktop">View all posts</button>
    </div>
)

export default BlogSection