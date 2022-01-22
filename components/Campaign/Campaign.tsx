import { Sensitive } from "components/Sensitive/Sensitive";
import moment from "moment";
import React from "react";
import { Account, Campaign } from "types/global";

interface Props {
  campaigns: Campaign[];
}
export const CampaignCard: React.FunctionComponent<Props> = ({ campaigns }) => {
  return (
    <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-5 sm:py-5">
      {campaigns.map((campaign) => {
          var percent_style = {
              'width': (campaign.fundingPercent > 100 ? 100 : campaign.fundingPercent) + "%"
          }
          return (
        <div
          key={campaign._id}
          className="max-w-sm rounded overflow-hidden shadow-lg ml-4"
        >
        <img className="w-full h-72" src={campaign.image} alt="Mountain"/>
          {/* <div className="mr-6">
            <img
              src={campaign.image}
              height={50}
              width={50}
              alt="Account Logo"
              style={{ filter: "brightness(0) invert(1)" }}
            ></img>
          </div> */}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-500">{campaign.name}</div>
            <p className="text-gray-700 text-base">
            {campaign.descrition}
            </p>
            <div className="mt-6 flex text-blue-600">
                <div className="w-1/2 text-center text-sm"><div className="text-sm"><strong className="w-full">{campaign.remainingDays}</strong></div> remaining</div>
                <div></div>
                <div className="w-1/2 text-center text-sm"><div><strong className="w-full">${campaign.currentAmountRaised}</strong></div> received</div>
            </div>
            <div className="w-full bg-gray-200 h-1 mt-4">
                <div className="bg-blue-600 h-1" style={percent_style}></div>
            </div>
            <div className="mt-1 text-sm text-center text-blue-500">{campaign.fundingPercent}% financed</div>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>     */}
          <div>
            {/* <div>
              <p className="font-light text-indigo-100 text-sm">
                {campaign.name}
              </p>
              <p className="font-bold text-2xl">
                <p>
                    {campaign.descrition}
                </p>
              </p>
            </div> */}
            {/* <div>
              <p className="font-light text-indigo-100 text-sm mt-6">
                {campaign.noOfShares}
              </p>
              <p className="font-bold font-mono">
                <span className="mr-3">
                {campaign.noOfShares}
                </span>
                ${campaign.currentAmountRaised}
              </p>
            </div> */}
          </div>
        </div>
      )})}
    </div>
//     <div className="p-10">  
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img className="w-full" src="/mountain.jpg" alt="Mountain"/>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">Mountain</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //   </div>
//     </div>
//   </div>
  );
};
