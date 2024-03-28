"use client";

import { fetchFromAPI } from "@/app/extras/actions";

export default function HackedComponent({ data }: any) {
  fetchFromAPI();
  return <h1>hacked</h1>;
}
