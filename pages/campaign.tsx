import React, { useState } from "react";
import Page from "../components/Page/Page";
import { useSession } from "next-auth/client";
import { Title } from "components/Typography/Typography";
import { CampaignCard } from "components/Campaign/Campaign";
import { useRouter } from "next/dist/client/router";
import { Button, Button_Type } from "components/Button/Button";
import { useQuery } from "react-query";
import { Campaign } from "types/global";
import { Loading } from "components/Loading/Loading";
import Image from "next/image";
import Tab from "components/Tab/Tab";
import Facebook from "../public/assets/Icon/facebook.svg";
import Twitter from "../public/assets/Icon/twitter.svg";
import Instagram from "../public/assets/Icon/instagram.svg";

// const Facebook = () => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="rgba(245,56,56,1)"/></svg>
//   )
// }

export default function CampaignPage() {
  const [session, loading] = useSession();
  // const [campaignData, setCampaingData] = useState({})
  const router = useRouter();
  const { isLoading, data } = useQuery<Campaign[]>("campaings", () =>
    fetch("https://api.jsonbin.io/b/61ec5d2f3282972ff680aab3/5").then((res) => res.json())
  );
  const campaign = data?.find((d) => d._id == router.query['id'])
  const percentStyle = {
    'width': campaign && (campaign.fundingPercent > 100 ? 100 : campaign.fundingPercent) + "%"
}
  console.log(campaign)
  return (
    <Page>
      <div className="py-10">
        {isLoading && <Loading />}
        {campaign && 
        <div>
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-4/5">
                <Image src={campaign.image} layout="fixed" objectFit="fill" width={700}
      height={475}>
                </Image>
              </div>
              <div className="flex flex-col w-4/5">
                <div className="text-green-600 mb-4">FUNDING</div>
                <div></div>
                <div className="text-2xl mb-6"><h2>{campaign.name}</h2></div>
                <div></div>
                <div className="w-full bg-gray-200 h-3 mt-4 rounded-lg mb-8">
                  <div className="bg-blue-600 h-3 rounded-lg" style={percentStyle}></div>
              </div>
              <div className="flex w-full mt-2 mb-8 -mx-2">
              {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div> */}
            </div>
              <div className="flex">
                <button className="py-3 lg:py-4 px-12 lg:px-16 mr-4 text-white font-bold bg-pink-600 hover:shadow-red-md transition-all outline-none">BACK IT</button>
                <button className="py-3 lg:py-4 px-12 lg:px-16 text-gray-600 font-bold bg-white border-2 hover:shadow-red-md transition-all outline-none">FOLLOW</button>
              </div>
              </div>
            </div>
            <div className="mt-8 mb-1 border-b border-gray-300"></div>
            <div className="mt-8">
              <Tab campaign={campaign}></Tab>
            </div>
        </div>
        }
      </div>
    </Page>
  );
}
