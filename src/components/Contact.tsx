import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="space-y-4">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  )
}

export default Contact
