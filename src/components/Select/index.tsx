import React, { useState, useEffect, useRef, useCallback } from "react";

import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";
import { Props, OptionTypeBase } from "react-select";

import { Container, Error, MultiSelect } from "./styles";

interface SelectProps extends Props<OptionTypeBase> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  options,
  ...rest
}) => {
  const selectRef = useRef<SelectProps>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.state.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        } else {
          if (!ref.state.value) {
            return "";
          }

          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <MultiSelect
        className="select-container"
        classNamePrefix="select"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        isClearable={true}
        isSearchable={true}
        placeholder="Descrição"
        name="color"
        options={options}
        ref={selectRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c54040" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
