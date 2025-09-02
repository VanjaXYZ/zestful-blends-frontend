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
    title: "Information Collection", 
    text:"At Zestful Blends..."
    },
    {
    id: 3,
    title: "Use Of Information", 
    text:"Understanding how your information..."
    },
    {
    id: 4,
    title: "Sharing Of information", 
    text:"At Zestful Blends..."
    },
    {
    id: 5,
    title: "Your Rights And Choices", 
    text:"We believe in..."
    },
    {
    id: 6,
    title: "Data Security", 
    text:"At Zestful Blends..."
    },
    {
    id: 7,
    title: "Changes to the policy", 
    text:"At Zestful Blends..."
    },
    {
    id: 8,
    title: "Contact Us", 
    text:"If you have any questions about this Privacy Policy, please contact us at: info@zestfulblends.com"
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