"use client";
import Burger from "@/components/Burger";
import CategoryBanner from "@/components/CategoryBanner";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MenuPageContent = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "food-tab1";

  return (
    <WellFoodLayout>
      {/* Page Banner Start */}
      <PageBanner pageTitle={"Cassendra's Menu"} />
      {/* Page Banner End */}
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* Restaurant Menu Area start */}
      <RestaurantMenu activeTab={activeTab} />
      {/* Restaurant Menu Area end */}
      {/* Category Banner area start */}
      <CategoryBanner />
      {/* Category Banner area end */}
      {/* Burger Area start */}
      <section className="burger-area pt-100 rpt-70 pb-130 rpb-100 rel z-1">
        <div className="container">
          <Burger />
        </div>
      </section>
      {/* Burger Area end */}
    </WellFoodLayout>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuPageContent />
    </Suspense>
  );
};

export default page;
