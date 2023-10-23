import React from "react";
import { Button, TextArea, Select } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

interface MovieForm {
  notes: string;
  title: string;
  ReleaseDate: string;
  rating: string;
}
const MovieNotes = ({ movie }) => {
  const { register, handleSubmit } = useForm<MovieForm>();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex flex-col gap-3"
    >
      {" "}
      <Select.Root {...register("rating")}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="1">1</Select.Item>
          <Select.Item value="2">2</Select.Item>
          <Select.Item value="3">3</Select.Item>
          <Select.Item value="4">4</Select.Item>
          <Select.Item value="5">5</Select.Item>
        </Select.Content>
      </Select.Root>
      <label className="font-bold text-white">Presonal notes</label>
      <input type="hidden" value={movie.Title} {...register("title")} />
      <input type="hidden" value={movie.Year} {...register("ReleaseDate")} />
      {/* <input type="hidden" value={movie.rating} {...register("title")} /> */}
      <TextArea placeholder="Personal notes…" {...register("notes")} />
      <Button variant="solid">Submit</Button>
    </form>
  );
};

export default MovieNotes;
