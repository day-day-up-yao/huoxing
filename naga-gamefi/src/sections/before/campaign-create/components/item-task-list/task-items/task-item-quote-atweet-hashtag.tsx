import React, { useCallback } from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { nanoid } from 'nanoid';
import { useInputProps } from '../../public';

type Hashtag = { value?: string; id: string };

const CampaignCreateItemTaskItemQuoteATweetHashtag = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const inputProps = useInputProps({ item, handleInputChange });

  // --------------------set hash tags--------------------
  const [hashtags, setHashtags] = React.useState<Hashtag[]>([{ id: nanoid() }]);

  const changeParam2Value = useCallback(
    (tags: Hashtag[]) => {
      const apiTagsParam2 = tags
        .map((hashtag) => (hashtag.value ? `#${hashtag.value}` : null))
        .filter((item) => item !== null);
      handleInputChange({
        ...item,
        param2: apiTagsParam2.length === 0 ? '' : apiTagsParam2.join('&').replace(/\s/g, ''),
      });
    },
    [handleInputChange, item]
  );

  const canNotDelete = hashtags.length === 1;
  const canNotAdd = hashtags.length >= 6;

  const deleteOneHashTag = useCallback(
    (id: string) => {
      if (canNotDelete) return;
      const tags = hashtags
        .map((hashtag) => (hashtag.id === id ? null : hashtag))
        .filter((hashtag) => hashtag !== null) as unknown as Hashtag[];

      setHashtags(() => {
        changeParam2Value(tags);
        return tags;
      });
    },
    [canNotDelete, changeParam2Value, hashtags]
  );

  const changeHashtagValue = useCallback(
    (id: string, value: string) => {
      const tags = hashtags.map((hashtag) => (hashtag.id === id ? { ...hashtag, value } : hashtag));

      setHashtags(() => {
        changeParam2Value(tags);
        return tags;
      });
    },
    [changeParam2Value, hashtags]
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
      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text)}</InputGroup.Addon>
        <Input className="input" placeholder="https://" {...inputProps} />
      </InputGroup>

      <Stack marginTop="8px" flexDirection="row" alignItems="center" flexWrap="wrap">
        {hashtags.map((hashtag, index) =>
          index === 0 ? (
            <Stack
              key={hashtag.id}
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
                  placeholder="#"
                  value={hashtag.value || ''}
                  onChange={(value) => changeHashtagValue(hashtag.id, value)}
                  style={{ width: '120px' }}
                />
              </InputGroup>
              {deleteTag(hashtag.id)}
            </Stack>
          ) : (
            <Stack
              key={hashtag.id}
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
                placeholder="#"
                onChange={(value) => {
                  changeHashtagValue(hashtag.id, value);
                }}
                value={hashtag.value || ''}
                style={{ width: '120px' }}
              />
              {deleteTag(hashtag.id)}
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
            onClick={() => setHashtags([...hashtags, { id: nanoid() }])}
          >
            <AddIcon />
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default CampaignCreateItemTaskItemQuoteATweetHashtag;
