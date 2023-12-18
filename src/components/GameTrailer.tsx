import React from "react";
import useGameTrailer from "./hooks/useGameTrailer";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(slug);
  if (!data) return null;
  if (isLoading) return null;
  if (error) throw error;

  const first = data.results[0];

  return first ? (
    <video src={first.data["max"]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
