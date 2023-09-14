import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PricingCardProps = {
  name: string;
  desc: string;
  features: string[];
  price: string;
};

export const PricingCard = ({
  name,
  desc,
  features,
  price,
}: PricingCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="mx-3">
        <ul className="list-disc">
          {features.map((feature, index) => {
            return (
              <li key={index} className="">
                {feature}
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <p>{price}</p>
      </CardFooter>
    </Card>
  );
};
