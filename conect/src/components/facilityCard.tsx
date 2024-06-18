import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { facilities } from "@/lib/types";

const FacilityCard = ({ title, description, image, specs }: facilities) => {
  return (
    <Card className="w-full max-w-md">
      <img
        src={image as string}
        alt="Research Facility"
        className="rounded-t-lg object-cover w-full aspect-[4/3]"
      />
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-semibold">Facility Specifications</h3>
            <div className="text-sm">{specs}</div>
          </div>
          <Button variant="outline" className="justify-self-start">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
