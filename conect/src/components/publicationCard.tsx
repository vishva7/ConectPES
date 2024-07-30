import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/Card";
import Link from "next/link";
import { publications } from "@/lib/types";

function PublicationCard({ title, authors, summary, link }: publications) {
  const formatAuthors = (text: string) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription
          className="text-sm"
          dangerouslySetInnerHTML={formatAuthors(authors)}
        ></CardDescription>
      </CardHeader>
      <CardContent className="text-sm/relaxed text-justify">
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <Link className="font-semibold underline" href={link} target="_blank">
          View Publication
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PublicationCard;
