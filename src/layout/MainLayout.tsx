import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";
import FooterComponent from "../components/Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <FooterComponent
          year="CPE207-2025."
          fullName="Sirawit Ariyawattanwong"
          studentId="670610740"
          courseName="All rights reserved."
        />
      </AppShell.Footer>
    </AppShell>
  );
}
