import * as React from "react";

import TextGradient from "@/components/attr/TextGradient";
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";

export default function BlogPage() {
  return (
    <>
      <Layout>
        <HeadMeta templateTitle="My Blog" />
        <main>
          <section className="flex flex-row justify-center text-center mb-10 min-h-main layout fade-in-start">
            <TextGradient className="text-3xl text-center font-bold my-auto p-4">
              {" "}
              Blog For Next Project{" "}
            </TextGradient>
          </section>
        </main>
      </Layout>
    </>
  );
}
