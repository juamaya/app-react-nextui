"use client";

import React, { Key } from "react";
import { title } from "@/components/primitives";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
 
import { Image } from "@heroui/image";

export default function PricingPage() {
  const [selected, setSelected] = React.useState<string>("photos");

 
  
  return (
    <>
      <div className="flex w-full flex-col  flex-auto">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={(key: Key) => setSelected(String(key))}
        >
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                <h2>Imagen</h2>
                <Image
                  alt="HeroUI hero Image"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={300}
                />
                <h2 className="mt-5">Imagen</h2>
                <Image
                  alt="HeroUI hero Image"
                  src="/app-react-nextui/app.png"
                  width={300}
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
