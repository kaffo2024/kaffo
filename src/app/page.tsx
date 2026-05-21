import styles from "./page.module.css";
import Hero from "../components/hero/Hero";
import HomeAbout from "../components/home-about/HomeAbout";
import { categories } from "../data/data";
import ContactUs from "../components/contact-us/ContactUs";
import ServicesSection from "../components/services/ServicesSection";
import { getServices } from "../actions/actions";

export default async function Home() {
  const services = await getServices();

  return (
    <main className={styles.main}>
      <Hero />
      <HomeAbout />
      <ServicesSection categories={categories} services={services} />
      <ContactUs />
    </main>
  );
}
