import { useState } from "react"
import { Campaign } from "types/global"

interface Props {
    campaign: Campaign;
}
const Tab: React.FunctionComponent<Props> = ({ campaign }) => {
    const [active, setActive] = useState(true)

    return (
        <><ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
            role="tablist">
            <li className="nav-item" role="presentation">
                <a href="#tabs-home" className="
                nav-link
                block
                font-medium
                text-sm
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
                text-blue-500
                active
                " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                aria-selected="true">Details</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#tabs-profile" className="
                nav-link
                block
                font-medium
                text-sm
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent uppercase
                " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                aria-controls="tabs-profile" aria-selected="false">Story</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#tabs-messages" className="
                nav-link
                block
                font-medium
                text-sm
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent uppercase
                " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                aria-controls="tabs-messages" aria-selected="false">FAQ</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#tabs-contact" className="
                nav-link
                disabled
                pointer-events-none
                block
                font-medium
                text-sm
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent uppercase
                " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
                aria-controls="tabs-contact" aria-selected="false">Discussion</a>
            </li>
            </ul>
            <div className="tab-content w-1/2" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                    {campaign.descrition}
                </div>
                <div className="tab-pane fade uppercase invisible" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                </div>
                <div className="tab-pane fade uppercase invisible" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                </div>
                <div className="tab-pane fade uppercase invisible" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
                </div>
            </div>
        </>
    )
}

export default Tab