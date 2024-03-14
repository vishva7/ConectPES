import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"

export default function EventsPage() {
    const events = [
        {
          title: 'Workshop on VM Communication',
          description: 'To tryout with multiple system we do not need physical multiple systems. Using multiple virtual machines with communication setup, we can create our near to real network on a single machine.',
          date: '2024-02-07',
          time: '2:15pm',
          registrationLink: 'https://forms.gle/rMMQtmJmWE5Q5D4a6',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: true,
        },
        {
          title: 'Workshop on MININET',
          description: 'Mininet is a popular simulation tool for Software Defined network which take very less resources even for big network. Networking Experimentation and Innovation can be made using the tool.',
          date: '2024-02-21',
          time: '2:15pm',
          registrationLink: 'https://forms.gle/1HFAXxpF2jA8A6iH9',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: true,
        },
        {
          title: 'Networking Hackathon',
          description: 'It was organized for ECE 5th Semester students based on GNS3 tool. It had 2 rounds. First round was to select the top 30 candidates. Then the second round was for real competition',
          date: '2023-11-20',
          time: '1:45pm - 3:30pm',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: false,
        },
        {
          title: 'Workshop on NS3',
          description: 'To tryout with multiple system we do not need physical multiple systems. Using multiple virtual machines with communication setup, we can create our near to real network on a single machine.',
          date: '2023-11-15',
          time: '2:15pm',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: false,
        },
        {
          title: 'Guest Talk from ISRO',
          description: 'Guest talk on “Chandrayaan 3 Mission - from a communication perspective”. Guest Lecture Mr A Rajendra Kumar is a scientist in ISRO. With a Masters degree in Satellite Technology and Applications from IISc and by working in ISRO for over 23 years, he has in-depth knowledge in the development life cycle of electronics hardware for satellite systems of LEO, GEO and interplanetary missions.',
          date: '2023-11-03',
          time: '12:00pm',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: false,
        },
        {
          title: 'INAUGURATION',
          description: 'Inauguration of CONECT was done by Pro Vice Chancellor Prof. Nagarjuna Sadineni in presence of principal Dr. Subhas Kulkarni, ECE chairperson Dr. Ajey SNR and Mr A Rajendra Kumar (ISRO).',
          date: '2023-11-03',
          time: '11:30am',
          image: 'path/to/image.jpg', // replace with the actual path to the image
          upcoming: false,
        },
      ];
    // Add more events as needed

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {events.map((event, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Registration Link: <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">{event.registrationLink}</a></p>
            <p>Upcoming: {event.upcoming ? 'Yes' : 'No'}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}