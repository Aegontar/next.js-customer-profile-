import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.header}>Keep Track of all Customers</main>
      <Form action="/search">
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <input name="email" />
        <input name="password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
