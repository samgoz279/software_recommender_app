"use client";

import { getChatCompletion } from '@/backend/ai';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default async function GridPage() {
   const router = useRouter();
   const response = await fetch(`http://localhost:5000/llm`
   if (!llamaResult.success) {
      console.log("Llama error:", llamaResult.error);
    }
   console.log(llamaResult.data)
   useEffect(() => {
      const alreadyDecremented = sessionStorage.getItem("credits-decremented");
      if (alreadyDecremented) return;
      const creditsStr = localStorage.getItem("credits");
      let credits = creditsStr ? parseInt(creditsStr, 10) : 20;

      if (!creditsStr) {
        localStorage.setItem("credits", "20");
      } else if (credits > 0) {
        credits -= 1;
        localStorage.setItem("credits", credits.toString());
      }

      console.log("Credits after visiting grid:", credits);
    }, []);

  const requirements = [
    {
      requirement: "User Authentication with Roles",
      example: "OAuth2 login; Roles: Admin, Manager, Employee",
    },
    {
      requirement: "Customer Data Storage & Management",
      example: "PostgreSQL database with encryption at rest",
    },
    {
      requirement: "Sales Performance Reports & Analytics",
      example: "Dashboard with KPIs, monthly revenue trends",
    },
    {
      requirement: "Email Service Integration",
      example: "Connected to Gmail API and Outlook API",
    },
    {
      requirement: "API Access for Third-party Integrations",
      example: "RESTful API with OAuth2 authentication",
    },
  ];

//   return (
//     <main className="min-h-screen bg-gray-50 p-10">
//       <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
//         Example CRM Software Requirements
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="py-3 px-6 text-left">Requirement</th>
//               <th className="py-3 px-6 text-left">Example Implementation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requirements.map((item, index) => (
//               <tr
//                 key={index}
//                 className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
//               >
//                 <td className="py-4 px-6 font-medium text-gray-700">
//                   {item.requirement}
//                 </td>
//                 <td className="py-4 px-6 text-gray-600">{item.example}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </main>
//   );
// }
//
// if (!llamaResult.success) {
//     console.log("Llama error:", llamaResult.error);
//     // Handle error case in your UI
//     return (
//       <div>
//         <h1>Error fetching AI response</h1>
//         <p>Please try again later.</p>
//       </div>
//     );
//   }
//
//   console.log(llamaResult.data);

   return (
     <main className="min-h-screen bg-gray-50 p-10">
       <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
         Example CRM Software Requirements
       </h1>
       <div className="overflow-x-auto">
         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
           <thead className="bg-blue-500 text-white">
             <tr>
               <th className="py-3 px-6 text-left">Requirement</th>
               <th className="py-3 px-6 text-left">Example Implementation</th>
             </tr>
           </thead>
           <tbody>
             {requirements.map((item, index) => (
               <tr
                 key={index}
                 className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
               >
                 <td className="py-4 px-6 font-medium text-gray-700">
                   {item.requirement}
                 </td>
                 <td className="py-4 px-6 text-gray-600">{item.example}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       <button
             onClick={() => router.push('/')} // navigate to home
             className="fixed bottom-6 left-6 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition"
             aria-label="Go back"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
             </svg>
           </button>
     </main>
   );
 }