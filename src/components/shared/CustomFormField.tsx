/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Control,
  FieldValues,
  Path,
} from "react-hook-form";
import { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  RADIO = "radio",
  DATE = "date",
}

interface CustomProps<T extends FieldValues> {
  type?: string;
  control: Control<T>;
  name: Path<T>;
  label?: React.ReactNode;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  render?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
  variant?: string;
  defaultValue?: string;
  readOnly?: boolean;
  disabledDates?: (date: Date) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode;
  "data-testid"?: string;
}

const RenderInput = <T extends FieldValues>({
  field,
  props,
}: {
  field: any;
  props: CustomProps<T>;
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
  return (
    <div className="relative">
      <FormControl>
        <Input
          placeholder={props.placeholder}
          {...field}
          type={props.type}
          readOnly={props.readOnly}
          disabled={props.disabled}
          className={`${props.variant} text-16 placeholder:text-16 rounded-[5px] border bg-[#F7FCFF] text-gray-900 placeholder:text-gray-500 pr-10`}
          onChange={(e) => {
            field.onChange(e);
            props.onChange?.(e);
          }}
          data-testid={props["data-testid"]}   // ← This is critical
        />
      </FormControl>

      {props.rightIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          {props.rightIcon}
        </div>
      )}
    </div>
  );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <div className="flex w-full items-center gap-3">
            <PhoneInput
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="w-14 h-11 rounded-[5px] px-3 text-16 border bg-[#F7FCFF]"
            />

            <input
              type="tel"
              value={field.value}
              onChange={(e) => {
                const onlyValidChars = e.target.value.replace(/[^+\d]/g, "");
                field.onChange(onlyValidChars);
              }}
              placeholder={props.placeholder}
              className="w-full h-11 rounded-[5px] px-3 text-16 border bg-[#F7FCFF]"
            />
          </div>
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            disabled={props.disabled}
            className={`${props.variant} border bg-[#F7FCFF] rounded-[5px]`}
          />
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            defaultValue={props.defaultValue}
            onValueChange={field.onChange}
            value={field.value || props.defaultValue}
          >
            <SelectTrigger className={`${props.variant}`}>
              <SelectValue
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
              />
            </SelectTrigger>
            <SelectContent>
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name}>{props.label}</label>
          </div>
        </FormControl>
      );

    case FormFieldType.DATE:
      return (
        <FormControl>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={`w-full ${props.variant}`}>
                {field.value
                  ? format(field.value, props.dateFormat || "PPP")
                  : props.placeholder || "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={props.disabledDates}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormControl>
      );

    case FormFieldType.RADIO:
      return props.render ? props.render(field) : null;

    default:
      return null;
  }
};

const CustomFormField = <T extends FieldValues>(
  props: CustomProps<T>
) => {
  const { control, name, label } = props;

  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="text-14 font-medium text-gray-700">
              {label}
            </FormLabel>
          )}

          <RenderInput field={field} props={props} />

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;