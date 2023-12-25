import React from "react";
import FeatureCard from "./featureCard";
import { features } from "./featureData";

const Features: React.FC = () => (
  <section className="container mx-auto py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;
