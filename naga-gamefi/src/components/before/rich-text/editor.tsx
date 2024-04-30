import React, { useCallback, useEffect, useRef, useState } from 'react';
import Compressor from 'compressorjs';
import axios from 'axios';

import './index.scss';
import Cookies from 'js-cookie';
import ReactQuill from 'react-quill';
import quillEmoji from 'quill-emoji';
import { toast } from 'src/components/toast';
import { ajaxSignature } from 'src/utils/public';
import { HOST_API } from 'src/config-global';

const { Quill } = ReactQuill;
Quill?.register('modules/quillEmoji', quillEmoji);

// 字数限制
const limit = 500;

const QuillRichText = (props: any) => {
  const { t, onChange } = props;
  const [quillValue, setQuillValue] = useState('');
  const quill = useRef<any>();

  // useEffect(() => {
  //     if (Quill) {
  //         Quill.register(
  //             {
  //                 'formats/emoji': EmojiBlot,
  //                 'modules/emoji-shortname': ShortNameEmoji,
  //                 'modules/emoji-toolbar': ToolbarEmoji,
  //                 'modules/emoji-textarea': TextAreaEmoji
  //             },
  //             true
  //         )
  //     }
  // }, [Quill])

  // 图片压缩
  const compressImage = useCallback(
    (file: any) =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line no-new
        new Compressor(file, {
          quality: 0.6,
          convertSize: 1000000,
          success(result) {
            resolve(result);
          },
          error(err) {
            reject(err);
          },
        });
      }),
    []
  );

  // 图片上传
  const uploadFile = useCallback(
    async (formData: any) => {
      await axios({
        timeout: 15000,
        method: 'post',
        data: formData,
        baseURL: HOST_API,
        url: `/api/upload/uploadImage`,
        headers: {
          auToken: Cookies.get('auToken'),
          'Sign-Param': ajaxSignature(),
        },
      })
        .then((res) => {
          const result = res.data;
          if (result.code === 0) {
            if (typeof quill.current.getEditor !== 'function') return;
            const refQuill = quill.current.getEditor(); // 获取到编辑器本身

            const cursorPosition = refQuill.getSelection(); // 获取当前光标位置
            const index = cursorPosition ? cursorPosition.index : 0;

            refQuill.insertEmbed(index, 'image', result.data); // 插入图片
            refQuill.setSelection(index + 1); // 光标位置加1

            toast.success(t('public_upload_success'));
          } else {
            toast.error(t('public_upload_error'));
          }
        })
        .catch((err) => {
          console.log('uploadFile error', err);
          toast.error(t('public_upload_error'));
        });
    },
    [t]
  );

  // 图片上传
  const imageHandler = useCallback(() => {
    if (typeof window !== 'undefined') {
      const input: any = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.setAttribute('multiple', 'multiple');
      input.click();
      input.onchange = async () => {
        Array.from(input.files).forEach(async (item: any) => {
          const formData = new FormData();
          if (item.size <= 1024 * 1024) {
            formData.append('uploadFile', item, item.name);
            uploadFile(formData);
          } else {
            const result: any = await compressImage(item);
            formData.append('uploadFile', result, result.name);
            uploadFile(formData);
          }
        });
      };
    }
  }, [compressImage, uploadFile]);

  // 富文本设置
  // const modules = {
  //     toolbar: {
  //         container: [
  //             [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //             ['bold', 'italic', 'underline', 'strike'],
  //             [{ list: 'ordered' }, { list: 'bullet' }],
  //             [{ align: [] }],
  //             [{ color: [] }, { background: [] }],
  //             ['link', 'image'],
  //             ['clean']
  //         ],
  //         handlers: {
  //             image: imageHandler
  //         }
  //     }
  // }
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  // 内容改变
  const handleChange = useCallback(
    (value: any) => {
      setQuillValue(value);
      onChange(value);
    },
    [onChange]
  );

  useEffect(() => {
    console.log('ref', quill.current);
  }, []);

  // 字数限制
  const checkCharacterCount = (event: any) => {
    const unprivilegedEditor = quill.current?.unprivilegedEditor;
    if (unprivilegedEditor?.getLength() > limit && event.key !== 'Backspace')
      event.preventDefault();
  };

  // 字数限制显示
  const numDom = () => {
    const unprivilegedEditor = quill.current?.unprivilegedEditor;
    return (
      <div className="rich-character-count">
        {unprivilegedEditor ? unprivilegedEditor.getLength() : 0}/{limit}
      </div>
    );
  };

  return (
    <div className="rich-text-box">
      <ReactQuill
        id="rich-text"
        className="rich-text"
        theme="snow"
        ref={quill}
        value={quillValue}
        onChange={handleChange}
        onKeyDown={checkCharacterCount}
        modules={modules}
      />
      {numDom()}
    </div>
  );
};

export default QuillRichText;
