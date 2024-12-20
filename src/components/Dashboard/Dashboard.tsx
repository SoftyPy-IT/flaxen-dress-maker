import React from "react";
import PaymentsSection from "./PaymentSection";
import QuickTransfer from "./QuickTransfer";
import ActivitySection from "./ActivitySection";
import EfficiencySection from "./EfficiencySection";
import TopCards from "./TopCards";
import CardDetailsSection from "./CardDetailsSection";
import IncomeExpenseChart from "./IncomeExpenseChart";
import NewOrder from "./NewOrder";
import Tracking from "./Tracking";
import RecentWork from "./RecentWork";

const Dashboard = () => {
  return (
    <div className=" bg-gray-100">
      <div className="">
        <TopCards />


        <Tracking/>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Card Details Section */}
          <CardDetailsSection />
          <NewOrder />

          {/* Efficiency Section */}
        </div>
<RecentWork/>
        <div className="my-4 grid grid-cols-1 space-x-4 md:grid-cols-3 ">
          <ActivitySection />
          <PaymentsSection />
          <QuickTransfer />
        </div>
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 ">
          <EfficiencySection />
          <IncomeExpenseChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
