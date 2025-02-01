
import UserLayout from "@/components/Layout/UserLayout";
import ApplicationForm from "./ApplicationForm";
import AOSClient from "@/components/common/AOS";
import { decodeId } from "@/components/common/decode";
import { getInvolvementsGuest } from "../func";

const ApplyForInvolvement = async ({ params }: { params: any }) => {
  const id: any = params?.id;
  const decoded: any = decodeId(id);
  const data: any = await getInvolvementsGuest(decoded);

  if (decoded && data?.success) {
      const item: any = data.data;

  
  return (
    <UserLayout>
      <AOSClient />
      <div className="h-32"></div>
      <main className="commonWidth py-16 grid lg:grid-cols-2">
        <section className="w-full pb-10 lg:pr-5">
          <div
            className="text-xs px-2 py-1 bg-secondary
                                        text-white inline-block rounded my-1 "
          >
            {item.type}
          </div>
          <h1 className="text-3xl font-bold text-primary-500">{item.title}</h1>
          <div>{item.description}</div>
        </section>

        <section className="w-full">
          <ApplicationForm invId={item.id} />
        </section>
      </main>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </UserLayout>
  );
}
else {
        return <UserLayout>
            <main className="commonWidth text-center">
            That doesn't exist anymore!
        </main>
    </UserLayout>
    }

}

export default ApplyForInvolvement;
