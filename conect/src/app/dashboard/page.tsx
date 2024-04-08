// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenuTrigger,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
//   DropdownMenuContent,
//   DropdownMenu,
// } from "@/components/ui/dropdown-menu";

// export default function Component() {
//   return (
//     <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
//         <div className="flex flex-col gap-2">
//           <div className="flex h-[60px] items-center px-6">
//             <Link className="flex items-center gap-2 font-semibold" href="#">
//               <Package2Icon className="h-6 w-6" />
//               <span className="">Acme Inc</span>
//             </Link>
//           </div>
//           <div className="flex-1">
//             <nav className="grid items-start px-4 text-sm font-medium">
//               <Link
//                 className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <HomeIcon className="h-4 w-4" />
//                 Home
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <UsersIcon className="h-4 w-4" />
//                 Users
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <PackageIcon className="h-4 w-4" />
//                 Products
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <SettingsIcon className="h-4 w-4" />
//                 Settings
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
//           <Link className="lg:hidden" href="#">
//             <Package2Icon className="h-6 w-6" />
//             <span className="sr-only">Home</span>
//           </Link>
//           <div className="flex-1">
//             <form>
//               <div className="relative">
//                 <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
//                 <Input
//                   className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
//                   placeholder="Search..."
//                   type="search"
//                 />
//               </div>
//             </form>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className="rounded-full" size="icon" variant="ghost">
//                 <img
//                   alt="Avatar"
//                   className="rounded-full"
//                   height="32"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "32/32",
//                     objectFit: "cover",
//                   }}
//                   width="32"
//                 />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <div className="grid items-start gap-4">
//             <h1 className="font-semibold text-2xl">Dashboard</h1>
//             <div className="grid w-full gap-4">
//               {/* <Card>
//                 <CardHeader>
//                   <CardTitle>New Users</CardTitle>
//                   <CardDescription>Acme Inc new signups</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <BarChart className="w-full aspect-[2/1]" />
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recent Orders</CardTitle>
//                   <CardDescription>Acme Inc order history</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <CurvedlineChart className="w-[50vw] aspect-[3/2]" />
//                 </CardContent>
//               </Card> */}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function HomeIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// function Package2Icon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   );
// }

// function PackageIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   );
// }

// function SearchIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// function SettingsIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   );
// }

// function UsersIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UCfjwcT8aeI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
  CardHeader,
} from "@/components/ui/Card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
// import { ResponsiveBar } from "@nivo/bar";

export default function Component() {
  return (
    <div className="flex w-full">
      <div className="hidden w-60 bg-gray-100 border-r md:block dark:bg-gray-800 border-gray-200/40 dark:border-gray-800/40">
        <div className="flex flex-col h-screen">
          <nav className="flex flex-1 flex-col">
            <div className="flex-1 flex flex-col justify-between py-4">
              <div className="flex-1 flex flex-col gap-1">
                <Link
                  className="flex items-center gap-2 py-2 pl-4 text-sm font-medium"
                  href="#"
                >
                  <HomeIcon className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  className="flex items-center gap-2 py-2 pl-4 text-sm font-medium"
                  href="#"
                >
                  <TrendingUpIcon className="w-4 h-4" />
                  Investments
                </Link>
                <Link
                  className="flex items-center gap-2 py-2 pl-4 text-sm font-medium"
                  href="#"
                >
                  <CreditCardIcon className="w-4 h-4" />
                  Transactions
                </Link>
                <Link
                  className="flex items-center gap-2 py-2 pl-4 text-sm font-medium"
                  href="#"
                >
                  <PieChartIcon className="w-4 h-4" />
                  Portfolio
                </Link>
              </div>
              <div className="flex items-center flex-col gap-1">
                <Link
                  className="flex items-center gap-2 text-sm font-medium"
                  href="#"
                >
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </Link>
                <Button className="rounded-full" size="icon" variant="outline">
                  <UserIcon className="w-4 h-4" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        {/* <header className="flex items-center h-14 border-b gap-4 px-4 md:gap-6 md:px-6 shrink-0">
          <Button
            className="rounded-full md:hidden"
            size="icon"
            variant="ghost"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex-1 w-full min-w-0 text-sm font-semibold md:text-base">
            Dashboard
          </div>
          <form className="flex-1 mx-4 md:mx-6">
            <Input
              className="w-full md:w-[300px]"
              placeholder="Search..."
              type="search"
            />
          </form>
          <div className="flex items-center gap-2 md:gap-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <BellIcon className="w-4 h-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <MailIcon className="w-4 h-4" />
              <span className="sr-only">Toggle messages</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header> */}
        <main className="flex-1 overflow-hidden">
          <div className="grid h-[calc(100vh_-_theme(spacing.14)_-_theme(spacing.16))] gap-4 p-4 md:gap-8 md:p-10">
            <Card>
              <CardContent className="flex flex-col gap-2">
                <CardTitle className="text-lg">
                  Your Mutual Fund Investments
                </CardTitle>
                <CardDescription className="text-sm">
                  Here's a summary of your mutual fund investments.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Investment</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Units</TableHead>
                      <TableHead>NAV</TableHead>
                      <TableHead>Invested</TableHead>
                      <TableHead>Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-gray-100 dark:bg-gray-800">
                      <TableCell>Acme Large Cap Fund</TableCell>
                      <TableCell>₹12,500</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>₹125</TableCell>
                      <TableCell>₹12,000</TableCell>
                      <TableCell>+4.16%</TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-100 dark:bg-gray-800">
                      <TableCell>Acme Mid Cap Fund</TableCell>
                      <TableCell>₹10,000</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>₹100</TableCell>
                      <TableCell>₹10,000</TableCell>
                      <TableCell>0.00%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Acme Small Cap Fund</TableCell>
                      <TableCell>₹5,000</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>₹50</TableCell>
                      <TableCell>₹5,000</TableCell>
                      <TableCell>0.00%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Recent Transactions
                  </CardTitle>
                  <Button
                    className="rounded-full"
                    size="icon"
                    variant="outline"
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-semibold">Investment</p>
                    <p>Acme Large Cap Fund</p>
                    <p className="font-semibold">Units</p>
                    <p>100</p>
                    <p className="font-semibold">Amount</p>
                    <p>₹10,000</p>
                  </div>
                </CardContent>
              </Card>
              {/* <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Portfolio Performance
                  </CardTitle>
                  <Button
                    className="rounded-full"
                    size="icon"
                    variant="outline"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[200px]">
                  <BarChart className="w-full aspect-[2/1]" />
                </CardContent>
              </Card> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// function BarChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   );
// }

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}