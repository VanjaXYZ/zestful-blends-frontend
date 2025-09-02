import React from 'react'
import { cherryBomb } from '../../../../fonts';

const page = () => {

  const paragraphs = [
    {
    id: 1,
    title: "Introduction", 
    text:"Welcome to Zestful Blends..."
    },
    {
    id: 2,
    title: "Communication", 
    text:"Commuincation with Zestful Blends..."
    },
    {
    id: 3,
    title: "Privacy Policy", 
    text:"At Zestful Blends..."
    },
    {
    id: 4,
    title: "Products And Services", 
    text:"Zestful Blends is proud..."
    },
    {
    id: 5,
    title: "Intelectual Property", 
    text:"The content..."
    },
    {
    id: 6,
    title: "User Obligations", 
    text:"By accesing and using Zestful Blends..."
    },
    {
    id: 7,
    title: "Limitations of Liability", 
    text:"Zestful Blends endeavors..."
    },
    {
    id: 8,
    title: "Modifications to the Terms and Conditions", 
    text:"Zestful Blends reservs..."
    },
    {
    id: 9,
    title: "Governing Law", 
    text:"Any disputes..."
    },
    {
    id: 10,
    title: "Contact Us", 
    text:"If you have any questions about our Terms and Conditions, please contact us at: info@zestfulblends.com"
    },
  ]
    

  return (
       <main className="p-12 ">
        {paragraphs.map(paragraph => (
          <div key={paragraph.id} className="flex flex-col gap-2 mb-8">
            <h1 className={`text-primary-green text-4xl ${cherryBomb.className}`}>
              {paragraph.title}
            </h1>
  
            {paragraph.title === "Contact Us" ? (() => {
              const [before, email] = paragraph.text.split(": ");
              return (
                <p>
                  {before}: <span className="font-bold">{email}</span>
                </p>
              )
            })() : (
              <p>{paragraph.text}</p>
            )}
          </div>
        ))}
      </main>
      
    )
}

export default page