import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type Imgs = {
  url: string;
  height: number;
  width: number;
  filename: string;
};

export default function CarouselComponent({ imgs }: { imgs: Imgs[] }) {
  console.log(imgs);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="max-w-xl">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {imgs.map((img, index) => (
              <CarouselItem key={index}>
                <Card className="border-transparent">
                  <CardContent>
                    <img
                      src={img.url}
                      alt={img.filename}
                      className="w-[540px] h-[360px] object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </>
  );
}
