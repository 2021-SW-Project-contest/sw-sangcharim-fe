import React from "react";
import styles from "./Indicator.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface IndicatorProps {
  type?: "dots" | "circle";
  isCenter?: boolean;
  className?: string;
}

const Indicator = (props: IndicatorProps) => {
  const { type = "circle", isCenter, className } = props;

  if (type === "dots") {
    return (
      <div className={cn(isCenter && "container--center", className)}>
        <div className={cn("dot-flashing")} />
      </div>
    );
  } else {
    return (
      <div className={cn(isCenter && "container--center", className)}>
        <div className={cn("circle")} />
      </div>
    );
  }
};

export default Indicator;
