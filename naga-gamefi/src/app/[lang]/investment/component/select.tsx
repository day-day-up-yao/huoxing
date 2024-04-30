import { MenuItem, Select } from '@mui/material';
import React, { useCallback } from 'react';

export default ({ selectlist, defaultvalue, type, handleHaveType, defaultinfo }: any) => {
  const handleSelectChange = useCallback(
    (e: any, child: any) => {
      handleHaveType(type, child.props);
    },
    [handleHaveType, type]
  );
  return (
    <Select
      displayEmpty
      value={defaultinfo.value}
      onChange={handleSelectChange}
      sx={({ palette }) => ({
        height: '40px',
        width: { xs: '100%', sm: '174px' },
        minHeight: 'auto',
        mr: '10px',
        '.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        bgcolor: { xs: palette.background.sub, sm: palette.background.paper },
      })}
      MenuProps={{
        PaperProps: {
          sx: { maxHeight: 240 },
        },
      }}
    >
      <MenuItem value="">{defaultvalue}</MenuItem>
      {selectlist?.map((item: any, index: any) => (
        <MenuItem value={type === 'round' ? item.showName : item.type} key={index}>
          {type === 'round' ? item.showName : item.name}
        </MenuItem>
      ))}
    </Select>
  );
};
