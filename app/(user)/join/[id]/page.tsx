
import UserLayout from "@/components/Layout/UserLayout";
import ApplicationForm from "./ApplicationForm";
import AOSClient from "@/components/common/AOS";
import { decodeId } from "@/components/common/decode";
import { getInvolvementsGuest } from "../func";
import { getCareerbyId } from "@/app/(admin)/admin/careers/Add/func";
import Link from "next/link";

const ApplyForInvolvement = async ({ params }: { params: any }) => {
  const id: any = params?.id;
  const decoded: any = decodeId(id);
  const data = await getCareerbyId(decoded);

  if (decoded && data?.success) {
      const item: any = data.data;

  
  return (
    <UserLayout>
      <section className="w-full py-20">
      <main className="w-[90%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-20">
        <section className="w-full pb-10 lg:pr-5 flex flex-col gap-3">
          <div
            className="text-sm px-2 py-1 bg-lime-500 w-fit
                                        text-white inline-block rounded my-1 "
          >
            {item.type}
          </div>
          <h1 className="text-3xl font-bold text-primary-500">{item.title}</h1>
          <article
                      className="line-clamp-2 mb-3"
                      dangerouslySetInnerHTML={{ __html: item.body}}
                    ></article>
        </section>

        <section className="w-full">
          <ApplicationForm invId={item.id} />
        </section>
      </main>
      </section>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </UserLayout>
  );
}
else {
        return <UserLayout>
            <main className="commonWidth text-center py-20">
            That doesn't exist anymore! <Link href="/join" className="text-blue-500">Go Back</Link>
        </main>
    </UserLayout>
    }

}

export default ApplyForInvolvement;
