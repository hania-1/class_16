import Contact from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <p className="mb-5">We did love to hear from you! Please fill out the form below:</p>
      <Contact />
    </div>
  );
};

export default ContactPage;
