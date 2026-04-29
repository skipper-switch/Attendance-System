import React from "react";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

interface SubmitButtonProps {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  "data-testid"?: string;   
   testId?: string;     
}

const SubmitButton = ({
  type = "submit",
  isLoading = false,
  loadingText = "Submitting...",
  className,
  children,
  disabled,
  onClick,
  "data-testid": dataTestId, 
    testId,   
  ...props                     
}: SubmitButtonProps) => {
  return (
    <Button
      type={type}
      disabled={isLoading || disabled}
      className={className ?? "text-white cursor-pointer"}
      onClick={onClick}
      data-testid={testId ?? dataTestId}      
      {...props}                   
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Loader className="h-4 w-4 animate-spin" />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
