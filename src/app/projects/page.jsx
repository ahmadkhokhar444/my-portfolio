import Projects from "@/components/Projects/Projects";
import Projects2 from "@/components/Projects/Projects2";
import React from "react";

const page = () => {
  return (
    // In your main page or layout component
    <main className="flex flex-col gap-y-10">
      {" "}
      {/* or gap-y-5 or less */}
      <Projects />
      <Projects2 />
    </main>
  );
};

export default page;
