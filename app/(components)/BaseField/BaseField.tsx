import React from "react";

interface Props {
  type: "text" | "password" | "email" ;
  className?: string;
  placeholder?: string;

}

const BaseField = ({ type = "text",className, placeholder, }: Props) => {
  return (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
      />
  );
};

export default BaseField;
