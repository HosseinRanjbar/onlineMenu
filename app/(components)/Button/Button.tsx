import React from "react";

interface props {
  content?: string | number;
  children?: any;
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  textColor?: string;
  border?: string;
  borderRadius?: string;
  onClick?: (v: any) => void;
  id?: string;
}

const Button = ({
  content,
  children,
  className,
  color,
  width,
  height,
  textColor,
  border,
  borderRadius,
  onClick,
  id,
  ...res
}: props) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        color: textColor,
        border: border,
        borderRadius: borderRadius,
      }}
      {...res}
    >
      {content || children}
    </button>
  );
};

export default Button;
