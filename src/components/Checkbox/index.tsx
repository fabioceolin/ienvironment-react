import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useField } from "@unform/core";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  Icon,
} from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  id,
  value,
  checked: isChecked,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(isChecked || false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleCheckboxChange = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement) => {
        return ref.checked;
      },
      clearValue: (ref: HTMLInputElement) => {
        ref.checked = false;
      },
      setValue: (ref: HTMLInputElement, value: boolean) => {
        ref.checked = value;
        setChecked(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox
        onChange={handleCheckboxChange}
        checked={checked}
        defaultChecked={defaultValue}
        ref={inputRef}
        id={id}
        value={value}
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Text checked={checked}>{children}</Text>
    </CheckboxContainer>
  );
};

export default Checkbox;
