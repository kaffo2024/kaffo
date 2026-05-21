import ContactUs from "@/src/components/contact-us/ContactUs";
import PageHeader from "@/src/components/page-header/PageHeader";

function page() {
  return (
    <div>
      <PageHeader
        background="/pages-headers/contact.jpg"
        title="تـواصـل مـعـانـا"
      />
      <main className="pt-16 md:pt-20 lg:pt-24">
        <ContactUs />
      </main>
    </div>
  );
}

export default page;
