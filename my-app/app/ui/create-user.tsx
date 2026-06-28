export default function Page() {
  async function createInvoice(formData: FormData) {
    "use server";

    const session = await auth();
    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    // mutate data
    // revalidate the cache
  }

  return <form action={createInvoice}>...</form>;
}
