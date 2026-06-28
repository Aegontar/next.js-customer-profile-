import styles from "./page.module.css";

export default function Home() {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      userName: formData.get("userName"),
      password: formData.get("passWord"),
    };

    console.log("rawFormData", rawFormData);

    // mutate data
    // revalidate the cache
  }

  return (
    <div className={styles.page}>
      <main className={styles.header}>Keep Track of all Customers</main>
      <form action={createInvoice}>
        <input name="userName" type="text" />
        <input name="passWord" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
