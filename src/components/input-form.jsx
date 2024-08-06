import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function InputForm() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (newItem) => {
      const res = await axios.post("http://localhost:1500/list", newItem);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries("list"),
  });

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      id: +new Date(),
      title: text,
    });
    document.querySelector("#theForm").reset();
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-3xl">ToDo List App</h1>
      <div className="border border-gray-600 w-full"></div>
      <h2 className="text-xl">Input Form</h2>
      <form
        action=""
        className="flex flex-col items-center gap-2 w-[500px]"
        onSubmit={handleSubmit}
        id="theForm"
      >
        <input
          required
          type="text"
          placeholder="ToDo Title..."
          className="w-full h-12 border border-gray-500 rounded-lg px-4 text-xl"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-[140px] h-[50px] text-white bg-green-800 rounded-xl text-xl"
        >
          Add
        </button>
      </form>
    </div>
  );
}
