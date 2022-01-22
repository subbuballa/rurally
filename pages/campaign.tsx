import React from "react";
import Page from "../components/Page/Page";
import { useSession } from "next-auth/client";
import { Title } from "components/Typography/Typography";
import { CampaignCard } from "components/Campaign/Campaign";
import { useRouter } from "next/dist/client/router";
import { Button, Button_Type } from "components/Button/Button";
import { useQuery } from "react-query";
import { Campaign } from "types/global";
import { Loading } from "components/Loading/Loading";

export default function About() {
  const [session, loading] = useSession();

  const router = useRouter();

  return (
    <Page>
      <div className="py-10">
       Campaign
      </div>
    </Page>
  );
}
