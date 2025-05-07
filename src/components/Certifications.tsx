// components/Certifications.tsx
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: " HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    date: "April 23, 2023",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/PUJLPB8UJJGM",
  },
  {
    title: " Java Programming: Solving Problems with Software",
    issuer: "Coursera",
    date: "September 24, 2022",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/RZNH3TAVRBHJ",
  },
  // Add more certifications here
]

export default function Certifications() {
  return (
    <section className="py-12 px-6" id="certifications">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">Issued by {cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Certificate
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
