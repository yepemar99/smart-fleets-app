import { DataTable } from "@/components/data-table";
import { data } from "@/data/data";

const Vehicles = () => {
  return (
    <div className="my-6">
      <DataTable data={data} />
    </div>
  );
};

export default Vehicles;
