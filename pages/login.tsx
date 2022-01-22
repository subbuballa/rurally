import React from "react";
import Page from "../components/Page/Page";
import { useSession } from "next-auth/client";
import { Title } from "components/Typography/Typography";
import { ConnectBankButton } from "components/ConnectBank/ConnectBankButton";
import { useRouter } from "next/dist/client/router";
import { Button, Button_Type } from "components/Button/Button";

export default function Login() {
  const [session, loading] = useSession();

  const router = useRouter();

  return (
    <Page>
      <Title>Log in or register!</Title>
    </Page>
  );
}
