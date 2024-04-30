import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { nanoid } from 'nanoid';
import { useInputProps } from '../../public';

type UserTag = { value?: string; id: string };
export const tag3friend = 'tag3friend';

const CampaignCreateItemTaskItemQuoteATweetUsertag = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const inputProps = useInputProps({ item, handleInputChange });

  // --------------------tag way--------------------
  const tagWays = useMemo(
    () => [
      { type: 1, value: t(data.text2) },
      { type: 2, value: t(data.text3) },
    ],
    [data.text2, data.text3, t]
  );
  const [curTagWay, setCutTagWay] = React.useState(tagWays[0]);

  // --------------------specified--------------------
  const [usertags, setUsertags] = React.useState<UserTag[]>([{ id: nanoid() }]);

  const changeParam2Value = useCallback(
    (tags: UserTag[], tagWay?: number) => {
      const apiTagsParam2 = tags
        .map((usertag) => (usertag.value ? `@${usertag.value}` : null))
        .filter((item) => item !== null);

      handleInputChange({
        ...item,
        param2:
          (tagWay || curTagWay.type) === tagWays[0].type
            ? 'tag3friend'
            : apiTagsParam2.length === 0
            ? ''
            : apiTagsParam2.join('&').replace(/\s/g, ''),
      });
    },
    [curTagWay.type, handleInputChange, item, tagWays]
  );

  useEffect(() => {
    changeParam2Value(usertags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usertags]);

  const canNotDelete = usertags.length === 1;
  const canNotAdd = usertags.length >= 6;

  const deleteOneHashTag = useCallback(
    (id: string) => {
      if (canNotDelete) return;
      const tags = usertags
        .map((usertag) => (usertag.id === id ? null : usertag))
        .filter((usertag) => usertag !== null) as unknown as UserTag[];

      setUsertags(() => {
        changeParam2Value(tags);
        return tags;
      });
    },
    [canNotDelete, changeParam2Value, usertags]
  );

  const changeUsertagValue = useCallback(
    (id: string, value: string) => {
      const tags = usertags.map((usertag) => (usertag.id === id ? { ...usertag, value } : usertag));

      setUsertags(() => {
        changeParam2Value(tags);
        return tags;
      });
    },
    [changeParam2Value, usertags]
  );

  const deleteTag = useCallback(
    (id: string) =>
      !canNotDelete && (
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            display: 'none',
            right: '-12px',
            top: '-12px',
            borderRadius: '100%',
            minWidth: '24px',
            height: '24px',
            padding: '0',
          }}
          onClick={() => deleteOneHashTag(id)}
        >
          <ClearIcon sx={{ width: '16px' }} />
        </Button>
      ),
    [canNotDelete, deleteOneHashTag]
  );

  // --------------------render--------------------
  return (
    <div className="campaign-create-item-task-item-content">
      <Box
        sx={{
          marginBottom: '16px',
          borderRadius: '8px',
        }}
      >
        {tagWays.map((tagWay, index) => (
          <Button
            key={tagWay.type}
            variant={curTagWay.type === tagWay.type ? 'contained' : 'soft'}
            color={curTagWay.type === tagWay.type ? 'primary' : 'info'}
            sx={{
              marginRight: index === 0 ? '8px' : 0,
              backgroundColor: curTagWay.type === tagWay.type ? '' : 'var(--nage-gameitem-bg)',
              borderRadius: '5px',
            }}
            onClick={() => {
              setCutTagWay(tagWay);
              changeParam2Value(usertags, tagWay.type);
            }}
          >
            {tagWay.value}
          </Button>
        ))}
      </Box>

      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text)}</InputGroup.Addon>
        <Input className="input" placeholder="https://" {...inputProps} />
      </InputGroup>

      {curTagWay.type === tagWays[1].type && (
        <Stack marginTop="8px" flexDirection="row" alignItems="center" flexWrap="wrap">
          {usertags.map((usertag, index) =>
            index === 0 ? (
              <Stack
                key={usertag.id}
                position="relative"
                sx={{
                  marginRight: '8px',
                  width: '220px',
                  marginTop: '8px',
                  '&:hover': {
                    button: {
                      display: 'flex',
                    },
                  },
                }}
              >
                <InputGroup className="input-group">
                  <InputGroup.Addon className="input-group-add-left-first">
                    {t(data?.text1)}
                  </InputGroup.Addon>
                  <Input
                    className="input"
                    placeholder="@"
                    value={usertag.value || ''}
                    onChange={(value) => changeUsertagValue(usertag.id, value)}
                    style={{ width: '120px' }}
                  />
                </InputGroup>
                {deleteTag(usertag.id)}
              </Stack>
            ) : (
              <Stack
                key={usertag.id}
                flexDirection="row"
                alignItems="center"
                position="relative"
                sx={{
                  marginTop: '8px',
                  marginRight: '8px',
                  '&:hover': {
                    button: {
                      display: 'flex',
                    },
                  },
                }}
              >
                <Typography
                  sx={({ palette }) => ({ color: palette.text.primary, marginRight: '8px' })}
                >
                  &
                </Typography>
                <Input
                  className="input"
                  placeholder="@"
                  onChange={(value) => {
                    changeUsertagValue(usertag.id, value);
                  }}
                  value={usertag.value || ''}
                  style={{ width: '120px' }}
                />
                {deleteTag(usertag.id)}
              </Stack>
            )
          )}

          {!canNotAdd && (
            <Button
              variant="soft"
              sx={{
                borderRadius: '100%',
                width: '48px',
                height: '48px',
                minWidth: '48px',
                margin: '8px 0',
              }}
              onClick={() => setUsertags([...usertags, { id: nanoid() }])}
            >
              <AddIcon />
            </Button>
          )}
        </Stack>
      )}
    </div>
  );
};

export default CampaignCreateItemTaskItemQuoteATweetUsertag;
