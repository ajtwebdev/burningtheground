import React from "react";
import Seo from "../../seo";

export default function SeoPage({ title, description }) {
  return (
    <div>
      <Seo title={title} description={description} />
    </div>
  );
}
