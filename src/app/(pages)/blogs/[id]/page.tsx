import React from "react";
import DATA from "../DUMMY-TEXT.json";
import { BlogProps } from "../components/BlogList";
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import Image from "next/image";
import RecentBlogs from "./components/RecentBlogs";

const page = async ({ params }: { params: { id: string } }) => {
  const blogData: BlogProps[] = DATA.articles;
  const blog = blogData.find(
    (blog: BlogProps) => blog.id === Number(params.id)
  );
  return (
    <main className="bg-cream-yellow">
      <Breadcrumbs />
      <section className="lg:mt-24 p-4">
        <article className="flex flex-col gap-4 border-b border-black">
          <div className="space-y-4">
            <h2 className="text-xl text-center sm:text-start lg:text-4xl font-semibold">
              {blog?.title}
            </h2>
            <div className="flex gap-4">
              <span className="font-semibold border-r px-4 border-black text-xs sm:text-base">
                {blog?.author}
              </span>
              <span className="font-semibold text-xs sm:text-base">
                {blog?.date}
              </span>
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              src={blog?.src as string}
              width={1920}
              height={1080}
              alt={blog?.title as string}
              className="rounded-xl h-64 w-full object-cover object-center"
            />
          </div>
          <h2 className="text-xl text-center sm:text-start lg:text-4xl font-semibold mt-4">
            {blog?.excerpt}
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis exercitationem reiciendis ducimus adipisci recusandae
            quam totam. Odio omnis dolores suscipit ipsam perferendis voluptatem
            harum ad, provident debitis quidem illum. Perferendis aliquid
            delectus fugit hic possimus, iusto veniam quis obcaecati itaque sit
            voluptate repellat! Necessitatibus ad quae laborum, vitae rerum sed.
            Repudiandae quod molestias, est sapiente earum dignissimos iusto
            aspernatur perspiciatis molestiae quisquam vel cum quo aliquid? In
            provident sint odit sequi nobis. Quibusdam adipisci eligendi quas
            excepturi quidem? Quasi illum vero ad incidunt dolor blanditiis
            accusamus neque culpa fugiat ea unde impedit, voluptates inventore?
            Provident, iste? Praesentium veniam error, tempora recusandae, neque
            sit nesciunt quam pariatur voluptas doloremque dolores eveniet quod
            consequatur eos. Pariatur, corporis eos maiores numquam quaerat
            aliquam.
          </p>
          <h2 className="text-xl text-center sm:text-start lg:text-4xl font-semibold mt-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
            assumenda architecto ipsam suscipit cupiditate quos at neque tempora
            expedita enim dicta, esse, delectus iste veritatis aliquid adipisci
            temporibus sunt beatae hic alias praesentium culpa voluptas. Minus
            tenetur sapiente enim, commodi praesentium placeat dignissimos non
            nesciunt quibusdam quos laboriosam, nemo, officiis error. Mollitia,
            ullam dolores. Aspernatur nemo sed odit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-center sm:text-start lg:text-4xl font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                natus, doloribus illum labore quibusdam ipsam, illo totam nobis
                qui odio aliquam, quo corrupti. Commodi earum accusantium vel
                impedit, molestiae laudantium sed recusandae quo enim
                necessitatibus nostrum esse eos ab quisquam!
              </p>
              <h2 className="text-xl text-center sm:text-start lg:text-4xl font-semibold">
                Lorem, ipsum dolor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio repellat tempora asperiores omnis similique. Mollitia
                maxime atque eos repellat quo, commodi illum. Doloribus corrupti
                illo enim iusto esse dolorem amet. Unde ducimus amet iusto?
                Consequuntur facere pariatur nam perspiciatis veritatis non
                tempora ducimus, necessitatibus nulla doloribus dolores
                temporibus.
              </p>
            </div>
            <div className="flex justify-center py-4">
              <Image
                src={blog?.src as string}
                width={500}
                height={500}
                alt={blog?.title as string}
                className="rounded-3xl shadow-lg lg:w-96 h-72 w-full object-cover object-center"
              />
            </div>
          </div>
        </article>
      </section>
      <RecentBlogs blogs={blogData} />
    </main>
  );
};

export default page;
