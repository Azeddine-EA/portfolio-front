import styles from '../styles/Home.module.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
            <div className="p-4 bg-blue-100">
      <h1 className="text-red-500 text-3xl font-bold">Hello Tailwind!</h1>
      <Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
        </h1>
      </main>
    </div>
  );
}

export default Home;
