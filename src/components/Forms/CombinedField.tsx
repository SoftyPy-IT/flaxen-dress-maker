import React, { useState } from "react";
import { TextField, MenuItem, Paper } from "@mui/material";

interface CombinedFieldProps {
  label: string;
  units: string[];
}

const FlaxenCombinedField: React.FC<CombinedFieldProps> = ({
  label,
  units,
}) => {
  const [value, setValue] = useState<string>("");
  const [unit, setUnit] = useState<string>(units[0]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChangeUnit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

  return (
    <div className="flex w-[300px]">
      <TextField
        label={label}
        value={value}
        onChange={handleChangeValue}
        fullWidth
      />
      <TextField
        select
        value={unit}
        onChange={handleChangeUnit}
        size="medium"
        sx={{ width: 120, ml: 1 }}
      >
        {units.map((unitOption) => (
          <MenuItem key={unitOption} value={unitOption}>
            {unitOption}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FlaxenCombinedField;
