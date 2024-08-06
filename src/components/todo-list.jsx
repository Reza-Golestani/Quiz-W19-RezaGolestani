import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ToDoList() {
  const { data } = useQuery({
    queryKey: ["list"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1500/list");
      return res.data;
    },
  });

  return (
    <div className="flex flex-col gap-4 mt-8 items-center" >
        <h2 className="text-xl">ToDo List</h2>
      {data?.map((item) => {
        return (
          <div key={item.id} className=" px-5 h-[50px] w-[500px] rounded-lg bg-indigo-100 flex flex-row justify-between items-center">
            <p>{item.title}</p>
            <button className="bg-red-300 color-white rounded-lg h-[35px] w-[80px]">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
