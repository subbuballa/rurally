import React from "react";
import Page from "../components/Page/Page";
import { useQuery } from "react-query";
import { Bank, Campaign } from "types/global";
import { Loading } from "components/Loading/Loading";
import { mapBanksToAccounts, sumAccountsBalances } from "lib/utils";
import { Accounts } from "components/Account/Accounts";
import { Sensitive } from "components/Sensitive/Sensitive";
import { Transactions } from "components/Transactions/Transactions";
import { ConnectBankButton } from "components/ConnectBank/ConnectBankButton";
import { TransactionGraph } from "components/Transactions/TransactionGraph";
import { CampaignCard } from "components/Campaign/Campaign";
import Hero from "components/Hero/Hero";

export default function Home() {
  const { isLoading, data } = useQuery<Campaign[]>("campaings", () =>
    fetch("https://api.jsonbin.io/b/61ec5d2f3282972ff680aab3/5").then((res) => res.json())
  );

  const campaigns = data; //&& mapBanksToAccounts(data);

  return (
    <Page>
      <Hero></Hero>
      <div className="py-5 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {/* <span className="block">Welcome to Rurally-Connectors</span> */}
          {/* <span className="block text-indigo-600">
            You&lsquo;ve currently got £<Sensitive>{currentBalance}</Sensitive>
          </span> */}
          <span className="block text-gray-900">
            Active Campaigns
          </span>
        </h2>
      </div>

      {isLoading && <Loading />}
      {campaigns && <CampaignCard campaigns={campaigns} />}
      {/* <TransactionGraph />
      <Transactions accounts={accounts} />
      <ConnectBankButton /> */}
    </Page>
  );
}
