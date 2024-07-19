// "use client";

// import { useState } from "react";
// import { Pagination } from "@/components/ui/pagination";

// export default function Component() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [imagesPerPage] = useState(9);
//   const images = [
//     {
//       id: 1,
//       src: "/placeholder.svg",
//       caption: "Studying the effects of climate change on marine ecosystems",
//     },
//     {
//       id: 2,
//       src: "/placeholder.svg",
//       caption: "Analyzing data from the latest field expedition",
//     },
//     {
//       id: 3,
//       src: "/placeholder.svg",
//       caption: "Developing new techniques for sustainable agriculture",
//     },
//     {
//       id: 4,
//       src: "/placeholder.svg",
//       caption: "Investigating the impact of deforestation on local communities",
//     },
//     {
//       id: 5,
//       src: "/placeholder.svg",
//       caption: "Exploring the potential of renewable energy sources",
//     },
//     {
//       id: 6,
//       src: "/placeholder.svg",
//       caption: "Monitoring the health of endangered species",
//     },
//     {
//       id: 7,
//       src: "/placeholder.svg",
//       caption: "Analyzing data from the latest field expedition",
//     },
//     {
//       id: 8,
//       src: "/placeholder.svg",
//       caption: "Developing new techniques for sustainable agriculture",
//     },
//     {
//       id: 9,
//       src: "/placeholder.svg",
//       caption: "Investigating the impact of deforestation on local communities",
//     },
//     {
//       id: 10,
//       src: "/placeholder.svg",
//       caption: "Exploring the potential of renewable energy sources",
//     },
//     {
//       id: 11,
//       src: "/placeholder.svg",
//       caption: "Monitoring the health of endangered species",
//     },
//     {
//       id: 12,
//       src: "/placeholder.svg",
//       caption: "Studying the effects of climate change on marine ecosystems",
//     },
//   ];
//   const filteredImages = images.filter((image) =>
//     image.caption.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = filteredImages.slice(
//     indexOfFirstImage,
//     indexOfLastImage
//   );
//   const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold mb-6">Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {currentImages.map((image) => (
//           <div key={image.id} className="relative overflow-hidden rounded-lg">
//             <img
//               src="/placeholder.svg"
//               alt={image.caption}
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
//               <p className="text-sm font-medium line-clamp-2">
//                 {image.caption}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// }
